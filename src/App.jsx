import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { lazy, Suspense, memo } from "react";

// Lazy-loaded components for better performance
const Menu = lazy(() => import("./components/Menu"));
const Offers = lazy(() => import("./components/Offers"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

// Memoized Section to prevent unnecessary re-renders
const MemoizedSection = memo(Section);

export default function App() {
  return (
    <main className="w-full min-h-screen bg-mint-cream font-General-Sans relative">
      <Navbar />

      <MemoizedSection className="w-full flex items-center justify-center">
        <Hero />
      </MemoizedSection>

      <Suspense fallback={<div>Loading About...</div>}>
        <MemoizedSection>
          <About />
        </MemoizedSection>
      </Suspense>

      <Suspense fallback={<div>Loading Menu...</div>}>
        <MemoizedSection>
          <Menu />
        </MemoizedSection>
      </Suspense>

      <Suspense fallback={<div>Loading Offers...</div>}>
        <MemoizedSection>
          <Offers />
        </MemoizedSection>
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <MemoizedSection>
          <Contact />
        </MemoizedSection>
      </Suspense>
    </main>
  );
}
