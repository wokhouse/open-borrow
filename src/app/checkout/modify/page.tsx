"use client";

import { ItemContext } from "@/app/context/itemContext";
import { Box, Button, Chip, ColorPaletteProp, Typography } from "@mui/joy";
import { Item } from "@prisma/client";
import { useContext } from "react";
import { ItemCreateOneSchema } from "../../../../prisma/generated/schemas";
import { checkoutItem, returnItem } from "@/api";

const Modify = () => {
  const contextData = useContext(ItemContext);
  const { data } = ItemCreateOneSchema.parse({ data: contextData.item });
  const { id, state } = data;

  const stateColors: Record<Item["state"], ColorPaletteProp> = {
    AVAILABLE: "success",
    CHECKED_OUT: "warning",
    DUE: "danger",
    DAMAGED: "neutral",
  };

  const handleCheckout = async () => {
    await checkoutItem(id, "crane yakamoto");
  };
  const handleReturn = async () => {
    await returnItem(id);
  };

  return (
    <Box textAlign={"center"}>
      <Typography level="h1">
        <Typography variant="solid" color="primary">
          {id}
        </Typography>
      </Typography>
      <Box sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        status: <Chip color={stateColors[state]}>{state}</Chip>
      </Box>
      <Button onClick={handleCheckout}>check out</Button>
      <Button onClick={handleReturn}>return</Button>
    </Box>
  );
};

export default Modify;
