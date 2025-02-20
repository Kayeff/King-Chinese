export default function Hero({ showMenu }) {
  return (
    <>
      <div className="border border-chilli-red text-chilli-red flex items-center justify-between flex-col p-8 px-14 space-y-4 h-[60vh]">
        <h1 className="hero-text text-3xl uppercase font-medium font-gang-of-three">
          What we offer
        </h1>
        <h1 className="hero-text font-switzer text-4xl tracking-tight text-center">
          Our menu has classic dishes like{" "}
          <span className="font-gang-of-three text-carrot-orange">
            Fried Rice
          </span>
          ,{" "}
          <span className="font-gang-of-three text-carrot-orange">Noodles</span>{" "}
          and{" "}
          <span className="font-gang-of-three text-carrot-orange">
            Manchurian Dry
          </span>
          , all made with fresh ingredients, traditional recipes at budget
          friendly price.
        </h1>
        <button
          onClick={showMenu}
          className="px-4 py-3 border border-chilli-red bg-chilli-red font-switzer text-black cursor-pointer hover:bg-black hover:text-chilli-red duration-300"
        >
          See our Menu
        </button>
      </div>
      <div className="hero-image border border-chilli-red"></div>
    </>
  );
}
