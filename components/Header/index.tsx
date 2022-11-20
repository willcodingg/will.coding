import { MdDarkMode } from "react-icons/md";
import { Typography } from "../Typography";

export function Header() {
  const themeSwitch = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  return (
    <header className="flex items-center justify-between w-full p-8">
      <Typography className="text-dark dark:text-white">will.coding</Typography>

      <button onClick={themeSwitch}>
        <MdDarkMode className="text-3xl" />
      </button>
    </header>
  );
}
