import { Chip, ColorPaletteProp } from "@mui/joy";
import { Item } from "@prisma/client";

const stateColors: Record<Item["state"], ColorPaletteProp> = {
  AVAILABLE: "success",
  CHECKED_OUT: "warning",
  DUE: "danger",
  DAMAGED: "neutral",
};

const StateChip = ({ state }: { state: Item["state"] }) => (
  <Chip color={stateColors[state]}>{state}</Chip>
);

export default StateChip;
