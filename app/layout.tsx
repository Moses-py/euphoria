import { causten, raleway } from "@/utils/fonts";
import "./globals.css";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Euphoria | Home",
  description:
    "Shop your favorite clothings and apparels with us here at Euphoria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${causten.variable} ${raleway.variable}`}>
        <NextTopLoader color="#6246EA" height={6} />

        {children}
      </body>
    </html>
  );
}
