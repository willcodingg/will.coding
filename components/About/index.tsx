import Image from "next/image";
import { Typography } from "../Typography";
import profile from "../../styles/assets/w.coding.png";
import { ScrollReveal } from "../ScrollReveal";

export function About() {
  return (
    <div className="flex flex-col justify-center max-w-sm pb-24 text-base min-h-screen gap-2">
      <Typography className="text-2xl">About Me</Typography>
      <Typography className="text-brand-secondary font-bold">
        FullStack Engineer
      </Typography>
      <div className="flex flex-col gap-8">
        <Typography className="max-w-sm">
          Hello, my name is William i have worked in a software consulting
          company as a{" "}
          <span className="text-brand-secondary">FullStack Developer</span>,
          building projects and features for large Brazilian banks related to
          open banking technology.
        </Typography>
        <Typography className="max-w-sm">
          I currently work at a large technology company focused on education,
          building systems as{" "}
          <span className="text-brand-secondary">FullStack Engineer</span>
        </Typography>
        <Typography className="max-w-sm">
          Here are some technologies I am currently working with:
        </Typography>
        <div className="flex flex-col gap-1">
          <section className="flex flex-wrap justify-between">
            <span>* Javascript</span>
            <span>* Typescript</span>
          </section>
          <section className="flex flex-wrap justify-between">
            <span>* React</span>
            <span>* NodeJS</span>
          </section>
          <section className="flex flex-wrap justify-between">
            <span>* PostgreSQL</span>
            <span>* Prisma</span>
          </section>
        </div>
      </div>
    </div>
  );
}
