import bullet from "../assets/bullet.svg";

const sigDishes = [
  { id: "dish1", itemName: "Hong Kong Rice" },
  { id: "dish2", itemName: "Manchurian Dry" },
  { id: "dish3", itemName: "Hakka Noodles" },
  { id: "dish4", itemName: "Paneer Chilli" },
];

export default function Details() {
  return (
    <>
      <div className="h-[60vh] w-full flex items-center justify-center">
        <div className="w-full h-full gap-2 grid grid-cols-3">
          <div className="w-full h-full fried-rice border border-chilli-red"></div>
          <div className="w-full h-full manchurian col-span-2 border border-chilli-red"></div>
          <div className="w-full h-full noodles col-span-2 border border-chilli-red"></div>
          <div className="w-full h-full paneer-chilli border border-chilli-red"></div>
        </div>
      </div>
      <div className="w-full border border-chilli-red text-chilli-red flex items-center justify-between flex-col p-8">
        <div className="w-full flex items-center justify-center flex-col space-y-4">
          <h1 className="hero-text text-3xl uppercase font-medium font-gang-of-three">
            our signature dishes
          </h1>
          <div className="flex flex-col">
            {sigDishes.map((item) => (
              <li
                className="hero-text font-switzer text-4xl tracking-tight flex items-center justify-start space-x-2"
                key={item.id}
              >
                <span>
                  <img className="h-7" src={bullet} alt="" />
                </span>
                <span>{item.itemName}</span>
              </li>
            ))}
          </div>
        </div>
        <button className="px-4 py-3 border border-chilli-red bg-chilli-red font-switzer text-black cursor-pointer hover:bg-black hover:text-chilli-red duration-300">
          See our Menu
        </button>
      </div>
    </>
  );
}
