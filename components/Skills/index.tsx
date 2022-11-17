import { ScrollReveal } from "../ScrollReveal";
import { Typography } from "../Typography";

export function Skills() {
  return (
    <div className="flex justify-around items-center flex-col max-w-sm p-5 pb-40 gap-12 font-bold min-h-screen xl:max-w-6xl">
      <ScrollReveal>
        <Typography className="font-bold pt-8 text-3xl">Skills</Typography>
      </ScrollReveal>
      <section className="flex justify-start items-start min-w-full flex-col text-xl">
        <ScrollReveal>
          <Typography className="text-brand-secondary">Development</Typography>
          <div className="flex flex-wrap gap-4 font-normal text-lg pt-8">
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>Typescript</span>
            <span>SCSS</span>
            <span>NextJS</span>
            <span>NodeJS</span>
            <span>GitHub</span>
            <span>ReactJS</span>
            <span>MongoDB</span>
            <span>PostgreSQL</span>
            <span>Kubernetes</span>
            <span>TailwindCSS</span>
            <span>Docker</span>
            <span>TDD</span>
            <span>DDD</span>
            <span>Clean Architeture</span>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
