import bullet from "../assets/bullet.svg";
import ButtonLink from "./ButtonLink";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import SectionPara from "./SectionPara";

const sigDishes = [
  { id: "dish1", itemName: "Manchurian Dry" },
  { id: "dish2", itemName: "Paneer Chilli" },
  { id: "dish3", itemName: "Manchurian Noodles" },
  { id: "dish4", itemName: "Hong Kong Rice" },
];

export default function Details({ showMenu }) {
  function handleClick(event) {
    event.preventDefault();

    showMenu();
  }
  return (
    <Section>
      <div className="h-[50vh] laptop:h-[60vh] w-full border border-chilli-red text-chilli-red flex items-center justify-between flex-col p-8 font-switzer">
        <SectionHeading title="our signature dishes" />
        <div className="flex flex-col">
          {sigDishes.map((item) => (
            <SectionPara
              className="flex items-center justify-start space-x-2"
              key={item.id}
            >
              <span>
                <img className="h-7" src={bullet} alt="" />
              </span>
              <span>{item.itemName}</span>
            </SectionPara>
          ))}
        </div>
        <div>
          <ButtonLink onClick={handleClick} text="Explore Menu" />
        </div>
      </div>
      <div className="h-[50vh] laptop:h-[60vh] w-full flex items-center justify-center border border-chilli-red">
        <div className="w-full h-full grid grid-cols-1 gap-1 tablet:grid-cols-2">
          <div className="w-full h-full manchurian"></div>
          <div className="w-full h-full paneer-chilli"></div>
          <div className="w-full h-full noodles"></div>
          <div className="w-full h-full fried-rice"></div>
        </div>
      </div>
    </Section>
  );
}
