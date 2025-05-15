export default function Controls({ resetItem, buttonText }) {
  return (
    <div className="w-full flex items-center justify-end">
      <button
        className="p-2 rounded-lg cursor-pointer border border-chocolate-cosmos text-chilli-red hover:bg-chocolate-cosmos"
        onClick={resetItem}
      >
        {buttonText}
      </button>
    </div>
  );
}
