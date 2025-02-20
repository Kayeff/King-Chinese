import currencyFormatter from "../formatter";

export default function MenuList({ itemName, itemPrice, img }) {
  return (
    <div className="w-full p-4 flex items-center justify-between text-chilli-red font-switzer">
      <div className="flex items-center justify-start space-x-4">
        <div className="flex items-center justify-start">
          <h1 className="text-xl font-medium">Veg. {itemName}</h1>
        </div>
        <img className="h-12" src={img} alt={itemName} loading="lazy" />
      </div>
      <div className="flex items-center justify-center space-x-8">
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
