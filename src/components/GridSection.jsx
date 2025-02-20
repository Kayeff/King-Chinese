import MenuGrid from "./MenuGrid";

export default function GridSection({ selectedItem }) {
  return (
    <div className="w-full flex items-center justify-center flex-col p-2 gap-2">
      <div className="w-full grid grid-cols-5 gap-2">
        {selectedItem.itemList.base.map(({ itemName, itemPrice }) => (
          <MenuGrid
            img={selectedItem.image}
            key={itemName}
            itemName={itemName}
            itemPrice={itemPrice}
          />
        ))}
      </div>
      {selectedItem.itemList.special !== undefined && (
        <h1 className="w-full text-center p-4 text-3xl text-chilli-red font-gang-of-three bg-chocolate-cosmos uppercase">
          {selectedItem.name} Specials
        </h1>
      )}
      <div className="w-full grid grid-cols-5 gap-2">
        {selectedItem.itemList.special?.map(({ itemName, itemPrice }) => (
          <MenuGrid
            img={selectedItem.image}
            key={itemName}
            itemName={itemName}
            itemPrice={itemPrice}
          />
        ))}
      </div>
    </div>
  );
}
