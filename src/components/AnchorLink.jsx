export default function AnchorLink({ text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-full text-center px-4 py-3 border border-chilli-red bg-chilli-red text-black hover:bg-black hover:text-chilli-red duration-300 text-sm uppercase laptop:text-lg laptop-l:text-xl laptop:px-4 laptop:py-4 cursor-pointer flex items-center justify-center gap-1 rounded-lg font-gang-of-three"
    >
      {text}
    </a>
  );
}
