export default function Overlay({ closeMenu }) {
  return (
    <div
      onClick={closeMenu}
      className="absolute inset-0 bg-[rgba(0,0,0,0.2)] w-full h-screen"
    />
  );
}
