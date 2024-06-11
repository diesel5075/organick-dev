import React, { useEffect } from "react";
import "./About.css";
import { Banner } from "../Banner/Banner";
import { FaCircleArrowRight } from "react-icons/fa6";
import Button from "../Button/Button";
import secondimage from "../Images/abotpageimg.png";
import tractoricon from "../Images/tractor.jpg";
import shopbag from "../Images/Chemical Plant.jpg";
import { FaRegDotCircle } from "react-icons/fa";
import whyimg from "../Images/why1.jpg";
import { policy } from "../Data/Data";
import Team from "../Team/Team";
import { Aboutus } from "../AboutUs/Aboutus";
import bannerimgabout from "../Images/Banner.png"
import { Link } from "react-router-dom";

const About = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <>
      {/* banner */}
     
      <div className="bimg">
        {/* <img src={bannerimgabout} className="w-100"  /> */}
      <Banner img={bannerimgabout} name={"About"} />

      </div>
      {/* banner */}
      {/* About Us */}
      <div className="AboutUs mypadding_top-bottom ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="aboutus_img">
                <img src={secondimage} className="w-100" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="aboutus_text">
                <p className="First_text_p">About Us</p>
                <h2 className="Secound_text_h2">
                  We do Creative Things for Success
                </h2>
                <p className="Third_text_smallp">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                  <br />
                  <br />
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <div className="about_us_content mb-5">
                <div className="con_one">
                  <div className="conimg">
                    <img src={tractoricon} />
                  </div>
                  <div className="con_text">
                    <p className="m-0 smalltextp ps-2">
                      Modern Agriculture Equipment
                    </p>
                  </div>
                </div>

                <div className="con_one">
                  <div className="conimg">
                    <img src={shopbag} />
                  </div>
                  <div className="con_text">
                    <p className="m-0 smalltextp ps-2">
                      No growth hormones are used
                    </p>
                  </div>
                </div>
              </div>
              <Link to={"/ShopSingale "}>
              <Button
                name={"Explore More "}
                bg_color={"#274C5B"}
                border={"2px solid #274C5B"}
                color={"white"}
                fontw={"700"}
                icon={<FaCircleArrowRight />}
              />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      {/* Why Choose us? */}
      <div className="WhyChoose mypadding_top-bottom ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-12 pe-5">
              <div className="WhyChoose_text">
                <p className=" First_text_p">Why Choose us?</p>
                <h2 className="Secound_text_h2">
                  We do not buy from the open market & traders.
                </h2>
                <p className="WhyChoose_text_smallp">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard the 1500s,
                  when an unknown
                </p>
              </div>
              <div className="WhyChoose_content mb-5">
                <div className="WhyChoose_one">
                  <div className="WhyChooseimg">
                    <h5>
                      {" "}
                      <FaRegDotCircle />
                      100% Natural Product
                    </h5>
                    <p className="m-0 Third_text_smallp ps-5 mb-3 mt-3">
                      Simply dummy text of the printing and typesetting industry
                      Lorem Ipsum
                    </p>
                  </div>
                  <div className="WhyChooseimg">
                    <h5>
                      {" "}
                      <FaRegDotCircle />
                      Increases resistance
                    </h5>
                    <p className="m-0 Third_text_smallp ps-5 mb-3 mt-3">
                      Filling, and temptingly healthy, our Biona Organic Granola
                      with Wild Berries is just the thing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="WhyChoose_img">
                <img src={whyimg} className="w-100" />
              </div>
            </div>
          </div>
          <div className="policy">
            <div className="row">
              {policy.map((policyitmes) => (
                <div className="col-lg-3  col-sm-6 d-flex justify-content-center">
                  <div className="policyitmes mt-3">
                    <img src={policyitmes.policy_img} className="mb-3" />
                    <h5 className="h5text mb-3">{policyitmes.policy_name}</h5>
                    <p className="Third_text_smallp">
                      {policyitmes.policy_text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose us? */}
      {/* team */}
      <Team />
      {/* team */}
      {/* Aboutus's About Us */}
      <Aboutus />
      {/* Aboutus's About Us */}
    </>
  );
};

export default About;
