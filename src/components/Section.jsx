import { twMerge } from "tailwind-merge";

export default function Section({ children, className }) {
  return (
    <section
      className={twMerge(
        "w-full flex items-center justify-center text-prussian-blue",
        className
      )}
    >
      <div className="w-full grid grid-cols-2 gap-2">{children}</div>
    </section>
  );
}
