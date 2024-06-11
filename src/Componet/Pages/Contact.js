import React, { useEffect } from "react";
import { Banner } from "../Banner/Banner";
import Backgroundbanner from "../Images/Backgroundbanner.jpg";
import rightcon from "../Images/sectiontwo.jpg";
import emailicon from "../Images/Iconemail.png";
import callicon from "../Images/Iocncall.png";
import "../Pages/Contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import Button from "../Button/Button";

const Contact = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <>
      <Banner img={Backgroundbanner} name={"Contact Us"} />

      <div className="contact mb-5">
        <div className="container">
          <div className="row df_ali_justy">
            <div className="col-xxl-6 col-xl-12">
            <div className="banna_img">
              <img src={rightcon} className="w-100" style={{ borderRadius: "30px" }} />
            </div>
            </div>
            <div className="col-xxl-6 col-xl-12">
              <div className="conright ">
                <h2 className="headingh2">We'd love to talk about how we can work together.</h2>
                <p className="font400">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <div className="mainconright">
                <div className="conicon">
                  <div className="iconimg mb-4 me-4">
                    <img src={emailicon} alt="" />
                  </div>
                  <div className="iconimgtext">
                    <h5 className="h5text">Massege</h5>
                    <p className="font400">support@organic.com</p>
                  </div>
                </div>
                <div className="conicon">
                  <div className="iconimg mb-4 me-4">
                    <img src={callicon} alt="" />
                  </div>
                  <div className="iconimgtext">
                    <h5 className="h5text">Contact Us</h5>
                    <p className="font400">Contact Us +01 123 456 789</p>
                  </div>
                </div>
                <div className="iconmain_con d-flex ">
                  <div className="icon_color">
                    <FaInstagram />
                  </div>
                  <div className="icon_color">
                    <FaFacebook />
                  </div>
                  <div className="icon_color">
                    <FaTwitter />
                  </div>
                  <div className="icon_color">
                    <FaPinterest />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className="location mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mainlocation position-relative">
                <div className="location_img"></div>
                <div className="locationdetails">
                  <div className="uplocation">
                    <p className="First_text_p">Location</p>
                    <h5 className="headingh2">Our Farms</h5>
                    <p className="font400">
                      Established fact that a reader will be distracted by the
                      readable content of a page when looking a layout. The
                      point of using.
                    </p>
                  </div>
                  <div className="downlocation">
                    <div className="downlocationconicon d-flex">
                      <div className="downlocationiconimg mb-4 me-4">
                        <CiLocationOn
                          style={{ color: "#7eb693", fontSize: "50px" }}
                        />
                      </div>
                      <div className="downlocationiconimgtext">
                        <h5 className="headerfonts">New York, USA:</h5>
                        <p className="font400">
                          299 Park Avenue New York, New York 10171
                        </p>
                      </div>
                    </div>
                    <div className="downlocationconicon d-flex">
                      <div className="iconimg mb-4 me-4">
                        <CiLocationOn
                          style={{ color: "#7eb693", fontSize: "50px" }}
                        />
                      </div>
                      <div className="downlocationiconimgtext">
                        <h5 className="headerfonts">London, UK:</h5>
                        <p className="font400">
                          30 Stamford Street, London SE1 9LQ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location */}
      {/* contact from  */}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label font18">
              Full Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name*"
                style={{ border: "1px solid #7EB693" }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label font18">
              Your Email*
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                style={{ border: "1px solid #7EB693" }}
              />
            </div>
          </div>
          <div className="col-6">
          <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label font18">
              Company*
              </label>
              <input
                type="email"
                class="form-control"
                id="yourcompany name here"
                placeholder="yourcompany name here"
                style={{ border: "1px solid #7EB693" }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label font18">
              Subject*
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="how can we help"
                style={{ border: "1px solid #7EB693" }}
              />
            </div>
          </div>
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label font18"
              >
                Message*
              </label>
              <textarea
                style={{ border: "1px solid #7EB693" }}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="hello there,i would like to talk about how to..."
              ></textarea>
            </div>
            <div className="sendmasssge d-inline-block addtocart">

            <Button name={"Send Message"}/>
            </div>
        </div>
      </div>
      {/* contact from  */}

    </>
  );
};

export default Contact;
