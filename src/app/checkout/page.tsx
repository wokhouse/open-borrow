"use client";

import { getItem } from "@/api";
import { Box, Grid, Typography } from "@mui/joy";
import { useState } from "react";
import ManualInput from "./components/ManualInput";
import Register from "./pages/Register";

const Checkout = () => {
  const [checkoutState, setCheckoutState] = useState<
    | { state: "scanning" }
    | { state: "checkout"; id: string }
    | { state: "return"; id: string }
    | { state: "register"; id: string }
    | { state: "error"; error: string }
  >({ state: "scanning" });

  const handleIdInput = async (id: string) => {
    const res = await getItem(id);
    if (res === null) {
      setCheckoutState({
        state: "register",
        id,
      });
    }
  };

  const { state } = checkoutState;
  return (
    <Grid container direction="column" alignItems={"center"}>
      {state === "scanning" && (
        <Box>
          <Typography level="h1">checkout</Typography>
          <ManualInput handleSubmit={handleIdInput} />
        </Box>
      )}
      {state === "register" && (
        <Box>
          <Typography level="h1">new item: {checkoutState.id}</Typography>
          <Register id={checkoutState.id} />
        </Box>
      )}
    </Grid>
  );
};

export default Checkout;
