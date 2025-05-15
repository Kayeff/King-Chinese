import { useState } from "react";
import Heading from "./Heading";
import Navmenu from "./Navmenu";
import { AnimatePresence } from "motion/react";
import Overlay from "./Overlay";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMenu() {
    setIsVisible((prev) => !prev);
  }

  function closeMenu() {
    setIsVisible(false);
  }

  return (
    <header className="w-full flex items-center justify-start flex-col border-b border-chilli-red/20 cursor-default px-2 relative">
      <div onClick={toggleMenu} className="cursor-pointer">
        <Heading className="text-chilli-red" />
      </div>
      <AnimatePresence mode="wait">
        {isVisible && (
          <>
            <Navmenu isVisible={isVisible} closeMenu={closeMenu} />
            <Overlay closeMenu={closeMenu} />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
