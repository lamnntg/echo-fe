import HomePage from "@/components/HomePage";
import { Metadata, Viewport } from "next";
import Head from "next/head";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
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
