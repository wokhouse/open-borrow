"use client";

import { checkoutItem, getItem, getItemInclude, returnItem } from "@/api";
import { ItemContext } from "@/context/itemContext";
import { Box, Button, Chip, ColorPaletteProp, Typography } from "@mui/joy";
import { useContext } from "react";
import StateChip from "@/components/StateChip";
import CheckOut from "./CheckOut";
import { Item } from "@/api/runtimeSchemas";
import Return from "./Return";

const Modify = () => {
  const contextData = useContext(ItemContext);

  const data = Item.parse(contextData.item);
  const { setItemState } = contextData;
  const { id, state } = data;

  return (
    <Box textAlign={"center"}>
      <Typography level="h1">
        <Typography variant="solid" color="primary">
          {id}
        </Typography>
      </Typography>
      <Box fontSize={"1.5rem"} fontWeight={"bold"} margin={2}>
        status: <StateChip state={state} />
      </Box>
      <Box margin={1} sx={{ button: { fontSize: "1.5rem" } }}>
        {state === "AVAILABLE" && <CheckOut />}
        {(state === "CHECKED_OUT" || state === "DUE") && <Return />}
      </Box>
    </Box>
  );
};

export default Modify;
