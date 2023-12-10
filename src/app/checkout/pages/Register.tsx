import { createScreen } from "@/api";
import { idPattern } from "@/api/validate";
import { Button, Chip, Grid, List, ListItem } from "@mui/joy";
import {
  ItemCreateOneSchema,
  ScreenCreateOneSchema,
} from "../../../../prisma/generated/schemas";

const Register = ({ id }: { id: string }) => {
  const data = idPattern.exec(id);
  if (!data || !data?.groups)
    throw new Error("regex pattern failed to pull data out of ID!");
  const { groups } = data;

  const { data: newItemData } = ItemCreateOneSchema.parse({
    data: {
      id: id,
      state: "AVAILABLE",
      department: "TEX",
      type: groups.type,
    },
  });

  const screenParseResults = ScreenCreateOneSchema.parse({
    data: {
      itemId: id,
      meshCount: parseInt(groups.meshCount),
      screenNumber: parseInt(groups.screenNumber),
    },
  });

  return (
    <Grid container direction={"column"}>
      <List>
        <ListItem>
          ID: <Chip>{id}</Chip>
        </ListItem>
        {Object.entries(groups).map(([k, v]) => (
          <ListItem key={k}>
            {k}: <Chip>{v}</Chip>
          </ListItem>
        ))}
      </List>
      <Button
        onClick={() => {
          createScreen({
            itemMeta: { ...newItemData, createdAt: new Date() },
            screenMeta: {
              itemId: id,
              meshCount: parseInt(groups.meshCount),
              screenNumber: parseInt(groups.screenNumber),
            },
          });
        }}
      >
        Register
      </Button>
    </Grid>
  );
};
export default Register;
