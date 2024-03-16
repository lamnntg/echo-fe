import HomePage from "@/components/HomePage";
import Head from "next/head";

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
