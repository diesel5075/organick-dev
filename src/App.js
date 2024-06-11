import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componet/Header/Header";
import Home from "./Componet/home/Home";
import About from "./Componet/Pages/About";
import Shop from "./Componet/Pages/Shop";
import ShopSingale from "./Componet/Pages/ShopSingale";
import Footer from "./Componet/Footer/Footer";
import Service from "./Componet/Pages/Service";
import Servicesingle from "./Componet/Pages/Servicesingle";
import Portfolio from "./Componet/Pages/Portfolio";
import Portfoliosingle from "./Componet/Pages/Portfoliosingle";
import Teamdata from "./Componet/Pages/Teamdata";
import Blogs from "./Componet/Pages/Blogs";
import Blogsingle from "./Componet/Pages/Blogsingle";
import Contact from "./Componet/Pages/Contact";
import Error from "./Componet/Pages/Error";
import Licenses from "./Componet/Pages/Licenses";
import Changelog from "./Componet/Pages/Changelog";
import ProtectedPage from "./Componet/Pages/ProtectedPage";
import { CreateContext } from "./Componet/Context/Cartcontext";
import Addtocart from "./Componet/Pages/Addtocart";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ShopSingle from "./Componet/Pages/ShopSingale";
AOS.init();

function App()  {
  const [cart, setCart] = useState(0);
  const [carditem, setcartitem] = useState([]);

  // useEffect(() => {
  //   let a = localStorage.getItem("cartnumber");
  //   setCart(parseInt(a=== null ? 0 : a))
  // }, [cart]);
 
  return (
    <CreateContext.Provider
      value={{ cart: { cart, setCart }, cartitems: { carditem, setcartitem } }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopsingle" element={<ShopSingale />} />
          <Route path="/service" element={<Service />} />
          <Route path="/servicesingle" element={<Servicesingle />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfoliosingle" element={<Portfoliosingle />} />
          <Route path="/team" element={<Teamdata />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogsingle" element={<Blogsingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/protectedpage" element={<ProtectedPage />} />
          <Route path="/addtocart" element={<Addtocart />} />


          {/* <Route path="/ShopSingle" element={<ShopSingle/>} /> */}
          <Route path="/cart" element={<Addtocart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CreateContext.Provider>
  );
};

export default App;
