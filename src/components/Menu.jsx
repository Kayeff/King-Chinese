import { useState } from "react";
import MenuSection from "./MenuSection";
import SectionHeading from "./SectionHeading";
import ItemsBar from "./ItemsBar";
import Controls from "./Controls";
import { menuItems } from "../menu-items";

export default function Menu() {
  const [activeItem, setActiveItem] = useState("");
  const selectedItem = menuItems.find((item) => item.id === activeItem);

  function handleSelectItem(itemID) {
    setActiveItem(itemID);
  }

  return (
    <div className="w-full flex items-center justify-start flex-col gap-10 bg-black relative p-10">
      <div className="w-full flex items-center justify-start laptop:justify-center laptop:p-4 text-chilli-red">
        <SectionHeading title="Our Menu" />
      </div>
      <div className="w-[90%] flex items-center justify-center flex-col gap-4">
        <Controls
          buttonText="Clear Section"
          resetItem={() => setActiveItem("")}
        />
        <ItemsBar
          activeItem={activeItem}
          menuItems={menuItems}
          onClick={handleSelectItem}
        />
        <MenuSection selectedItem={selectedItem} />
      </div>
    </div>
  );
}
