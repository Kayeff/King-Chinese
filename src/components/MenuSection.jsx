import MenuList from "./MenuList";

export default function MenuSection({ selectedItem, menuDisplay }) {
  return (
    <div className="w-full text-prussian-blue flex items-center justify-center flex-col space-y-4">
      <div className="w-full flex items-start justify-start flex-col border border-prussian-blue/20">
        <div className="w-full p-4 grid grid-cols-6 border-b border-prussian-blue/20">
          <h1 className="text-2xl font-semibold col-span-5">
            {selectedItem.name}
          </h1>
          <div className="grid grid-cols-2">
            <h1 className="text-2xl font-semibold text-center">Half</h1>
            <h1 className="text-2xl font-semibold text-center">Full</h1>
          </div>
        </div>
        <div className="w-full">
          {selectedItem.itemList.base.map(({ itemName, itemPrice }) => {
            return (
              <MenuList
                key={itemName}
                itemName={itemName}
                itemPrice={itemPrice}
              />
            );
          })}
        </div>
        {selectedItem.itemList.special !== undefined && (
          <div className="w-full p-4 flex items-center justify-center bg-imperial-red">
            <h1 className="text-2xl text-mint-cream uppercase">
              {selectedItem.name} special
            </h1>
          </div>
        )}
        {selectedItem.itemList.special?.map(({ itemName, itemPrice }) => {
          return (
            <MenuList
              key={itemName}
              itemName={itemName}
              itemPrice={itemPrice}
            />
          );
        })}
      </div>
    </div>
  );
}
