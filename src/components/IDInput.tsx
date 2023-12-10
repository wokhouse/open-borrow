"use client";

import { idPattern } from "@/api/validate";
import { Box, Button, FormLabel, Grid, Input } from "@mui/joy";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

const IDInput = ({ handleSubmit }: { handleSubmit: (id: string) => void }) => {
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
        <QrScanner
          onError={console.error}
          onResult={(r) => {
            setValue(`${r}`);
            if (valid) handleSubmit(value);
          }}
          videoStyle={{ transform: "scaleX(-1)" }}
        ></QrScanner>
        <Grid container>
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
export default IDInput;
