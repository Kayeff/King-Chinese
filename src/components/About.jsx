export default function About() {
  return (
    <>
      <div className="border border-chilli-red text-chilli-red flex items-center justify-between flex-col p-8 px-14 space-y-4 h-[60vh]">
        <h1 className="hero-text text-3xl uppercase font-medium font-gang-of-three">
          About us
        </h1>
        <h1 className="hero-text font-switzer text-4xl tracking-tight text-center">
          Founded by{" "}
          <span className="font-gang-of-three text-carrot-orange">
            Saiyed Intekhab Alam
          </span>{" "}
          in the year{" "}
          <span className="font-gang-of-three text-carrot-orange">2016</span>{" "}
          and till date giving the locals the taste of good chinese. The aim of
          the restaurant is to provide meals at price affordable to villagers of
          Khergam.
        </h1>
        <div className="w-full flex items-center justify-center space-x-4">
          <a
            href="#"
            className="px-7 font-medium py-3 border border-chilli-red bg-chilli-red font-switzer text-black cursor-pointer hover:bg-black hover:text-chilli-red duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="px-7 font-medium py-3 border border-chilli-red bg-chilli-red font-switzer text-black cursor-pointer hover:bg-black hover:text-chilli-red duration-300"
          >
            Location
          </a>
        </div>
      </div>
      <div className="w-full border border-chilli-red about-lantern"></div>
    </>
  );
}
