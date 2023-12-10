import { Box, Grid, Sheet } from "@mui/joy";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { ItemProvider } from "./context/itemContext";

export const metadata: Metadata = {
  title: "📚 open-borrow",
  description: "open-source QR code based library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sheet>
          <Grid
            container
            width={"100vw"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ItemProvider>
              <Box>{children}</Box>
            </ItemProvider>
          </Grid>
        </Sheet>
      </body>
    </html>
  );
}
