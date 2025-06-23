import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";


export default function Layout() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-gradient-to-br from-[rgba(15,23,42,0.99)] to-[rgba(17,24,39,0.99)] ">
      <Header />      
      <main className="flex-grow ">
        <Outlet />
      </main>      
      <Footer />
    </div>
  );
}

