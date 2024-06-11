import React, { useContext } from "react";
import { product } from "../Data/Data";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import "../Card/Card.css";
import { FiShoppingCart } from "react-icons/fi";
import { PiShoppingCartLight, PiShoppingCartSimpleThin } from "react-icons/pi";
import { CreateContext } from "../Context/Cartcontext";

const Card = () => {
  const {cartitems}=useContext(CreateContext);
  const navigate = useNavigate();
  
  const AddCartHeandle = (item) => {
    cartitems.setcartitem(item)
    navigate("/shopsingle");
  };
  return (
    <>
      <div className="row">
        {product.map((pitem) => (
          <div className="col-lg-3 mb-5" data-aos="flip-left" onClick={() => AddCartHeandle(pitem)}>
            <div className="products position-relative">
              <Link to={"/shopsingle"}>
                <div className="card ">
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
              </Link>
              <div className="hearticon">
                <div className="mainico ">
                  <CiHeart/>
                  <PiShoppingCartSimpleThin/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
