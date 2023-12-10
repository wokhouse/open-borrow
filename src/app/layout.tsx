import { Box, Grid, Sheet } from "@mui/joy";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { ItemProvider } from "../context/itemContext";
import Link from "next/link";

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
        <ItemProvider>
          <Sheet>
            <Grid
              container
              width={"100%"}
              height={"95vh"}
              overflow={"hidden"}
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"column"}
            >
              <Link href={"/"}>
                <Box fontSize={"2.5rem"}>🏠</Box>
              </Link>
              <Box>{children}</Box>
              <Box />
            </Grid>
          </Sheet>
        </ItemProvider>
      </body>
    </html>
  );
}
