import Section from "./Section";

const sigDishes = [
  { id: "dish1", itemName: "Manchurian Dry" },
  { id: "dish2", itemName: "Paneer Chilli" },
  { id: "dish3", itemName: "Manchurian Noodles" },
  { id: "dish4", itemName: "Hong Kong Rice" },
];

export default function BestSellers({ showMenu }) {
  return (
    <Section
      images={
        <div className="h-[50vh] laptop:h-[60vh] w-full flex items-center justify-center border border-chilli-red rounded-lg">
          <div className="w-full h-full grid grid-cols-1 gap-1 tablet:grid-cols-2 rounded-lg overflow-hidden">
            <div className="w-full h-full manchurian" />
            <div className="w-full h-full paneer-chilli" />
            <div className="w-full h-full noodles" />
            <div className="w-full h-full fried-rice" />
          </div>
        </div>
      }
      twist={false}
      heading="our signature dishes"
      description={
        <ul className="flex items-center justify-center flex-col">
          {sigDishes.map((item, index) => (
            <li className="flex items-center justify-start gap-2" key={item.id}>
              <span>{item.itemName}</span>
            </li>
          ))}
        </ul>
      }
      buttonText="Explore Menu"
      onClick={showMenu}
    />
  );
}
