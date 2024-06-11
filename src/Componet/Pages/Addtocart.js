import React, { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
// import { FaCircleArrowRight } from "react-icons/fa6";
import { CreateContext } from "../Context/Cartcontext";
import ssstarimg from "../Images/Star.png";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Addtocart = () => {
  const { cart } = useContext(CreateContext);
  const [cartOldValue, setCartOldValue] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("card")) || [];
    setCartOldValue(storedCart);
    cart.setCart(storedCart.length);

    // Initialize quantities
    const initialQuantities = storedCart.reduce((acc, item, index) => {
      acc[index] = item.cartvalue || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  useEffect(() => {
    // Calculate total price whenever quantities change
    const newTotalPrice = cartOldValue.reduce((total, item, index) => {
      const itemQuantity = quantities[index] || 1;
      const itemPrice = parseFloat(item.Product_price.replace("$", "")) || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [quantities, cartOldValue]);

  const handleQuantityChange = (index, change) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities, [index]: Math.max(0, (prevQuantities[index] || 1) + change) };
      return newQuantities;
    });
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollTop();
  }, []);

  const handleAddCart = () => {
    navigate("/Shop");
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartOldValue.filter((_, i) => i !== index);
    setCartOldValue(updatedCart);
    localStorage.setItem("card", JSON.stringify(updatedCart));
    cart.setCart(updatedCart.length);
  };

  return (
    <div className="productsdetails bgcolors" style={{ padding: "200px 0" }}>
      <div className="container">
        {cartOldValue?.map((item, index) => (
          <div className="row df_ali_justy" key={index}>
            <div className="col-4">
              <div className="rightimgss position-relative">
                <div className="ssrightimg">
                  <img src={item.Product_img} className="w-100" alt="Product" />
                </div>
                <div className="sstext">
                  <p className="imgcatbox">{item.procuct_catogory}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="lefttext">
                <h2 className="smalltextp">{item.Product_name}</h2>
                <img src={ssstarimg} className="mb-3" alt="Star Rating" />
                <p className="pricep">
                  <del className="del">{item.Product_price_del}</del>
                  {item.Product_price}
                </p>
                <p className="Third_text_smallp">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="leftquntity d-flex justify-content-around align-items-center">
                <div className="leftquntext">
                  <p className="pricep"> </p>
                </div>
                <div className="leftqunnumber counteraddbutton me-5">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => handleQuantityChange(index, -1)}
                    style={{ fontSize: "30px" }}
                  >
                    <CiCircleMinus />
                  </button>
                  <div
                    className="kram"
                    style={{ margin: "15px", fontSize: "30px" }}
                  >
                    {quantities[index]}
                  </div>
                  <button
                    className="border-0 bg-transparent"
                    style={{ fontSize: "30px" }}
                    onClick={() => handleQuantityChange(index, 1)}
                  >
                    <CiCirclePlus />
                  </button>
                </div>
                <div className="leftuqbutton removeItem">
                  <Button
                    onClick={() => handleRemoveItem(index)}
                    name="Remove"
                    bg_color="#FF0000"
                    color="white"
                    margin="0"
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <div className="row mb-5">
          <div className="col-6">
            <div className="total">
              <p className="font600 text-uppercase">Total</p>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="totalprice">
              <p className="font600">${totalPrice}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <Button
              onClick={handleAddCart}
              name="Back To Shopping"
              bg_color="#274C5B"
              color="#FFFFFF"
              fontw={700}
              fontsize="20px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
