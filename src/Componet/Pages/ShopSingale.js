import React, { useContext, useEffect, useState } from "react";
import "../Pages/ShopSingle.css";
import { Banner } from "../Banner/Banner";
import shopsibglebanner from "../Images/ShopSingleBanner.jpg";
import ssstarimg from "../Images/Star.png";
import Button from "../Button/Button";
import { FaCircleArrowRight } from "react-icons/fa6";
import Card3 from "../Card/Card3";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext } from "../Context/Cartcontext";

const ShopSingle = () => {
  const [cartValue, setCartValue] = useState(1);
  const { cartitems, cart } = useContext(CreateContext);
  const [cartOldValue, setCartOldValue] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("card")) || [];
    setCartOldValue(storedCart);
    cart.setCart(storedCart.length);
  }, [cart]);

  const handleAdd = () => {
    const newCartValue = cartValue === 1 ? cart.cart + 1 : cart.cart + parseInt(cartValue);
    const newCartItem = {
      ...cartitems.carditem,
      cartvalue: cartValue,
    };

    const updatedCart = [...cartOldValue, newCartItem];
    setCartOldValue(updatedCart);
    localStorage.setItem("card", JSON.stringify(updatedCart));
    cart.setCart(newCartValue);
    localStorage.setItem("cartnumber", newCartValue);
    navigate("/cart");
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      {/* Shop Single Banner */}
      <Banner img={shopsibglebanner} name={"Shop Single"} />

      {/* Product Details */}
      <div className="productsdetails">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="rightimgss position-relative">
                <div className="ssrightimg">
                  <img
                    src={cartitems.carditem.Product_img}
                    className="w-100"
                    alt="Product"
                  />
                </div>
                <div className="sstext">
                  <p className="imgcatbox">
                    {cartitems.carditem.procuct_catogory}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="lefttext">
                <h2 className="headingh2">{cartitems.carditem.Product_name}</h2>
                <img src={ssstarimg} className="mb-3" alt="Rating" />
                <p className="pricep">
                  <del className="del">
                    {cartitems.carditem.Product_price_del}
                  </del>
                  {cartitems.carditem.Product_price}
                </p>
                <p className="Third_text_smallp">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <div className="leftquntity d-flex justify-content-around align-items-center">
                <div className="leftquntext">
                  <p className="pricep">Quantity :</p>
                </div>
                <div className="leftqunnumber">
                  <input
                    type="number" placeholder="1"
                    onChange={(e) => setCartValue(parseInt(e.target.value))}
                  />
                </div>
                <div className="leftuqbutton addtocart">
                  <Button
                    onClick={handleAdd}
                    name={"Add To Cart"}
                    bg_color={"#274C5B"}
                    color={"white"}
                    icon={<FaCircleArrowRight />}
                    margin={"0"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Details */}
      {/* two buttons */}
      <div className="twobuttons mb-5">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-end align-items-center">
              <Button
                name={"Product Description"}
                bg_color={"#274C5B"}
                color={"#FFFFFF"}
                fontw={700}
                fontsize={"20px"}
              />
            </div>
            <div className="col-6 d-flex justify-content-start align-items-center">
              <Button
                name={"Additional Info"}
                bg_color={"#EFF6F1"}
                color={"#274C5B"}
                fontw={700}
                fontsize={"20px"}
              />
            </div>
            <p className="font400 mxwidth">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </p>
          </div>
        </div>
      </div>
      {/* two buttons */}
      {/* Related Products */}
      <div className="reletedproduct">
        <div className="container">
          <h2 className="bannetrshoph2 text-center mb-4">Related Products</h2>
          <Link to={"/ShopSingle"}>
            <Card3 />
          </Link>
        </div>
      </div>
      {/* Related Products */}
    </>
  );
};

export default ShopSingle;
