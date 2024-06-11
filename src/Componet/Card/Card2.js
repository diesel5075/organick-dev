import React, { useContext, useState } from "react";
import { producttwo } from "../Data/Data";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import "../Card/Card2.css";
import { CreateContext } from "../Context/Cartcontext";
import { FaHeart } from "react-icons/fa6";

const Card2 = () => {
  const { cartitems } = useContext(CreateContext);
  const navigate = useNavigate();

  const AddCartHeandle = (item) => {
    cartitems.setcartitem(item);
    navigate("/shopsingle");
  };

  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isCartFilled, setIsCartFilled] = useState(false);

  const toggleHeartFill = (i) => {
    setIsHeartFilled(!isHeartFilled);
    console.log(i);
  };

  const toggleCartFill = () => {
    setIsCartFilled(!isCartFilled);
  };
  return (
    <>
      <div className="row">
        {producttwo.map((pitem,i) => (
          <div className="col-lg-3 mb-5" data-aos="flip-left" onClick={() => AddCartHeandle(pitem)}>
            <div className="products position-relative">
              {/* <Link to={"/shopsingle"}> */}
              <div className="card">
                <img src={pitem.Product_img} alt="" className="p_img_hight" />
                <div className="card-body">
                  <p className="products_name roboto-bold  roboto-bold">
                    {pitem.Product_name}
                  </p>
                  <hr />

                  <div className="price_inner">
                    <p className="products_price m-0">
                      <del>{pitem.Product_price_del}</del>
                      {pitem.Product_price}
                    </p>
                    <p className="products_rating"></p>
                    <div className="rat">
                      <img src={pitem.product_rating} alt="" />
                    </div>
                  </div>
                  <div className="product_type ">
                    <p>{pitem.procuct_catogory}</p>
                  </div>
                </div>
              </div>
              {/* </Link> */}
              <div className="hearticon">
                <div className="mainico">
                  {isHeartFilled === true ? (
                    <FaHeart
                      className={isHeartFilled === true ? "filled" : ""}
                      onClick={()=>toggleHeartFill(i)}
                    />
                  ) : (
                    <CiHeart onClick={()=>toggleHeartFill(i)} />
                  )}
                  <PiShoppingCartSimpleThin
                    className={isCartFilled === true ? "filled" : ""}
                    onClick={toggleCartFill}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card2;
