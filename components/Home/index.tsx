import Image from "next/image";
import { Typography } from "../Typography";
import guyInComputer from "../../styles/assets/guy-in-computer.svg";
import TypingEffect from "../TypingEffect";

export function Home() {
  return (
    <div className="flex flex-col p-5 pb-0 min-h-screen max-w-sm lg:max-w-xl">
      <Typography>will.coding</Typography>
      <div className="flex justify-evenly items-center flex-wrap">
        <section className="flex justify-center items-center flex-col text-center gap-5 text-2xl lg:text-4xl lg:max-w-sm pt-24">
          <TypingEffect />
          <a href="https://www.instagram.com/will.coding/">
            <button className="bg-brand-secondary hover:bg-brand rounded-lg pr-8 pl-8 pt-2 pb-2 text-lg line">
              Instagram
            </button>
          </a>
        </section>
        <Image
          width="384"
          src={guyInComputer}
          alt="3d model of guy in computer"
          className="self-center lg:w-96"
        />
      </div>
    </div>
  );
}
