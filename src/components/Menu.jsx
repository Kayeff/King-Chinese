import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { menuItems } from "../menu-items";
import MenuSection from "./MenuSection";
import { RiListUnordered, RiLayoutGridFill } from "@remixicon/react";

export default function Menu() {
  const [activeItem, setActiveItem] = useState("");
  const [menuDisplay, setMenuDisplay] = useState("list");

  const selectedItem = menuItems.find((item) => item.id === activeItem);

  return (
    <div className="w-full flex items-center justify-center flex-col space-y-10">
      <h1 className="text-5xl font-semibold uppercase">
        Our <span className="text-imperial-red">Menu</span>
      </h1>
      <div className="w-full p-2 flex items-center justify-center flex-col space-y-4">
        <div className="w-full flex items-center justify-end">
          <div className="flex items-center justify-center border border-cool-gray/50 space-x-1">
            <button
              className={twMerge(
                "p-1 cursor-pointer",
                menuDisplay === "list"
                  ? "bg-cool-gray/50 text-prussian-blue"
                  : "text-cool-gray"
              )}
              onClick={() => setMenuDisplay("list")}
            >
              <RiListUnordered />
            </button>
            <button
              className={twMerge(
                "p-1 cursor-pointer",
                menuDisplay === "grid"
                  ? "bg-cool-gray/50 text-prussian-blue"
                  : "text-cool-gray"
              )}
              onClick={() => setMenuDisplay("grid")}
            >
              <RiLayoutGridFill />
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-6 gap-3">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={twMerge(
                "bg-prussian-blue text-mint-cream p-6 flex items-center justify-center duration-300 cursor-pointer",
                activeItem === item.id ? "bg-imperial-red scale-110" : ""
              )}
            >
              <h1 className="text-xl font-medium uppercase">{item.name}</h1>
            </motion.button>
          ))}
        </div>
        {selectedItem !== undefined ? (
          <MenuSection menuDisplay={menuDisplay} selectedItem={selectedItem} />
        ) : (
          <h1 className="text-pretty text-prussian-blue text-center">
            Please select a item
          </h1>
        )}
      </div>
    </div>
  );
}
