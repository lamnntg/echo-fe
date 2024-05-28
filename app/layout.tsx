import "./globals.css";
import Header from "@/components/layouts/Header";
import { Source_Sans_3, Raleway } from "next/font/google";
import Footer from "@/components/layouts/Footer";
import "swiper/css";
import "swiper/css/effect-fade";
import { Metadata } from "next";
import ScrollToTop from "@/components/layouts/ScrollToTop";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECHO Design",
  other: {
    ["or:title"]: "ECHO Design",
    ["og:site_name"]: "ECHO Design",
    ["viewport"]: "width=device-width, initial-scale=1.0",
  },
  description: "Công ty cổ phần EchoDesign",
  openGraph: {
    title: "ECHO Design",
    description: "Công ty cổ phần EchoDesign",
    url: "https://www.echodesign.vn/",
    type: "website",
    images: [
      {
        url: "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9pY29uLnBuZw==&version_id=null",
        alt: "thumbnailUrl",
        width: 400,
        height: 200,
      },
    ],
    siteName: "Công ty cổ phần EchoDesign",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={sourceSansPro.variable}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
