import React, { useEffect } from "react";
import "../Pages/Servicesingle.css";
import { Banner } from "../Banner/Banner";
import servicesinglebanner from "../Images/servicesibglebanner.jpg";
import servicesuser from "../Images/srvicesing.png";
import servicpart from "../Images/servicpart1.png";

const Servicesingle = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <>
      <Banner img={servicesinglebanner} name={"Quality Standard"} />
      <div className="container">
        <div className="serviceuser">
          <img src={servicesuser} className="w-100 mb-5" />
          <div
            className="servicepart m-auto mb-5"
            style={{ maxWidth: "936px" }}
          >
            <h2 className="headingh2">Organic Store Services</h2>
            <p className="font400">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
              <br />
              <br />
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
          </div>
          <div className="row mb-5">
            <div className="col-4 ">
              <img src={servicpart} />
            </div>
            <div className="col-8">
              <div className="serviceparttext">
                <h5 className="smalltextp">Why Organic</h5>
                <p className="font400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-8">
              <div className="serviceparttext">
                <h5 className="smalltextp">Speciality Produce</h5>
                <p className="font400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
            </div>
            <div className="col-4  m-auto">
              <img src={servicpart} />
            </div>
          </div>

          <div className="servicepart m-auto mb-5" style={{ maxWidth: "936px" }}>
            <h2 className="headingh2">We farm your land</h2>
            <p className="font400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>

          <div className="servicepartbutton mb-5">
            <div className="partbutton">
              <div className="numberbutton">
                <p className="addtocart m-0 me-3">01</p>
              </div>
              <div className="numbertext">
                <p className="font600 m-0">Best quality support</p>
              </div>
            </div>
            <div className="partbutton">
              <div className="numberbutton">
                <p className="addtocart m-0 me-3">02</p>
              </div>
              <div className="numbertext">
                <p className="font600 m-0">Money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicesingle;
