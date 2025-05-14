import lantern from "../assets/lantern.webp";

export default function Details() {
  return (
    <div className="w-full h-[30vh] grid grid-cols-1 laptop:grid-cols-2 gap-2">
      <div className="pattern rounded-lg flex items-center justify-center border border-chilli-red font-switzer text-black">
        <div className="p-5 rounded-lg flex items-center justify-center flex-col gap-4">
          <h1 className="text-3xl tracking-tighter text-center font-semibold">
            Discover the beauty of Chinese tradition in every taste.
          </h1>
          <h1 className="text-2xl tracking-tighter font-medium laptop:hidden">
            <span>Timings: </span>
            <span>12 PM to 10 PM</span>
          </h1>
        </div>
      </div>
      <div className="pattern rounded-lg laptop:flex items-center justify-center border border-chilli-red hidden h-[30vh] overflow-hidden text-black">
        <div className="p-5 rounded-lg flex items-center justify-center">
          <h1 className="text-3xl tracking-tight font-semibold">王中国</h1>
        </div>
      </div>
    </div>
  );
}
