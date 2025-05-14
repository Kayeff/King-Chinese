import BestSellers from "../components/BestSellers";
import Details from "../components/Details";
import Hero from "../components/Hero";
import About from "../components/About";
import Location from "../components/Location";

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
