import GridSection from "./GridSection";
import ListSection from "./ListSection";

export default function MenuSection({ selectedItem, menuDisplay }) {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      {menuDisplay === "list" && <ListSection selectedItem={selectedItem} />}
      {menuDisplay === "grid" && <GridSection selectedItem={selectedItem} />}
    </div>
  );
}
