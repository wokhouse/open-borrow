import { Sheet } from "@mui/joy";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <Sheet>{children}</Sheet>
      </body>
    </html>
  );
}
