import Menu from "./Menu";

export default function MenuDialog({ hideMenu }) {
  return (
    <div className="min-h-screen w-full absolute top-0 left-0 flex items-center justify-center p-10 z-50 bg-[rgba(0,0,0,0.6)]">
      <div className="w-[80%] max-h-[80vh] overflow-y-auto bg-black border border-chilli-red p-10">
        <Menu hideMenu={hideMenu} />
      </div>
    </div>
  );
}
