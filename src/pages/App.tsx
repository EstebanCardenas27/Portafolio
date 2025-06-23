import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Layout  from "@/layouts/Layout";
import { About } from "@/pages/About";
import { Home }  from "@/pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element = {<Layout />}>          
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />            
        </Route>                             
      </Routes>
    </BrowserRouter>
  );
}


