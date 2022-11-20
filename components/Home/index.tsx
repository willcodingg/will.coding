import Image from "next/image";
import cup3D from "../../styles/assets/cup-dynamic-color.png";
import TypingEffectTitle from "../TypingEffectTitle";
import { Typography } from "../Typography";

export function Home() {
  return (
    <div className="flex justify-evenly items-center flex-wrap h-[80vh] xl:self-baseline">
      <section className="flex justify-center items-start flex-col text-lg min-w-full max-w-xs text-start">
        <Typography className="text-brand-secondary">Hi, my name is</Typography>
        <Typography className="text-xl font-bold">William Jonathan</Typography>
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
        className="w-40 xl:max-w-md"
        src={cup3D}
        alt="3d model of a cup"
      />
    </div>
  );
}
