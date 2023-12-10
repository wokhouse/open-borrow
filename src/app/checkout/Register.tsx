import { createScreen } from "@/api";
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

const Register = ({ id }: { id: string }) => {
  const data = idPattern.exec(id);
  if (!data || !data?.groups)
    throw new Error("regex pattern failed to pull data out of ID!");
  const { groups } = data;

  const newItemData = {
    id: id,
    state: "AVAILABLE",
    department: groups.dept,
  } satisfies Item;

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
            itemMeta: {
              id: id,
              state: "AVAILABLE",
              department: groups.department,
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
