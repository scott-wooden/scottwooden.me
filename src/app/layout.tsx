import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scott Wooden",
  description: "A Space-loving, 90's bopping digital designer & engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
