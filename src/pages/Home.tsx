import { Welcome } from "@/pages/Home/Welcome";
import { WhoIAm } from "@/pages/Home/WhoIAm";
import { Projects } from "@/pages/Home/Projects";  
import { Background } from "@/components/Background";
import { Banner } from "@/pages/Home/Banner";
import ParticlesComponent from "@/components/Particles/particles"

export const Home = () => {
  return (
    <>
      <div className="absolute -z-10">
        <ParticlesComponent id="particles"/>  
      </div>                              
      <Background /> 
      <Welcome/>  
      <WhoIAm/>
      <Projects/>
      <Banner/>
    </>
  );
};













