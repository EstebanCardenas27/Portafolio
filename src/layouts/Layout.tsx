import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { VantaBirds } from "@/styles/Vanta/VantaBirds";
import { VantaCells } from "@/styles/Vanta/VantaCells";
import { VantaGlobe } from "@/styles/Vanta/VantaGlobe";

export default function Layout() {
  const location = useLocation();
  const showVanta = location.pathname === "/contact";
  const showCells = location.pathname === "/about";
  const showGlobe = location.pathname === "/resume";

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 z-0 opacity-99">
      {showVanta && <VantaBirds />}
      {showCells && <VantaCells />}
      {showGlobe && <VantaGlobe />}
      
      <Header />      
      <main className="flex-grow">
        <Outlet />
      </main>      
      <Footer />
    </div>
  );
}

