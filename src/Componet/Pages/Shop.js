import React, { useEffect } from "react";
import "../Pages/Shop.css";
import { Banner } from "../Banner/Banner";
import Card2 from "../Card/Card2";
import { Link } from "react-router-dom";
import Bannerimg from "../Images/shopbanner.png";

const Shop = () => {
  const scrolltop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrolltop();
  }, []);

  return (
    <div>
      {/* Banner shop */}
      <Banner img={Bannerimg} name={"Shop"} />
      {/* Banner shop */}
      {/* shop card */}
      <div className="container">
        <Link to="/ShopSingle">
          <Card2 />
        </Link>
      </div>
      {/* shop card */}
    </div>
  );
};

export default Shop;
