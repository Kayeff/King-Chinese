import { memo } from "react";
import crown from "../assets/crown.svg";

const navlinks_data = [
  { id: "nav1", title: "About", href: "#about" },
  { id: "nav2", title: "Menu", href: "#menu" },
  { id: "nav3", title: "Offers", href: "#offers" },
  { id: "nav4", title: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center sticky top-0 left-0 z-20 bg-mint-cream border-b border-prussian-blue/20 backdrop-blur-lg">
      <div className="w-[80%] p-4 flex items-center justify-between rounded-xl">
        <a
          href="#"
          className="font-medium text-2xl tracking-tight text-prussian-blue "
          aria-label="King Chinese Home"
        >
          <span className="z-20">King Chinese</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center justify-center space-x-6">
          {navlinks_data.map((data) => (
            <li key={data.id}>
              <a
                href={data.href}
                className="hover:text-imperial-red transition-colors duration-300 font-medium"
                aria-label={`Go to ${data.title}`}
              >
                {data.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navbar);
