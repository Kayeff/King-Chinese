import { twMerge } from "tailwind-merge";

export default function SectionPara({ children, className }) {
  return (
    <p
      className={twMerge(
        "hero-text text-xl tracking-tight text-center laptop:text-3xl",
        className
      )}
    >
      {children}
    </p>
  );
}
