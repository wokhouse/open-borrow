import { Button, Grid, Typography } from "@mui/joy";
import Link from "next/link";

export default function Home() {
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      minWidth={"30rem"}
    >
      <Typography level="h1" marginBottom={"1rem"}>
        open borrow
      </Typography>
      <Link href={"/checkout"}>
        <Button color="primary">
          <Typography level="h1" sx={{ color: "#FFF" }}>
            touch to begin
          </Typography>
        </Button>
      </Link>
    </Grid>
  );
}
