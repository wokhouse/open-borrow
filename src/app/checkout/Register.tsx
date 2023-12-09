import { idPattern } from "@/api/validate";
import {
  Box,
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

const Register = ({ id }: { id: string }) => {
  const data = idPattern.exec(id);
  if (!data || !data?.groups)
    throw new Error("regex pattern failed to pull data out of ID!");
  const { groups } = data;
  console.log(groups);
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
    </Grid>
  );
};
export default Register;
