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
        <main className="p-8 w-full flex flex-col justify-center max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-4xl">
          <Home />
          <About />
          <Portfolio />
        </main>
      </div>
    </>
  );
}
