import { Typography } from "../Typography";

export function Portfolio() {
  return (
    <div className="flex justify-around items-center flex-col max-w-sm p-5 pb-0 gap-12 font-bold min-h-screen">
      <Typography className="font-bold pt-8 text-3xl">Portfolio</Typography>
      <div className="bg-brand-secondary pt-12 pb-12 pl-24 pr-24 rounded-lg drop-shadow-xl">
        <Typography className="text-2xl ">SOON</Typography>
      </div>
      <div className="bg-brand-secondary pt-12 pb-12 pl-24 pr-24 rounded-lg drop-shadow-xl">
        <Typography className="text-2xl">SOON</Typography>
      </div>
      <div className="bg-brand-secondary pt-12 pb-12 pl-24 pr-24 rounded-lg drop-shadow-xl">
        <Typography className="text-2xl ">SOON</Typography>
      </div>
    </div>
  );
}
