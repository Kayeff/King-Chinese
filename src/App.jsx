import { lazy, useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuDialog from "./components/MenuDialog";
import Hero from "./components/Hero";

const Details = lazy(() => import("./components/Details"));
const About = lazy(() => import("./components/About"));
const Location = lazy(() => import("./components/Location"));

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

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
    <main className="w-full min-h-[100svh] bg-black relative gap-2 font-switzer">
      <MenuDialog isVisible={isVisible} hideMenu={() => setIsVisible(false)} />
      <Header />
      <section className="w-full flex flex-col gap-2 p-2">
        <Hero showMenu={() => setIsVisible(true)} />
        <Details showMenu={() => setIsVisible(true)} />
        <About />
        <Location />
      </section>
      <Footer />
    </main>
  );
}
