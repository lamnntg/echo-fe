import { Raleway } from "next/font/google";
import localFont from "next/font/local";

export const FuturaNow = localFont({ src: "../fonts/FuturaNowHeadline.ttf" });

export const RaleWay = Raleway({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
