import Head from "next/head";
import { Home, About, Footer, Portfolio, Skills } from "../components";

export default function Main() {
  return (
    // COLOCAR UM PADDING NO MAIN PROLONGA O BG
    <>
      <Head>
        <title>will.coding</title>
      </Head>
      <main className="text-white font-poppins p-5 pb-0 min-h-full">
        <Home />
        <About />
        <Portfolio />
        <Skills />
      </main>
    </>
  );
}
