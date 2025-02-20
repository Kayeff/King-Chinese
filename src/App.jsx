import Header from "./components/Header";
import MenuDialog from "./components/MenuDialog";
import Section from "./components/Section";
import { lazy, Suspense, memo, useState, useEffect } from "react";

// Lazy-loaded components for better performance
const Hero = lazy(() => import("./components/Hero"));
const Details = lazy(() => import("./components/Details"));
const About = lazy(() => import("./components/About"));
const Offers = lazy(() => import("./components/Offers"));
const Contact = lazy(() => import("./components/Contact"));

// Memoized Section to prevent unnecessary re-renders
const MemoizedSection = memo(Section);

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  function showMenu() {
    setIsVisible(true);
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
    <>
      <main className="w-full min-h-screen bg-black relative p-2 space-y-2">
        {isVisible && <MenuDialog hideMenu={() => setIsVisible(false)} />}
        <Header />
        <Suspense fallback={<div>Loading Hero...</div>}>
          <MemoizedSection>
            <Hero showMenu={showMenu} />
          </MemoizedSection>
        </Suspense>

        <Suspense fallback={<div>Loading Details...</div>}>
          <MemoizedSection>
            <Details />
          </MemoizedSection>
        </Suspense>

        <Suspense fallback={<div>Loading About...</div>}>
          <MemoizedSection>
            <About />
          </MemoizedSection>
        </Suspense>

        <Suspense fallback={<div>Loading Offers...</div>}>
          <MemoizedSection>
            <Offers />
          </MemoizedSection>
        </Suspense>

        {/* <Suspense fallback={<div>Loading Contact...</div>}>
        <MemoizedSection>
          <Contact />
        </MemoizedSection>
      </Suspense> */}
      </main>
    </>
  );
}
