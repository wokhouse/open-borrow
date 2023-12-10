import { ItemContext } from "@/context/itemContext";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormLabel,
  Grid,
  Input,
} from "@mui/joy";
import { useContext, useState } from "react";
import { checkoutItem, getItem } from "@/api";
import texQR from "../../../assets/img/tex-stripe.png";
import Image from "next/image";
import { Item } from "@/api/runtimeSchemas";

const CheckOut = () => {
  const contextData = useContext(ItemContext);
  const [name, setName] = useState("");
  const [feePaid, setFeePaid] = useState(false);
  const [loading, setLoading] = useState(false);

  const data = Item.parse(contextData.item);
  const { setItemState } = contextData;
  const { id, state } = data;

  const handleCheckout = async () => {
    setLoading(true);
    await checkoutItem(id, name);
    const item = await getItem(id);
    if (item) setItemState(item);
    setLoading(false);
  };

  if (loading) return <CircularProgress />;

  return (
    <Box>
      <Box margin={1}>
        <FormControl>
          <FormLabel>name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
      </Box>
      <Box marginTop={2} marginBottom={1}>
        <Image
          src={texQR}
          alt="https://buy.stripe.com/28ocPY1Tq7Pv97G4gg"
          width={150}
          height={150}
        />
        <Box>
          <Checkbox
            label="$5 fee paid"
            checked={feePaid}
            onChange={() => setFeePaid(!feePaid)}
          ></Checkbox>
        </Box>
      </Box>

      <Button
        onClick={handleCheckout}
        color="success"
        disabled={!name || !feePaid}
      >
        check out
      </Button>
    </Box>
  );
};

export default CheckOut;
