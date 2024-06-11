import React from "react";
import "../AboutUs/Aboutus.css";
import {aboutuscard} from "../Data/Data";
export const Aboutus = () => {
  return (
    <>
      <div className="aboutus_card mypadding_top-bottom ">
        <div className="container">
          <div className="about_text text-center">
            <p className="First_text_p ">About Us</p>
            <h2 className="headingwhite mb-4">What We Offer for You</h2>
          </div>
          <div className="row">
          {aboutuscard.map((aboutus_items)=>(

            <div className="col-lg-3 col-12">
              <div className="card_aboutus">
                <img src={aboutus_items.aboutuscardimg} className="w-100 mb-4" />
                <p className="psmalltext text-center">{aboutus_items.aboutuscardname}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};
