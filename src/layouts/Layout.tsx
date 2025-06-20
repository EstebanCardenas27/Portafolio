import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/header/Header";
import ParticlesComponent from "@/components/Particles/particles"

export default function Layout() {
  return (
    <div className="relative flex flex-col min-h-screen bg-brand-dark">     
      <ParticlesComponent id="particles"/>
      <Header />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}