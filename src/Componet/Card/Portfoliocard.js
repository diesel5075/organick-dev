import React, { useContext } from "react";
import { Portfoliocards } from "../Data/Data";
import { useNavigate } from "react-router-dom";
import { CreateContext } from "../Context/Cartcontext";
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import "../Card/Portfoliocard.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const Portfoliocard = () => {
  const navigate =useNavigate();
  const { cartitems } = useContext(CreateContext);

  const PortHeandle=(item)=>{
    cartitems.setcartitem(item)
    navigate("/portfoliosingle")
  }
  return (

    <>
      <div className="row">
        {Portfoliocards.map((pitem) =>(
          <div className="col-lg-4 mb-5" data-aos="flip-left" onClick={() => PortHeandle(pitem)}>
            <div className="portfoliopro position-relative">
              <div className="portfoliocard">
                <img
                  src={pitem.Product_img}
                  alt=""
                  className="p_img_hight mb-4 borderr"
                />
                <div className="card-body">
                  <p className="products_name roboto-bold  roboto-bold m-0">
                    {pitem.Product_name}
                  </p>
                  <div className="hoverportfolio"></div>
                  <div className="price_inner">
                    <p className=" m-0 smallp">{pitem.Product_price}</p>
                  </div>
                </div>
              </div>
              {/* <div className="imghover">
                <div className="imghovericon">
                <MdKeyboardArrowRight  />
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfoliocard;
