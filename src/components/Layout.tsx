import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ParticlesComponent from "@/components/particles"

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