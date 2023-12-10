"use client";

import { checkoutItem, getItem, getItemInclude, returnItem } from "@/api";
import { ItemContext } from "@/app/context/itemContext";
import { Box, Button, Chip, ColorPaletteProp, Typography } from "@mui/joy";
import { Item } from "@prisma/client";
import { useContext } from "react";
import {
  ItemCreateOneSchema,
  ItemFindUniqueSchema,
} from "../../../../prisma/generated/schemas";

const Modify = () => {
  const contextData = useContext(ItemContext);
  const { data } = ItemCreateOneSchema.parse({
    data: contextData.item,
  });
  const { setItemState } = contextData;
  const { id, state } = data;

  const stateColors: Record<Item["state"], ColorPaletteProp> = {
    AVAILABLE: "success",
    CHECKED_OUT: "warning",
    DUE: "danger",
    DAMAGED: "neutral",
  };

  const handleCheckout = async () => {
    await checkoutItem(id, "crane yakamoto");
    const item = await getItem(id);
    if (item) setItemState(item);
  };
  const handleReturn = async () => {
    await returnItem(id);
    const item = await getItem(id);
    if (item) setItemState(item);
  };

  return (
    <Box textAlign={"center"}>
      <Typography level="h1">
        <Typography variant="solid" color="primary">
          {id}
        </Typography>
      </Typography>
      <Box fontSize={"1.5rem"} fontWeight={"bold"} margin={2}>
        status: <Chip color={stateColors[state]}>{state}</Chip>
      </Box>
      <Box margin={1} sx={{ button: { fontSize: "1.5rem" } }}>
        {state === "AVAILABLE" && (
          <Button onClick={handleCheckout} color="success">
            check out
          </Button>
        )}
        {state === "CHECKED_OUT" ||
          (state === "DUE" && <Button onClick={handleReturn}>return</Button>)}
      </Box>
    </Box>
  );
};

export default Modify;
