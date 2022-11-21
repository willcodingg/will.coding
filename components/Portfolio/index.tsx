import { Typography } from "../Typography";
import { BsInstagram } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Portfolio() {
  return (
    <div className="flex flex-col justify-around gap-12 min-h-screen">
      <Typography className="text-2xl">Portfolio</Typography>
      <div className="border-brand-lighter text-brand-lighter border-solid border-2 pt-14 pb-14 lg:pb-24 lg:pt-24">
        <Typography className="text-5xl text-center">SOON</Typography>
      </div>
      <div className="border-brand-lighter text-brand-lighter border-solid border-2 pt-14 pb-14 lg:pb-24 lg:pt-24">
        <Typography className="text-5xl text-center">SOON</Typography>
      </div>
      <div>
        <section className="flex text-3xl gap-12 justify-center dark:text-white">
          <a
            className="cursor-pointer hover:text-brand-secondary"
            href="https://www.github.com/willcodingg/"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            className="cursor-pointer hover:text-brand-secondary"
            href="https://www.instagram.com/will.coding/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            className="cursor-pointer hover:text-brand-secondary"
            href="https://www.linkedin.com/in/willcoding/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </section>
        <Typography className="text-center pt-4">
          Build by{" "}
          <span className="text-brand-secondary">William Jonathan</span>
        </Typography>
      </div>
    </div>
  );
}
