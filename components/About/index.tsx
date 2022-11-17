import Image from "next/image";
import { Typography } from "../Typography";
import profile from "../../styles/assets/w.coding.png";

export function About() {
  return (
    <div className="flex flex-col justify-around items-center max-w-sm p-5 pb-24 gap-12 min-h-screen">
      <Typography className="font-bold pt-8 text-3xl">About</Typography>
      <Image
        className="inline object-cover w-16 h-16 rounded-full"
        src={profile}
        alt="Profile image"
      />
      <Typography className="text-brand-secondary font-bold flex flex-col items-center gap-2 text-lg">
        I’m William Jonathan
        <span className="text-white font-normal text-sm">
          FullStack Engineer
        </span>
      </Typography>
      <Typography className="text-center text-lg max-w-sm">
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
