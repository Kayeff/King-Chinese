import { motion } from "motion/react";
import Menu from "./Menu";

export default function MenuDialog({ isVisible, hideMenu }) {
  return (
    <>
      {isVisible && (
        <div className="min-h-screen w-full fixed top-0 left-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.6)]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full laptop:w-[80%] max-h-[80vh] overflow-y-auto bg-black border border-chilli-red"
          >
            <Menu hideMenu={hideMenu} />
          </motion.div>
        </div>
      )}
    </>
  );
}
