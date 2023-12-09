import { Button, Grid, Typography } from "@mui/joy";
import { useState } from "react";
import Scanner from "./components/Scanner";

type AppState = "idle" | "scanning";
function App() {
  const [appState, setAppState] = useState<AppState>("scanning");

  return (
    <Grid
      container
      width={"100vw"}
      minHeight={"100vh"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Grid container justifyContent={"center"}>
        <Typography
          level="h1"
          fontWeight={"bold"}
          width={"100%"}
          textAlign={"center"}
          marginBottom={".5rem"}
        >
          Textiles Screen Library
        </Typography>
        {appState === "idle" && (
          <Button color="primary">
            <Typography level="h1" sx={{ color: "#FFF" }}>
              Touch to start
            </Typography>
          </Button>
        )}
        {appState === "scanning" && <Scanner />}
      </Grid>
    </Grid>
  );
}

export default App;
