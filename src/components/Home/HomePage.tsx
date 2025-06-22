import { Welcome } from "@/pages/Home/Welcome";
import { WhoIAm } from "@/pages/Home/WhoIAm";
import { Projects } from "@/pages/Home/Projects";  
import { Banner } from "@/pages/Home/Banner";

export const HomePage = () => {
  return (
    <>   
      <Welcome/>  
      <WhoIAm/>
      <Projects/>
      <Banner/>
    </>
  );
};