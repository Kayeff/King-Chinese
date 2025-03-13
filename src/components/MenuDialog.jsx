import Menu from "./Menu";

export default function MenuDialog({ hideMenu }) {
  return (
    <div className="min-h-screen w-full fixed top-0 left-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.6)]">
      <div className="w-full laptop:w-[80%] max-h-[80vh] overflow-y-auto bg-black border border-chilli-red">
        <Menu hideMenu={hideMenu} />
      </div>
    </div>
  );
}
