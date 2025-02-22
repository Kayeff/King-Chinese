export default function Offers({ showMenu }) {
  return (
    <>
      <div className="w-full border border-chilli-red">
        <div className="w-full h-full hero-image"></div>
      </div>
      <div className="w-full border border-chilli-red text-chilli-red flex items-center justify-between flex-col p-8 h-[60vh]">
        <h1 className="hero-text text-3xl uppercase font-medium font-gang-of-three">
          our offers
        </h1>
        <h1 className="hero-text font-switzer text-4xl tracking-tight text-center"></h1>
        <button
          onClick={showMenu}
          className="px-4 py-3 border border-chilli-red bg-chilli-red font-switzer text-black cursor-pointer hover:bg-black hover:text-chilli-red duration-300"
        >
          See our Menu
        </button>
      </div>
    </>
  );
}
