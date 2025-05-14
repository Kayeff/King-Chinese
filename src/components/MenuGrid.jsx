import currencyFormatter from "../formatter";

export default function MenuGrid({ itemName, itemPrice, img }) {
  return (
    <div className="w-full border border-prussian-blue/20 p-2 grid grid-cols-1 gap-4 bg-black text-chilli-red">
      <img
        src={img}
        alt={itemName}
        loading="lazy"
        className="object-cover w-full h-52 p-4"
      />
      <h1 className="w-full text-base text-center font-medium font-gang-of-three">
        Veg. {itemName}
      </h1>
      <div className="flex items-center justify-center flex-col laptop:flex-row gap-3 font-switzer">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-center">Half</h1>
          <h1 className="p-0.5 font-medium text-center">
            {itemPrice.halfPrice === null
              ? "-"
              : currencyFormatter(itemPrice.halfPrice)}
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-center">Full</h1>
          <h1 className="p-0.5 font-medium text-center">
            {currencyFormatter(itemPrice.fullPrice)}
          </h1>
        </div>
      </div>
    </div>
  );
}
