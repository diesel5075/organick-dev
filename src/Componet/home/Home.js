import React, { useEffect } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Aboutus from "../Images/aboutus.png";
import Foodicon from "../Images/Icon .png";
import Quality from "../Images/org.png";
import "./Home.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testi_user from "../Images/testinology.png";
import testi_star from "../Images/Star.png";
import { Circle } from "../Circle/Circle";
import Offer from "../Offer/Offer";
import EcoFriendlybackground from "../Images/Photo.jpg";
import Gallery1 from "../Images/g1 (1).jpg";
import Gallery2 from "../Images/g1 (1).png";
import Gallery3 from "../Images/g1 (2).png";
import Blog from "../Blog/Blog";
import { blogcard } from "../Data/Data";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  const AddCartHeandle = (item) => {
    navigate("/blog");
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <>
      {/* hero */}
    
      <section >
        <div className="hero position-relative " > 
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="hero_img"></div>
              <div className="container">
                <div className="hero_main">
                  <div className="hero_inner">
                    <div className="hero_inner_text "data-aos="fade-right">
                      <p className="yellowtail-regular hero_text ">
                        100% Natural Food
                      </p>
                      <h1 >Choose the best healthier way of life</h1>
                      <Button
                      name={"Explore Now"}
                      bg_color={"#274C5B"}
                      color={"white"}
                      icon={<FaCircleArrowRight />}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero */}
      {/* second Get 10% off on Vegetables */}
      <section>
        <div className="offer">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-6 col-md-12" data-aos="fade-right">
                <div className="offer_left">
                  <div className="offer_left_text">
                    <div className="offer_left_img">
                      <p className="offer_text  yellowtail-regular text-white">
                        Natural!!
                      </p>
                      <h2 className="roboto-bold ">Get Garden Fresh Fruits</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12" data-aos="fade-left">
                <div className="offer_right">
                  <div className="offer_left_text">
                    <div className="offer_right_img">
                      <p className="offer_text yellowtail-regular ">Offer!!</p>
                      <h2 className="roboto-bold ">
                        Get 10% off on Vegetables
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second Get 10% off on Vegetables */}
      {/* About us */}
      <div className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12   " data-aos="fade-right">
              <div className="about_left">
                <img src={Aboutus} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12   " data-aos="fade-left">
              <div className="about_right">
                <div className="about_right-text">
                  <p className="yellowtail-regular" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">About Us</p>
                  <h2 className="roboto-bold"data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                    We Believe in Working Accredited Farmers
                  </h2>
                  <span className="mb-5"data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </span>
                </div>
                <div className="about_right_bottom">
                  <div className="right_bottom_up">
                    <div className="right_main">
                      <div className="right_bottom_icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                        <img src={Foodicon} />
                      </div>
                      <div className="bottom_text"data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                        <h3 data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">Organic Foods Only</h3>
                        <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                          Simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <div className="right_main">
                      <div className="right_bottom_icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                        <img src={Quality} />
                      </div>
                      <div className="bottom_text">
                        <h3 data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">Quality Standards</h3>
                        <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                          Simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <Link to={"/shop"} >

                    <Button 
                      name={"Shop Now"}
                      bg_color={"#274C5B"}
                      color={"white"}
                      icon={<FaCircleArrowRight />}
                    />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About us */}
      {/* Our Products */}
      <div className="OurProducts">
        <div className="container">
          <div className="OurProductsmain" >
            <div className="Ourproducts_title">
              <p className="yellowtail-regular">Categories</p>
              <h2>Our Products </h2>
            </div>
              <Card />
          </div>
          <div className="text-center">
          <Link to={"/shop"}>

            <Button
              name={"Load More "}
              bg_color={"#274C5B"}
              color={"white"}
              icon={<FaCircleArrowRight />}
            />
          </Link>
          </div>
        </div>
      </div>
      {/* Our Products */}
      {/* Testimonial */}
      <section className=" back2 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading text-center">
                <p className="yellowtail-regular "  data-aos="fade-up">Testimonial</p>
                <h2 className="mb-5"  data-aos="fade-up">What Our Customer Saying?</h2>
              </div>
              <Slider {...settings} >
                <div>
                  <div className="Testimonial">
                    <img src={testi_user} />
                    <img src={testi_star} />
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <h4>Sara Taylor</h4>
                    <p>Consumer</p>
                  </div>
                </div>
                <div>
                  <div className="Testimonial">
                    <img src={testi_user} />
                    <img src={testi_star} />
                    <p className="mb-4">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <h4>Sara Taylor</h4>
                    <p>Consumer</p>
                  </div>
                </div>
              </Slider>
              <Circle />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}
      {/* offer */}
      <Offer />
      {/* offer */}
      {/* Eco Friendly */}
      {/* <div className="eco_friendly mb-5">
        <div className="container-fluid p-0">
          <div className="row position-relative m-0">
            <div className="col-6 p-0" data-aos="fade-right">
              <img src={EcoFriendlybackground} />
            </div>
            <div className="col-6 p-0" >
              <div className="ecomainright" data-aos="fade-left">
                <div className="main_eco">
                  <p className="yellowtail-regular">Eco Friendly</p>
                  <h2 className="roboto-bold">
                    {" "}
                    Econis is a Friendly Organic Store
                  </h2>
                </div>
                <div className="econis_store">
                  <h5>Start with Our Company First</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                  <h5>Learn How to Grow Yourself</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                  <h5>Farming Strategies of Today</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Eco Friendly */}
      {/* Gallery */}
      <div className="Gallery">
        <div className="container">
          <div className="row">
            <div className="col-4" data-aos="fade-up">
              <div className="pedimg">
                <img src={Gallery1} className="w-100" />
                <div className="garrery_text">
                  <p>Organic Juice</p>
                </div>
              </div>
            </div>
            <div className="col-4" data-aos="fade-down">
              <div className="pedimg">
                <img src={Gallery2} className="w-100" />
                <div className="garrery_text">
                  <p>Organic Food</p>
                </div>
              </div>
            </div>
            <div className="col-4" data-aos="fade-up">
              <div className="pedimg">
                <img src={Gallery3}  className="w-100"/>
                <div className="garrery_text">
                  <p>Nuts Cookis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      {/* blog */}
      <div className="blogs m-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog_text">
                <div className="blogmain">
                  <p className="yellowtail-regular">News</p>
                  <h2 className="roboto-bold">
                    Discover weekly content about organic food, & more
                  </h2>
                </div>
                <div>
                  <Button
                  onClick={() => AddCartHeandle()}
                    name={"More News"}
                    bg_color={"white"}
                    border={"2px solid #274C5B"}
                    color={"#274C5B"}
                    fontw={"700"}
                    icon={<FaCircleArrowRight />}
                  />
                </div>
              </div>
              <div className="row">
                {blogcard.map((item) => (
                  <div className="col-lg-6" data-aos="fade-down">
                    <Blog blogc={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog */}
    </>
  );
};

export default Home;
