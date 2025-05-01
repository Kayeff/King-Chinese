import { lazy, Suspense, memo, useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuDialog from "./components/MenuDialog";
import Hero from "./components/Hero";

const Details = lazy(() => import("./components/Details"));
const About = lazy(() => import("./components/About"));
const Offers = lazy(() => import("./components/Offers"));

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  function showMenu() {
    setIsVisible(true);
  }
  function hideMenu() {
    setIsVisible(false);
  }

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
    <main className="w-full min-h-[100dvh] bg-black relative p-2 space-y-2">
      {isVisible && <MenuDialog hideMenu={hideMenu} />}
      <Header />
      <Hero showMenu={showMenu} />
      <Details showMenu={showMenu} />
      <About />
      <Footer />
    </main>
  );
}
