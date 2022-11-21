import { Typography } from "../Typography";
import { Footer } from "../Footer";

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
      <Footer />
    </div>
  );
}
