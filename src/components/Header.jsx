import ButtonLink from "./ButtonLink";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-start flex-col border-b border-chilli-red/20 cursor-default space-y-2 font-switzer">
      <div className="w-max overflow-hidden h-max">
        <h1 className="uppercase font-gang-of-three text-[15vw] leading-[15vw] antialiased text-chilli-red">
          King Chinese
        </h1>
      </div>
      <ButtonLink
        onClick={() => {}}
        font={"switzer"}
        text="located in Khergam, Gujarat"
        href="https://maps.app.goo.gl/E8i5s51EjEvyVuUY9"
        target="_blank"
      />
    </div>
  );
}
