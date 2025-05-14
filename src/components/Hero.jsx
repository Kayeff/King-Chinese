import Section from "./Section";
import hero from "../assets/background.webp";

export default function Hero({ showMenu }) {
  return (
    <Section
      twist
      heading="What we offer"
      buttonText="Our Menu"
      handleClick={showMenu}
      description={
        <>
          Our menu has classic chinese dishes like{" "}
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
        </>
      }
      images={
        <div className="w-full flex items-center justify-center h-[50vh] laptop:h-[60vh] border border-chilli-red rounded-lg">
          <img
            className="w-full object-cover h-full rounded-lg "
            src={hero}
            alt="hero-image"
          />
        </div>
      }
    />
  );
}
