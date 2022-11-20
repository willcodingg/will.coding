import Image from "next/image";
import cup3D from "../../styles/assets/cup-dynamic-color.png";
import TypingEffectTitle from "../TypingEffectTitle";
import { Typography } from "../Typography";

export function Home() {
  return (
    <div className="flex justify-evenly items-center flex-wrap h-[80vh] lg:min-w-full lg:justify-between lg:items-start lg:pt-32">
      <section className="flex justify-center items-start flex-col text-lg min-w-full text-start lg:min-w-0 lg:w-2/3 lg:text-3xl lg:gap-2">
        <Typography className="text-brand-secondary">Hi, my name is</Typography>
        <Typography className="text-4xl font-bold">William Jonathan</Typography>
        <TypingEffectTitle />
        <a
          className="mt-2"
          href="https://www.instagram.com/will.coding/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="border border-brand pr-8 pl-8 pt-2 pb-2 text-lg line text-brand-secondary dark:text-white dark:bg-brand-secondary dark:border-none">
            Instagram
          </button>
        </a>
      </section>
      <Image
        priority={true}
        className="w-40 lg:flex-grow"
        src={cup3D}
        alt="3d model of a cup"
      />
    </div>
  );
}
