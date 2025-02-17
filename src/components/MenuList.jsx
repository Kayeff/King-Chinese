import currencyFormatter from "../formatter";
import manchurian from "../assets/manchurian.webp";

export default function MenuList({ itemName, itemPrice }) {
  return (
    <div className="w-full p-4 grid grid-cols-6 hover:bg-cool-gray/20">
      <div className="col-span-5 grid grid-cols-2">
        <div className="flex items-center justify-start">
          <h1 className="text-xl font-medium">Veg. {itemName}</h1>
        </div>
        <img className="h-12" src={manchurian} alt={itemName} loading="lazy" />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-medium text-center">
            {itemPrice.halfPrice === null
              ? ""
              : currencyFormatter(itemPrice.halfPrice)}
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-medium text-center">
            {currencyFormatter(itemPrice.fullPrice)}
          </h1>
        </div>
      </div>
    </div>
  );
}
