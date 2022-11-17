import Image from "next/image";
import guyInComputer from "../../styles/assets/cup-dynamic-color.png";
import TypingEffectTitle from "../TypingEffectTitle";
import { Typography } from "../Typography";
import { MdDarkMode } from "react-icons/md";

export function Home() {
  const themeSwitch = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  return (
    <div className="flex flex-col p-5 pb-0 min-h-screen max-w-sm xl:max-w-6xl xl:grid xl:grid-rows-[1fr_30fr]">
      <section className="flex items-center justify-between">
        <Typography className="text-dark dark:text-white xl:self-start">
          will.coding
        </Typography>

        <button onClick={themeSwitch}>
          <MdDarkMode className="text-3xl" />
        </button>
      </section>
      <div className="flex justify-evenly items-center flex-wrap h-[90vh] xl:self-baseline">
        <section className="flex justify-center items-center flex-col text-center gap-5 text-2xl pt-24 min-w-full max-w-sm lg:text-4xl lg:max-w-xl lg:w-[36rem] lg:text-start lg:items-start ">
          <TypingEffectTitle />
          <a href="https://www.instagram.com/will.coding/">
            <button className="bg-brand-secondary hover:bg-brand rounded-lg pr-8 pl-8 pt-2 pb-2 text-lg line text-white lg:text-2xl lg:pt-4 lg:pb-4 ">
              Instagram
            </button>
          </a>
        </section>
        <Image
          priority={true}
          className="w-40 xl:max-w-md"
          src={guyInComputer}
          alt="3d model of guy in computer"
        />
      </div>
    </div>
  );
}
