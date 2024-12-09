import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "Board Game Catalog",
  description: "Board Game Catalog by Dominik Kubis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={"antialiased"}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
