import React from "react";
import Button from "../Button/Button";
import { footer } from "../Data/Data";
import footerlogo from "../Images/Logo (1).png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="mainfooter ">
      <div className="container">
        {footer.map((footeritems) => (
          <div className="footer_main"  data-aos="fade-right">
            <div className="footer d-block d-sm-flex">
              <div className="footer_text">
                <h2>{footeritems.subscribetext}</h2>
              </div>
              <div className="subscribebutton">
                <input type="text" placeholder="Your Email Address"  className="mb-2 mb-lg-0"/>
                <Button
                  name={"Subscribe "}
                  bg_color={"#274C5B"}
                  color={"white"}
                  fontw={"700"}
                  
                />
              </div>
            </div>
          </div>
        ))}
        <div className="footerend">
          <footer className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4">
              <div className="me-5 d-none d-lg-block"></div>
            </section>
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-lg-3 mx-auto mb-4 text-end px-4"  data-aos="fade-right">
                    <h6 className="text-uppercase fw-bold mb-4 footer_text_h6" >
                      Contact Us
                    </h6>
                    
                      
                    <p className="footer_text_p">Email</p>
                   
                    <p>needhelp@Organia.com</p>
                    <p className="footer_text_p">Phone</p>
                    <p>666 888 888</p>
                    <p className="footer_text_p">Address</p>
                    <p>88 road, borklyn street, USA</p>
                  </div>

                  <div className="col-lg-6 mx-auto mb-4 px-4 text-center brdfooter " data-aos="fade-down" >
                    <img src={footerlogo}   alt="" />
                    <p className="mt-4">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum simply dummy text of the printing{" "}
                    </p>
                   <div className="iconmain">
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

                  <div className="col-lg-3 mx-auto mb-md-0 mb-4 px-4"  data-aos="fade-left">
                    <h6 className="text-uppercase fw-bold mb-4 footer_text_h6">
                      Utility Pages
                    </h6>
                    <p>Style Guide</p>
                    <Link to={"/error"}  style={{color:"#212529BF"}}>

                    <p>404 Not Found</p>
                    </Link>
                    <Link to={"/protectedpage"}  style={{color:"#212529BF"}}>
                    <p>Password Protected</p>
                    </Link>
                    <Link to={"/licenses"}  style={{color:"#212529BF"}}>

                    <p>Licences</p>
                    </Link>
                    <Link to={"/changelog"} style={{color:"#212529BF"}}>

                    <p>Changelog</p>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center p-4 copy">
              © 2021 Copyright:
              <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
