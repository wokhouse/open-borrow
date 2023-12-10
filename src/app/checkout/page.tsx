"use client";

import { getItem } from "@/api";
import { Box, CircularProgress, Grid, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { ItemContext } from "../context/itemContext";
import ManualInput from "./components/ManualInput";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { setID, setItemState } = useContext(ItemContext);
  const router = useRouter();

  const handleIdInput = async (id: string) => {
    setLoading(true);
    const res = await getItem(id);
    console.log(res);
    if (res === null) {
      setID(id);
      router.push("/checkout/register");
    } else {
      setItemState(res);
      router.push("/checkout/modify");
    }
    setLoading(false);
  };

  return (
    <Grid container direction="column" alignItems={"center"}>
      <Typography level="h1">checkout</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <ManualInput handleSubmit={handleIdInput} />
      )}
    </Grid>
  );
};

export default Checkout;
