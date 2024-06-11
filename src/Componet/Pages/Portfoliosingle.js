import React, { useContext, useEffect } from "react";
import "../Pages/Portfoliosingle.css";
import { Banner } from "../Banner/Banner";

import Portfoliosibanner from "../Images/Portfoliosinglebanner.png";
import farmbanner from "../Images/farm.png" ;
import { CreateContext } from "../Context/Cartcontext";
import { useNavigate } from "react-router-dom";

const Portfoliosingle = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])

  const { cartitems } = useContext(CreateContext);


  return (
    <>
      <div className="main_portfolio position-relative">
        <div className="portfolio_inner">
          <Banner  img={cartitems.carditem.Product_img} />
        </div>
        <div className="portfoliosingle">
          <div className="container">
            <div className="portfoliotext">
              <div className="row">
                <div className="col-8">
                  <div className="portfoliosingleright">
                    <h2 className="bannetrshoph2">{cartitems.carditem.Product_name}</h2>
                    <p className="font400">
                      Established fact that a reader will be distracted by the
                      readable content of a page when looking a layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed{" "}
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="portfoliosingleleft">
                    <div className="datebox">
                      <p className="smalltextp">
                        Date <span className="font400">: December 4, 2022</span>
                      </p>
                      <p className="smalltextp">
                        Client <span className="font400">: Kevin Martin</span>
                      </p>
                      <p className="smalltextp">
                        Category{" "}
                        <span className="font400">: Agriculture , Eco </span>
                      </p>
                      <p className="smalltextp">
                        Service{" "}
                        <span className="font400">: Organic Products</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About The Farm */}
      <div className="aboutthefarm " style={{ marginTop: "223px" }}>
        <div className="container">
          <div className="main_aboutthefarm">
            <div className="aboutfarm_inner">
              <h2 className="h5text ">About The Farm:</h2>
              <p className="font400">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
              <img src={farmbanner} alt="" className="w-100 mb-3" style={{borderRadius:"20px"}} />
              <p className="font400 text-center">The Organic Products</p>
              <h2 className="h5text ">How To Farm:</h2>
              <p className="font400">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
              <h2 className="h5text ">Conclusion:</h2>
              <p className="font400">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About The Farm */}
    </>
  );
};

export default Portfoliosingle;
