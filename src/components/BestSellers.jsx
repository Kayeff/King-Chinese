import Section from "./Section";
import noodles from "../assets/noodles.webp";
import manchurian from "../assets/manchurian-2.webp";
import paneerChilli from "../assets/paneer-chilli-2.webp";
import friedRice from "../assets/fried-rice-1.webp";

const sigDishes = [
  { id: "dish1", itemName: "Manchurian Dry" },
  { id: "dish2", itemName: "Paneer Chilli" },
  { id: "dish3", itemName: "Manchurian Noodles" },
  { id: "dish4", itemName: "Hong Kong Rice" },
];

export default function BestSellers() {
  return (
    <Section
      to="menu"
      images={
        <div className="laptop:h-[60vh] w-full flex items-center justify-center border border-chocolate-cosmos rounded-lg">
          <div className="w-full h-full grid grid-cols-1 gap-1 tablet:grid-cols-2 rounded-lg overflow-hidden">
            <img
              className="w-full object-cover h-full rounded-lg"
              src={noodles}
              alt="noodles"
              loading="lazy"
            />
            <img
              className="w-full object-cover h-full rounded-lg"
              src={manchurian}
              alt="manchurian"
              loading="lazy"
            />
            <img
              className="w-full object-cover h-full rounded-lg"
              src={paneerChilli}
              alt="paneer-chilli"
              loading="lazy"
            />
            <img
              className="w-full object-cover h-full rounded-lg"
              src={friedRice}
              alt="fried-rice"
              loading="lazy"
            />
          </div>
        </div>
      }
      twist={false}
      heading="our signature dishes"
      description={
        <ul className="flex items-center justify-center flex-col">
          {sigDishes.map((item) => (
            <li className="flex items-center justify-start gap-2" key={item.id}>
              <span>{item.itemName}</span>
            </li>
          ))}
        </ul>
      }
      buttonText="Explore Menu"
    />
  );
}
