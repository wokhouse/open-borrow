"use client";

import { idPattern } from "@/api/validate";
import { Box, Button, FormLabel, Grid, Input } from "@mui/joy";
import { useState } from "react";

const ManualInput = ({
  handleSubmit,
}: {
  handleSubmit: (id: string) => void;
}) => {
  const [value, setValue] = useState<string>("");

  const valid = idPattern.test(value);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) handleSubmit(value);
      }}
    >
      <Grid container gap={1} alignItems={"flex-end"}>
        <Grid container direction={"column"}>
          <FormLabel>manual ID input</FormLabel>
          <Input
            id="manualInput"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            error={!valid}
          />
        </Grid>
        <Box>
          <Button color="primary" type="submit">
            submit
          </Button>
        </Box>
      </Grid>
    </form>
  );
};
export default ManualInput;
