import React, { useEffect } from "react";
import "../Pages/Service.css";
import servicebanner from "../Images/serviceBanner .jpg";
import { Banner } from "../Banner/Banner";
import servicesicon1 from "../Images/servicesicon1.jpg";
import servicesicon2 from "../Images/servicesicon4.jpg";
import servicesicon3 from "../Images/servicesicon3.png";
import servicesicon4 from "../Images/servicesicon2.jpg";
import servicesicon5 from "../Images/servicesiconn1.jpg";
import servicesicon6 from "../Images/servicesiconsix.png";
import servicemainphoto from "../Images/servicemainphoto.png";
import Button from "../Button/Button";
import { FaCircleArrowRight } from "react-icons/fa6";
import videoicon from "../Images/Video Icon.png";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  const navigate = useNavigate();
  const AddCartHeandle = (item) => {
    navigate("/servicesingle");
  };
  return (
    <>
      {/* What we Grow */}
      <Banner img={servicebanner} name={"Service"}/>
      <div className="container">
        <div className="servicesheading text-center">
          <p className="First_text_p ">What we Grow</p>
          <h2 className="headingh2 m-auto mb-5" style={{ maxWidth: 482 }}>
            Better Agriculture for Better Future
          </h2>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="services-rigth text-end">
              <div className="servicesrigth_items">
                <img src={servicesicon1} />
                <h5 className="smalltextp ">Dairy Products</h5>
                <p className="font400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div className="servicesrigth_items">
                <img src={servicesicon2} />
                <h5 className="smalltextp ">Store Services</h5>
                <p className="font400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div className="servicesrigth_items">
                <img src={servicesicon3} />
                <h5 className="smalltextp ">Delivery Services</h5>
                <p className="font400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 text-center">
            <img src={servicemainphoto} className="w-100" />
            <Button   onClick={() => AddCartHeandle()}
              name={"Explore More"}
              bg_color={"white"}
              border={"2px solid #274C5B"}
              color={"#274C5B"}
              fontw={"700"}
              icon={<FaCircleArrowRight />}
            />
          </div>
          <div className="col-4">
            <div className="services-left text-start">
              <div className="servicesleft_items">
                <img src={servicesicon4} />
                <h5 className="smalltextp ">Agricultural Services</h5>
                <p className="font400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div className="servicesleft_items">
                <img src={servicesicon5} />
                <h5 className="smalltextp ">Organic Products</h5>
                <p className="font400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div className="servicesleft_items">
                <img src={servicesicon6} />
                <h5 className="smalltextp ">Fresh Vegetables</h5>
                <p className="font400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What we Grow */}
      {/* Organic Only */}
      <div className="organiconly mypadding_top-bottom">
        <div className="container">
          <div className="orgmain text-center ">
            <p className="First_text_p">Organic Only</p>
            <h2 className="headingh2 mb-5">Everyday Fresh & Clean</h2>
            <p className="Third_text_smallp m-auto mb-5">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the{" "}
            </p>
            <img src={videoicon}/>
          </div>
        </div>
      </div>
      {/* Organic Only */}
    </>
  );
};

export default Service;
