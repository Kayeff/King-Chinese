import { RiListUnordered, RiLayoutGridFill } from "@remixicon/react";
import { twMerge } from "tailwind-merge";

export default function Controls({
  menuDisplay,
  displayList,
  displayGrid,
  resetActiveItem,
}) {
  return (
    <div className="w-full flex items-center justify-between space-x-1 font-switzer">
      <div className="border border-chilli-red flex items-center justify-center text-chilli-red">
        <button
          className={twMerge(
            "p-1 cursor-pointer hover:bg-chocolate-cosmos duration-300",
            menuDisplay === "list" ? "bg-chocolate-cosmos" : "text-chilli-red"
          )}
          onClick={displayList}
        >
          <RiListUnordered />
        </button>
        <button
          className={twMerge(
            "p-1 cursor-pointer hover:bg-chocolate-cosmos duration-300",
            menuDisplay === "grid" ? "bg-chocolate-cosmos" : "text-chilli-red"
          )}
          onClick={displayGrid}
        >
          <RiLayoutGridFill />
        </button>
      </div>
      <button
        className="px-2 py-1 cursor-pointer border border-chilli-red text-chilli-red hover:bg-chocolate-cosmos"
        onClick={resetActiveItem}
      >
        Clear Selection
      </button>
    </div>
  );
}
