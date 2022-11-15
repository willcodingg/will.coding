import { Typography } from "../Typography";

export function Footer() {
  return (
    <div className="flex flex-col items-center font-bold text-sm pt-8 pb-8">
      <Typography>@2022 willcoding.com.br</Typography>
      <Typography>
        <span className="text-brand-secondary">Powered by</span> will.coding
      </Typography>
    </div>
  );
}
