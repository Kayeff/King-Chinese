export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-center px-4 py-3 border border-chilli-red bg-chilli-red text-black hover:bg-black hover:text-chilli-red duration-300 text-sm uppercase font-medium laptop:text-lg laptop-l:text-xl cursor-pointer rounded-lg font-gang-of-three"
    >
      {text}
    </button>
  );
}
