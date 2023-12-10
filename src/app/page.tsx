import { Box, Button, Grid, Typography } from "@mui/joy";
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
        textiles library
      </Typography>
      <Link href={"/checkout"}>
        <Button color="primary">
          <Typography level="h1" sx={{ color: "#FFF" }}>
            touch to begin
          </Typography>
        </Button>
      </Link>
      <Box margin={1} sx={{ a: { color: "#000" } }}>
        <Link href={"view_items"}>view all items</Link>
      </Box>
    </Grid>
  );
}
