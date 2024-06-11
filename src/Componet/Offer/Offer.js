import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { offercard } from "../Data/Data";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="offer_main mb-4">
                <div className="Offer_text_right">
                  <p className="yellowtail-regular ">Offer</p>
                  <h2 className="roboto-bold">We Offer Organic For You</h2>
                </div>
<Link to={"/shop"}>

                <Button
                  name={"View All Product "}
                  bg_color={"#EFD372"}
                  color={"#274C5B"}
                  icon={<FaCircleArrowRight />}
                  fontw={"700"}
                />
</Link>
              </div>
              <div className="row">
                {offercard.map((offeritem) => (
                  <div className="col-lg-3 mb-5" data-aos="flip-left">
                    <div className="offer_products products position-relative">
                      <Link to={"/shopsingle"}>
                        <div className="offer_card">
                          <img
                            src={offeritem.offercard_img}
                            className="p_img_hight"
                            alt=""
                          />
                          <div className="card-body">
                            <p className="offer_products_name roboto-bold  roboto-bold">
                              {offeritem.offercard_name}
                            </p>
                            <hr />

                            <div className="offer_price_inner">
                              <p className="offer_products_price">
                                <del>{offeritem.offercard_price_del}</del>
                                {offeritem.offercard_price}
                              </p>
                              <p className="products_rating">
                                <img src={offeritem.offercard_rating} alt="" />
                              </p>
                            </div>
                            <div className="offer_product_type ">
                              <p>{offeritem.offercard_catogory}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="hearticon">
                <div className="mainico">
                  <CiHeart/>
                  <PiShoppingCartSimpleThin/>
                  
                </div>
              </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
