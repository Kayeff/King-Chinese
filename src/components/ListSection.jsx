import MenuList from "./MenuList";

export default function ListSection({ selectedItem }) {
  return (
    <div className="w-full flex items-start justify-start flex-col border border-chilli-red">
      <div className="w-full p-4 text-chilli-red flex items-center justify-between border-b border-chilli-red font-gang-of-three">
        <h1 className="text-2xl font-semibold">{selectedItem.name}</h1>
        <div className="flex items-center justify-center space-x-10">
          <h1 className="text-2xl font-semibold text-center hero-text">Half</h1>
          <h1 className="text-2xl font-semibold text-center hero-text">Full</h1>
        </div>
      </div>
      <div className="w-full">
        {selectedItem.itemList.base.map(({ itemName, itemPrice }) => {
          return (
            <MenuList
              img={selectedItem.image}
              key={itemName}
              itemName={itemName}
              itemPrice={itemPrice}
            />
          );
        })}
      </div>
      {selectedItem.itemList.special !== undefined && (
        <h1 className="w-full text-center p-4 text-3xl text-chilli-red font-gang-of-three bg-chocolate-cosmos uppercase">
          {selectedItem.name} Specials
        </h1>
      )}
      {selectedItem.itemList.special?.map(({ itemName, itemPrice }) => {
        return (
          <MenuList
            key={itemName}
            img={selectedItem.image}
            itemName={itemName}
            itemPrice={itemPrice}
          />
        );
      })}
    </div>
  );
}
