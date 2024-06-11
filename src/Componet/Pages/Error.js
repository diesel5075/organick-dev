import React, { useEffect } from "react";
import { Banner } from "../Banner/Banner";
import bannererro from "../Images/errorbanner.png";
import Button from "../Button/Button";
import { FaCircleArrowRight } from "react-icons/fa6";
import "../Pages/Error.css";

const Error = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <>
      <div className="mainerror position-relative">
        <Banner img={bannererro} />
        <div className="container">
          <div className="errortext">
            <h1 className="errorfont">404</h1>
            <h4 className="headingh2">Page not found</h4>
            <p className="font18">
              The page you are looking for doesn't exist or has been moved
            </p>
            <Button name={"Go to Homepage"} icon={<FaCircleArrowRight />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
