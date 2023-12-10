"use client";

import { checkoutItem, getItem, getItemInclude, returnItem } from "@/api";
import { ItemContext } from "@/context/itemContext";
import {
  Box,
  Button,
  Chip,
  ColorPaletteProp,
  Grid,
  List,
  Typography,
} from "@mui/joy";
import { useContext, useEffect, useState } from "react";
import StateChip from "@/components/StateChip";
import CheckOut from "./CheckOut";
import { Item, ItemAction as ItemActionSchema } from "@/api/runtimeSchemas";
import Return from "./Return";
import useAsyncEffect from "use-async-effect";
import { ItemAction } from "@prisma/client";
import { z } from "zod";

const Modify = () => {
  const { item } = useContext(ItemContext);
  const [lastAction, setLastAction] = useState<
    | { action: ItemAction }
    | { loading: true }
    | { uninitialized: true }
    | { empty: true }
  >({ uninitialized: true });

  const { id, state } = Item.parse(item);

  useAsyncEffect(
    async (isMounted) => {
      setLastAction({ loading: true });
      const { id } = Item.parse(item);
      const res = await getItemInclude(id, {
        actions: {
          orderBy: {
            timestamp: "desc",
          },
        },
      });
      if (!res) throw new Error("unknown item!");
      if (isMounted()) {
        if (!res?.actions) setLastAction({ empty: true });
        else {
          const action = ItemActionSchema.extend({
            action: z.enum(["CHECK_OUT"]),
            dueDate: z.coerce.date(),
            itemId: z.string(),
          }).safeParse({ ...res.actions[0], itemId: id });
          if (action.success) {
            setLastAction({ action: action.data });
          }
        }
      }
    },
    [item]
  );

  return (
    <Box textAlign={"center"}>
      <Typography level="h1">
        <Typography variant="solid" color="primary">
          {id}
        </Typography>
      </Typography>
      <Box fontSize={"1.5rem"} fontWeight={"bold"} margin={2}>
        <Grid container direction={"column"} gap={1}>
          <Box>
            status: <StateChip state={state} />
          </Box>
          {"action" in lastAction && lastAction?.action?.name && (
            <Box>
              checked out to:{" "}
              <StateChip state={"CHECKED_OUT"}>
                {lastAction.action.name}
              </StateChip>
            </Box>
          )}
          {"action" in lastAction && lastAction?.action?.dueDate && (
            <Box>
              due:{" "}
              <StateChip
                state={
                  lastAction.action.dueDate < new Date() ? "DUE" : "CHECKED_OUT"
                }
              >
                {lastAction.action.dueDate.toLocaleDateString()}
              </StateChip>
            </Box>
          )}
        </Grid>
      </Box>
      <Box margin={1} sx={{ button: { fontSize: "1.5rem" } }}>
        {state === "AVAILABLE" && <CheckOut />}
        {(state === "CHECKED_OUT" || state === "DUE") && <Return />}
      </Box>
    </Box>
  );
};

export default Modify;
