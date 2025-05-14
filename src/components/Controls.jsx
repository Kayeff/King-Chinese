export default function Controls({ resetItem, buttonText }) {
  return (
    <div className="w-full flex items-center justify-end">
      <button
        className="px-2 py-1 cursor-pointer border border-chilli-red text-chilli-red hover:bg-chocolate-cosmos"
        onClick={resetItem}
      >
        {buttonText}
      </button>
    </div>
  );
}
