import Head from "next/head";
import {
  Home,
  About,
  Footer,
  Portfolio,
  Skills,
  ScrollReveal,
} from "../components";

export default function Main() {
  return (
    // COLOCAR UM PADDING NO MAIN PROLONGA O BG
    <>
      <Head>
        <title>will.coding</title>
      </Head>
      <main className="flex flex-col items-center bg-white text-dark dark:bg-dark dark:text-white font-poppins ">
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
