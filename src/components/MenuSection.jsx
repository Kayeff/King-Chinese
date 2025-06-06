import { motion } from "motion/react";
import MenuItem from "./MenuItem";

export default function MenuSection({ selectedItem }) {
  return (
    <>
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          key={selectedItem.id}
          className="w-full flex items-center justify-center flex-col"
        >
          <div className="w-full flex items-center justify-center flex-col gap-2">
            <div className="w-full grid laptop:grid-cols-4 laptop-l:grid-cols-6 tablet:grid-cols-3 mobile-l:grid-cols-2 grid-cols-1 gap-2">
              {selectedItem.itemList.base.map(({ itemName, itemPrice }) => (
                <MenuItem
                  key={itemName}
                  img={selectedItem.image}
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
            <div className="w-full grid grid-cols-1 mobile-l:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 laptop-l:grid-cols-6 gap-2">
              {selectedItem.itemList.special?.map(({ itemName, itemPrice }) => (
                <MenuItem
                  key={itemName}
                  img={selectedItem.image}
                  itemName={itemName}
                  itemPrice={itemPrice}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
      {!selectedItem && (
        <p className="w-full flex items-center justify-center tracking-tight text-chilli-red p-5">
          Please select an item.
        </p>
      )}
    </>
  );
}
