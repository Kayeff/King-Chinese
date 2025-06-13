import { motion } from "motion/react";

export default function Fallback() {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <motion.span className="size-[48px] rounded-full inline-block border-t-[3px] border-t-chilli-red border-r-[3px] box-border border-r-transparent" />
    </div>
  );
}
