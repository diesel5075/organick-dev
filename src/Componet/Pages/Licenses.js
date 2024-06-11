import React, { useEffect } from "react";
import Banner_two from "../Banner_two/Banner_two";
import bannerimgtwo from "../Images/bannertoo.png";

const Licenses = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <>
      <Banner_two img={bannerimgtwo} name={"Licenses"} />
      <div className="licenses">
        <div className="container">
          <div className="row mb-5">
            <div className="col-6">
              <div className="licenseleft">
                <h2 className="font40">Icon & Graphics</h2>
              </div>
            </div>
            <div className="col-6">
              <div className="licenseright">
                <p className="font400">
                  Icons and Graphics are manually designed by the VictorFlow
                  Templates team. You may download these and edit them to fit
                  your website without asking for permission or providing
                  credit.
                  <br />
                  <br />
                  Upon purchasing Software UI Kit Template our team grants you a
                  nonexclusive, worldwide copyright license to download, copy,
                  modify, and use the icons.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-6">
              <div className="licenseleft">
                <h2 className="font40">Photography</h2>
              </div>
            </div>
            <div className="col-6">
              <div className="licenseright">
                <p className="font400">
                  All images used in the Organick Webflow Template are licensed
                  for free personal and commercial use. If you'd like to use any
                  specific image, you can check the licenses and download the
                  images for free on Unsplash, Pexels‍. And Freepik.
                </p>
                <p className="font30">Unsplash</p>
                <p className="font400">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                  Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,
                </p>
                <p className="font30">Pixcel</p>
                <p className="font400">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17,{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-6">
              <div className="licenseleft">
                <h2 className="font40">Font</h2>
              </div>
            </div>
            <div className="col-6">
              <div className="licenseright">
                <p className="font400">
                  Organick template uses free licensed Google Fonts. Please
                  check Roboto, Yellowtail and Open Sans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Licenses;
