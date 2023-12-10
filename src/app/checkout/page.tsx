"use client";

import { getItem } from "@/api";
import { Box, Grid, Typography } from "@mui/joy";
import { useContext } from "react";
import { ItemContext } from "../context/itemContext";
import ManualInput from "./components/ManualInput";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { setID, setItemState } = useContext(ItemContext);
  const router = useRouter();

  const handleIdInput = async (id: string) => {
    const res = await getItem(id);
    if (res === null) {
      setID(id);
      router.push("/checkout/register");
    } else {
      setItemState(res);
      router.push("/checkout/modify");
    }
  };

  return (
    <Grid container direction="column" alignItems={"center"}>
      <Box>
        <Typography level="h1">checkout</Typography>
        <ManualInput handleSubmit={handleIdInput} />
      </Box>
    </Grid>
  );
};

export default Checkout;
