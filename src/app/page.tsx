import { Box, Card, CardContent, Grid, Sheet, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Grid
      container
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card>
        <CardContent>
          <Grid container justifyContent={"center"} minWidth={"30rem"}>
            <Typography level="h2">open borrow</Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
