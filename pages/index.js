import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Body from "@components/Body";
import TopNav from "@components/TopNav";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hunter Oredson's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <main>
        <Header title="About Me" />
        <Body />
      </main>

      <Footer />
    </div>
  );
}
