import Image from "next/image";
import { Typography } from "../Typography";
import profile from "../../styles/assets/w.coding.png";

export function About() {
  return (
    <div className="flex justify-around items-center flex-col bg-dark-secondary p-5 pb-12 gap-12">
      <Typography className="font-bold pt-8 text-xl">About</Typography>
      <Image
        className="inline object-cover w-16 h-16 rounded-full"
        src={profile}
        alt="Profile image"
      />
      <Typography className="text-brand-secondary font-bold flex flex-col items-center gap-2">
        I’m William Jonathan
        <span className="text-white font-normal text-xs">
          FullStack Engineer
        </span>
      </Typography>
      <Typography className="text-center text-sm max-w-sm">
        Hello, my name is William Jonathan, currently i work as fullstack
        engineer. During my job experiencies i learn to work in back-end and
        front-end with the javascript stack, like react/nextjs in frontend and
        nodejs/nestjs in backend, using typescript for typed projects. And i
        learn good pratices too, like DDD (Domain-Driven-Desing), TDD and Clean
        Architeture.
      </Typography>
    </div>
  );
}
