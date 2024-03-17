import HomePage from "@/components/HomePage";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Trang chủ - ECHO Design",
  description: "Echo design",
  other: {
    ["or:title"]: "Trang chủ - ECHO Design",
    ["og:site_name"]: "ECHO Design",
  },
};
export default function Home() {
  return (
    <main>
      <Head>
        <link rel="preload" href="../public/home_thumbnail.jpeg" as="image" />
        <link rel="preload" href="../public/logo.png" as="image" />
      </Head>
      <HomePage />
    </main>
  );
}
