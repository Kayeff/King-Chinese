import { motion } from "framer-motion";
import { useState } from "react";
import { menuItems } from "../menu-items";
import MenuSection from "./MenuSection";
import Controls from "./Controls";
import { twMerge } from "tailwind-merge";
import { RiCloseLargeFill } from "@remixicon/react";

export default function Menu({ hideMenu }) {
  const [activeItem, setActiveItem] = useState("");
  const [menuDisplay, setMenuDisplay] = useState("grid");

  const selectedItem = menuItems.find((item) => item.id === activeItem);

  return (
    <div className="w-full flex items-center justify-center flex-col space-y-10 bg-black relative p-4">
      <button
        onClick={hideMenu}
        className="absolute top-4 right-4 bg-chilli-red border border-transparent hover:border-chilli-red duration-300 p-2 laptop:p-4 flex items-center justify-center cursor-pointer hover:bg-black hover:text-chilli-red"
      >
        <RiCloseLargeFill />
      </button>
      <div className="w-full flex items-center justify-start laptop:justify-center laptop:p-4">
        <h1 className="hero-text text-3xl uppercase font-medium font-gang-of-three text-chilli-red">
          Our Menu
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <div className="w-full flex items-center justify-end p-4">
          <Controls
            menuDisplay={menuDisplay}
            displayGrid={() => setMenuDisplay("grid")}
            // displayList={() => setMenuDisplay("list")}
            resetActiveItem={() => setActiveItem("")}
          />
        </div>
        <div className="w-full grid grid-cols-1 mobile-l:grid-cols-2 laptop:grid-cols-6 gap-2 p-4">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={twMerge(
                "border border-chilli-red text-mint-cream p-2 flex items-center justify-center duration-300 cursor-pointer",
                activeItem === item.id
                  ? "bg-chocolate-cosmos scale-110"
                  : "hover:bg-chocolate-cosmos"
              )}
            >
              <h1 className="text-lg font-medium uppercase text-chilli-red font-gang-of-three">
                {item.name}
              </h1>
            </motion.button>
          ))}
        </div>
        {selectedItem !== undefined ? (
          <MenuSection menuDisplay={menuDisplay} selectedItem={selectedItem} />
        ) : (
          <h1 className="text-pretty text-chilli-red font-switzer text-center">
            Please select a item
          </h1>
        )}
      </div>
    </div>
  );
}
