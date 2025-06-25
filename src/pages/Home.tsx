import { Welcome } from "@/pages/Home/Welcome";
import { WhoIAm } from "@/pages/Home/WhoIAm";
import { Projects } from "@/pages/Home/Projects";  
import { Banner } from "@/pages/Home/Banner";
import { Background } from "@/components/Background";
import ParticlesComponent from "@/components/Particles/particles"

export const Home = () => {
  return (
    <section className="relative">
      <div className="absolute z-[-20] inset-0">
        <ParticlesComponent id="particles"/>  
      </div>                              
      <Background /> 
      <Welcome/>  
      <WhoIAm/>
      <Projects/>
      <Banner/>
    </section>
  );
};













