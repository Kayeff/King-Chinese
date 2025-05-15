import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function Button({ text, to }) {
  return (
    <NavLink
      to={to}
      end
      viewTransition
      className={({ isActive }) =>
        twMerge(
          "w-full text-center px-4 py-3 border border-chilli-red bg-chilli-red text-black hover:bg-black hover:text-chilli-red duration-300 text-sm uppercase font-medium laptop:text-lg laptop-l:text-xl cursor-pointer rounded-lg font-gang-of-three flex items-center justify-center",
          isActive &&
            "bg-safety-orange text-black hover:bg-safety-orange hover:text-black border-none"
        )
      }
    >
      {text}
    </NavLink>
  );
}
