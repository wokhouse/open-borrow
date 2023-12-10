"use client";

import { ItemContext } from "@/app/context/itemContext";
import { Box, Chip, ColorPaletteProp, Typography } from "@mui/joy";
import { Item } from "@prisma/client";
import { useContext } from "react";
import { ItemCreateOneSchema } from "../../../../prisma/generated/schemas";

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
    </Box>
  );
};

export default Modify;
