import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Layout  from "@/layouts/Layout";
import { Contact } from "@/pages/Contact";
import { Home }  from "@/pages/Home";
import { About }  from "@/pages/About";
import { Resume }  from "@/pages/Resume";
import { Projects } from "@/pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element = {<Layout />}>          
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />            
          <Route path="/about" element={<About />} />            
          <Route path="/resume" element={<Resume />} />            
          <Route path="/projects" element={<Projects />} />            
        </Route>                             
      </Routes>
    </BrowserRouter>
  );
}


