import { twMerge } from "tailwind-merge";

export default function ItemsBar({ onClick, menuItems, activeItem }) {
  return (
    <div className="w-full grid grid-cols-1 mobile-l:grid-cols-2 laptop:grid-cols-6 gap-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onClick(item.id)}
          className={twMerge(
            "border border-chilli-red text-mint-cream p-2 flex items-center justify-center duration-300 cursor-pointer",
            activeItem === item.id
              ? "bg-chocolate-cosmos"
              : "hover:bg-chocolate-cosmos"
          )}
        >
          <h1 className="text-lg font-medium tracking-tighter text-chilli-red font-switzer">
            {item.name}
          </h1>
        </button>
      ))}
    </div>
  );
}
