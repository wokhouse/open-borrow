"use client";
import { createScreen } from "@/api";
import { idPattern } from "@/api/validate";
import { Button, Chip, Grid, List, ListItem, Typography } from "@mui/joy";
import {
  ItemCreateOneSchema,
  ScreenCreateOneSchema,
} from "../../../../prisma/generated/schemas";
import { useContext } from "react";
import { ItemContext } from "@/app/context/itemContext";

const Register = () => {
  const contextData = useContext(ItemContext);
  console.log(contextData);
  const { id } = contextData.item;

  if (!id) throw new Error("ID is undefined!");

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
      <Typography level="h1">
        new item:{" "}
        <Typography color="primary" variant="solid">
          {id}
        </Typography>
      </Typography>
      <List>
        <ListItem>
          ID:{" "}
          <Chip variant="soft" color="primary">
            {id}
          </Chip>
        </ListItem>
        {Object.entries(groups).map(([k, v]) => (
          <ListItem key={k}>
            {k}:{" "}
            <Chip variant="soft" color="primary">
              {v}
            </Chip>
          </ListItem>
        ))}
      </List>
      <Button
        variant="solid"
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
        sx={{ fontSize: "2.4rem" }}
      >
        Register
      </Button>
    </Grid>
  );
};
export default Register;
