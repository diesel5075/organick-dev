import React, { useEffect } from "react";
import "../Pages/Portfolio.css";
import { Banner } from "../Banner/Banner";
import portfoliobanner from "../Images/portfoliobanner.png";
import Portfoliocard from "../Card/Portfoliocard";

const Portfolio = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <>
      <Banner img={portfoliobanner} name={"Portfolio Standard"} />
      <div className="container">
        <Portfoliocard />
      </div>
    </>
  );
};

export default Portfolio;
