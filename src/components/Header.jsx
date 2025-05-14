import Heading from "./Heading";
import { RiArrowRightLongLine } from "@remixicon/react";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-start flex-col border-b border-chilli-red/20 cursor-default font-switzer px-2">
      <Heading className="text-chilli-red" />
      <a
        href="https://maps.app.goo.gl/E8i5s51EjEvyVuUY9"
        target="_blank"
        className="w-full text-center px-4 py-3 border border-chilli-red bg-chilli-red text-black hover:bg-black hover:text-chilli-red duration-300 text-sm uppercase font-medium tracking-tighter laptop:text-lg laptop-l:text-xl laptop:px-4 laptop:py-4 cursor-pointer flex items-center justify-center gap-1 rounded-lg"
      >
        <span>located in khergam, gujarat</span>
        <span>
          <RiArrowRightLongLine size={25} />
        </span>
      </a>
    </div>
  );
}
