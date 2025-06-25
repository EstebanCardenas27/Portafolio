import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 z-0 opacity-99">
      <Header />      
      <main className="flex-grow">
        <Outlet />
      </main>      
      <Footer />
    </div>
  );
}

