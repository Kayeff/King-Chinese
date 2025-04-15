import { twMerge } from "tailwind-merge";
import { RiArrowRightLongLine } from "@remixicon/react";

export default function ButtonLink({ text, font, ...props }) {
  return (
    <a
      {...props}
      className={twMerge(
        "w-full text-center px-4 py-3 border border-chilli-red bg-chilli-red text-black hover:bg-black hover:text-chilli-red duration-300 text-sm uppercase font-medium max-mobile-l:tracking-tight laptop:tracking-normal laptop:text-lg laptop-l:text-xl laptop:px-4 laptop:py-3 cursor-pointer flex items-center justify-center gap-1",
        font === "switzer" ? "font-switzer font-semibold" : "font-gang-of-three"
      )}
    >
      {text}{" "}
      {font === "switzer" && (
        <span>
          <RiArrowRightLongLine size={25} />
        </span>
      )}
    </a>
  );
}
