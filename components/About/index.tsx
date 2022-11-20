import Image from "next/image";
import { Typography } from "../Typography";
import profile from "../../styles/assets/w.coding.png";
import { ScrollReveal } from "../ScrollReveal";

export function About() {
  return (
    <div className="flex flex-col justify-center pb-24 text-base min-h-screen gap-2">
      <Typography className="text-2xl lg:text-4xl lg:pb-10">
        About Me
      </Typography>
      <Typography className="text-brand-secondary font-bold lg:text-transparent">
        FullStack Engineer
      </Typography>
      <div className="flex flex-col gap-8 ">
        <Typography className="max-w-sm lg:text-2xl lg:max-w-full">
          Hello, my name is William i have worked in a software consulting
          company as a{" "}
          <span className="text-brand-secondary">FullStack Developer</span>,
          building projects and features for large Brazilian banks related to
          open banking technology.
        </Typography>
        <Typography className="max-w-sm lg:text-2xl lg:max-w-full">
          I currently work at a large technology company focused on education,
          building systems as{" "}
          <span className="text-brand-secondary">FullStack Engineer</span>
        </Typography>
        <Typography className="max-w-sm lg:text-2xl lg:max-w-full">
          Here are some technologies I am currently working with:
        </Typography>
        <div className="flex flex-col gap-1 lg:max-w-2xl lg:text-2xl">
          <section className="flex flex-wrap justify-between">
            <span>&gt; Javascript</span>
            <span>&gt; Typescript</span>
          </section>
          <section className="flex flex-wrap justify-between">
            <span>&gt; React</span>
            <span>&gt; NodeJS</span>
          </section>
          <section className="flex flex-wrap justify-between">
            <span>&gt; PostgreSQL</span>
            <span>&gt; Prisma</span>
          </section>
        </div>
      </div>
    </div>
  );
}
