import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Heading({ sentence = "King Chinese", className }) {
  const headingRef = useRef(null);
  const inView = useInView(headingRef);

  const text = sentence.split(" ").map((word, wordIndex) => (
    <span key={word}>
      {word.split("").map((letter, index) => (
        <motion.span
          initial={{ y: 200 }}
          animate={{ y: inView && 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 0.02 * index,
          }}
          className="inline-block"
          key={index}
        >
          {letter}
        </motion.span>
      ))}
      {wordIndex !== sentence.split(" ").length - 1 && " "}
    </span>
  ));

  return (
    <div ref={headingRef} className="overflow-hidden">
      <h1
        className={twMerge(
          "uppercase font-gang-of-three text-[15vw] leading-[15vw] antialiased",
          className
        )}
      >
        {text}
      </h1>
    </div>
  );
}
