import { twMerge } from "tailwind-merge";

export default function Section({ children, className }) {
  return (
    <section
      className={twMerge(
        "w-full flex items-start justify-center py-10 border-b border-prussian-blue/20 text-prussian-blue",
        className
      )}
    >
      <div className="w-[80%]">{children}</div>
    </section>
  );
}
