import Heading from "./Heading";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col text-black bg-chilli-red gap-2">
      <div className="w-full flex items-center justify-start flex-col cursor-default">
        <Heading />
      </div>
      <div className="w-full flex items-center justify-between p-5">
        <h1 className="tracking-tighter">&copy; King Chinese 2025</h1>
        <h1 className="tracking-tighter">
          Made by -{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/feed/"
            target="_blank"
          >
            Kaif Saiyed
          </a>
        </h1>
      </div>
    </footer>
  );
}
