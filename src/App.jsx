import { lazy, useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuDialog from "./components/MenuDialog";
import Hero from "./components/Hero";
import { useHeight } from "./hooks/useHeight";

const Details = lazy(() => import("./components/Details"));
const About = lazy(() => import("./components/About"));
const Offers = lazy(() => import("./components/Offers"));

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  useHeight();

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <main className="w-full min-h-[100svh] bg-black relative p-2 space-y-2">
      <MenuDialog isVisible={isVisible} hideMenu={() => setIsVisible(false)} />
      <Header />
      <Hero showMenu={() => setIsVisible(true)} />
      <Details showMenu={() => setIsVisible(true)} />
      <About />
      <Footer />
    </main>
  );
}
