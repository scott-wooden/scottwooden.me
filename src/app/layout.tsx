import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scott Wooden",
  description: "Product Designer & Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
