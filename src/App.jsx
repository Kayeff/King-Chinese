import { AnimatePresence } from "motion/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <main className="w-full min-h-[100svh] bg-black relative gap-2 font-inter">
      <ScrollToTop />
      <Header />
      <AnimatePresence key={location.pathname}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </main>
  );
}
