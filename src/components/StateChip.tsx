import { Chip, ColorPaletteProp } from "@mui/joy";
import { Item } from "@prisma/client";
import { ReactNode } from "react";

const stateColors: Record<Item["state"], ColorPaletteProp> = {
  AVAILABLE: "success",
  CHECKED_OUT: "warning",
  DUE: "danger",
  DAMAGED: "neutral",
};

const StateChip = ({
  state,
  children,
}: {
  state: Item["state"];
  children?: ReactNode;
}) => <Chip color={stateColors[state]}>{children || state}</Chip>;

export default StateChip;
