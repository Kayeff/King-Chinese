import { lazy } from "react";
import Hero from "../components/Hero";
import Details from "../components/Details";

const BestSellers = lazy(() => import("../components/BestSellers"));
const About = lazy(() => import("../components/About"));
const Location = lazy(() => import("../components/Location"));

export default function Home() {
  return (
    <section className="w-full flex flex-col gap-2 p-2">
      <Hero />
      <Details />
      <BestSellers />
      <About />
      <Location />
    </section>
  );
}
