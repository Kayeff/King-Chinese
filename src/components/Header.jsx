import { RiMapPin2Fill } from "@remixicon/react";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-start flex-col border-b border-chilli-red/20 cursor-default space-y-2">
      <h1 className="uppercase font-gang-of-three text-[15vw] leading-[15vw] antialiased text-chilli-red">
        King Chinese
      </h1>
      <a
        href="https://maps.app.goo.gl/E8i5s51EjEvyVuUY9"
        target="_blank"
        className="w-full p-4 flex items-center justify-center space-x-2 border border-chilli-red bg-chilli-red text-black hover:bg-black hover:text-chilli-red duration-300"
      >
        <RiMapPin2Fill />
        <h1 className="text-xl uppercase font-medium font-switzer">
          located in Khergam, Gujarat
        </h1>
      </a>
    </div>
  );
}
