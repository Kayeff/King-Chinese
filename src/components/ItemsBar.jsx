import { twMerge } from "tailwind-merge";

export default function ItemsBar({ onClick, menuItems, activeItem }) {
  return (
    <div className="w-full grid grid-cols-1 mobile-l:grid-cols-2 laptop:grid-cols-6 gap-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onClick(item.id)}
          className={twMerge(
            "border border-chocolate-cosmos p-4 flex items-center justify-center duration-300 cursor-pointer text-xl font-medium tracking-tighter text-chilli-red rounded-lg",
            activeItem === item.id
              ? "bg-chilli-red text-black"
              : "hover:bg-chocolate-cosmos"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
