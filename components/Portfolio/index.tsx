import { Typography } from "../Typography";
import { ScrollReveal } from "../ScrollReveal";

export function Portfolio() {
  return (
    <ScrollReveal>
      <div className="flex justify-around items-center flex-col max-w-sm p-5 pb-0 gap-12 min-h-screen">
        <Typography className="font-bold pt-8 text-3xl">Portfolio</Typography>
        <ScrollReveal>
          <div className="border-white border-solid border-2 pt-12 pb-12 pl-24 pr-24 rounded-lg drop-shadow-xl">
            <Typography className="text-2xl">SOON</Typography>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="border-brand-secondary border-solid border-2 pt-12 pb-12 pl-24 pr-24 rounded-lg drop-shadow-xl">
            <Typography className="text-2xl">SOON</Typography>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="border-white border-solid border-2 pt-12 pb-12 pl-24 pr-24 rounded-lg drop-shadow-xl">
            <Typography className="text-2xl">SOON</Typography>
          </div>
        </ScrollReveal>
      </div>
    </ScrollReveal>
  );
}
