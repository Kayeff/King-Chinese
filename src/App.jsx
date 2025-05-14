import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="w-full min-h-[100svh] bg-black relative gap-2 font-switzer">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
