import localFont from "next/font/local";

export const causten = localFont({
  src: [
    {
      path: "../public/fonts/Causten/Causten-Black.otf",
      weight: "900",
    },
    {
      path: "../public/fonts/Causten/Causten-ExtraBold.otf",
      weight: "800",
    },
    {
      path: "../public/fonts/Causten/Causten-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/Causten/Causten-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/Causten/Causten-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Causten/Causten-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Causten/Causten-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/Causten/Causten-ExtraLight.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/Causten/Causten-Thin.otf",
      weight: "100",
    },
  ],
  variable: "--font-causten",
});
export const open_sans = localFont({
  src: [
    {
      path: "../public/fonts/open-sans/OpenSans-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/open-sans/OpenSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/open-sans/OpenSans-Semibold.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/open-sans/OpenSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/open-sans/OpenSans-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-open_sans",
});
