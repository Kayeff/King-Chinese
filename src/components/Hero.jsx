import manchurian from "../assets/manchurian.webp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="text-prussian-blue grid grid-cols-2">
      <div className="flex items-start justify-evenly flex-col p-4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-5xl font-semibold uppercase">
            the taste of <span className="text-imperial-red">Khergam</span>
          </h1>
          <p className="text-pretty font-medium">
            We make simple but delicious Chinese food. Our menu has classic
            dishes like <span className="text-imperial-red">Fried rice</span>,{" "}
            <span className="text-imperial-red">Noodles</span> and{" "}
            <span className="text-imperial-red">Manchurian</span>, all made with
            fresh ingredients, traditional recipes and budget friendly price. No
            fancy extras—just tasty food cooked with care. Come in, relax, and
            enjoy a great meal!
          </p>
        </div>
        <div className="w-full flex items-center justify-end space-x-2">
          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "#273043" }}
            href="#"
            className="px-4 py-3 font-medium bg-prussian-blue text-mint-cream cursor-pointer"
          >
            See our Menu
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "#f02d3a" }}
            href="#"
            className="px-4 py-3 font-medium bg-imperial-red text-mint-cream cursor-pointer hover:bg-rojo"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <img
          className="h-96 object-cover"
          loading="lazy"
          src={manchurian}
          alt=""
        />
      </div>
    </div>
  );
}
