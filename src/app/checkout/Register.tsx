import { createItem, createScreen } from "@/api";
import { idPattern } from "@/api/validate";
import {
  Box,
  Button,
  Chip,
  Dropdown,
  Grid,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  Table,
} from "@mui/joy";
import { Prisma, Item, Screen } from "@prisma/client";
import {
  ItemCreateOneSchema,
  ScreenCreateOneSchema,
} from "../../../prisma/generated/schemas";

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

  // const { data: newScreenData } = ScreenCreateOneSchema.parse({
  //   itemId: id,
  //   meshCount: groups.meshCount,
  //   screenNumber: groups.screenNumber,
  // });
  console.log(newItemData);

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
          createItem({ ...newItemData, createdAt: new Date() });
        }}
      >
        Register
      </Button>
    </Grid>
  );
};
export default Register;
