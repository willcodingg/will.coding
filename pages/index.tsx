import Head from "next/head";
import {
  Home,
  About,
  Footer,
  Portfolio,
  Skills,
  ScrollReveal,
  Header,
} from "../components";

export default function Main() {
  return (
    // COLOCAR UM PADDING NO MAIN PROLONGA O BG
    <>
      <Head>
        <title>will.coding</title>
      </Head>
      <div className="flex flex-col items-center bg-white text-dark dark:bg-dark dark:text-white font-poppins transition-colors duration-1000">
        <Header />
        <main className="p-8 w-full">
          <Home />
          <About />
          <Portfolio />
        </main>
      </div>
    </>
  );
}
