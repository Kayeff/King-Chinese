import { motion } from "motion/react";
import { RiCloseLargeLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

const links = [
  { text: "Home", chinese: "家", path: "" },
  { text: "Menu", chinese: "家", path: "menu" },
  { text: "Contact", chinese: "菜单", path: "contact" },
];

export default function Navmenu({ isVisible, closeMenu }) {
  const navigate = useNavigate();

  function navigateTo(path) {
    closeMenu();
    setTimeout(() => {
      navigate(path);
    }, 400);
  }

  return (
    <motion.nav
      initial={{ top: "-70vh" }}
      animate={{ top: 0 }}
      exit={{ top: "-70vh" }}
      className="fixed left-1/2 -translate-x-1/2 w-full laptop:w-[95%] h-[40%] laptop:h-[70%] bg-chilli-red rounded-b-xl z-50"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="px-10 tracking-tighter">Navigation</h1>
        <button
          onClick={closeMenu}
          className="bg-black cursor-pointer flex items-center justify-center p-5"
        >
          <RiCloseLargeLine size={40} className="text-chilli-red" />
        </button>
      </div>
      <ul className="w-full flex flex-col p-3 laptop:p-10 font-inter">
        {links.map((link, index) => (
          <li
            key={link.text}
            className="border-b border-black/20 flex items-center justify-between  overflow-y-hidden"
          >
            <button
              onClick={() => navigateTo(link.path)}
              className="text-[15vw] leading-[15vw] laptop:text-9xl laptop:leading-[8rem] tracking-tighter cursor-pointer px-2"
            >
              <motion.p
                initial={{ y: 100 }}
                animate={{ y: isVisible ? 0 : 100 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 0.1 * index,
                }}
              >
                {link.text}
              </motion.p>
            </button>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.07 * index,
              }}
              className="text-2xl"
            >
              {link.chinese}
            </motion.p>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
