"use client";

import { ItemContext } from "@/app/context/itemContext";
import { Box } from "@mui/joy";
import { useContext } from "react";

const Modify = () => {
  const data = useContext(ItemContext);
  console.log(data);
  return <Box>AHHHHHHHHH</Box>;
};

export default Modify;
