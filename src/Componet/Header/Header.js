import React, { createContext, useContext, useState } from "react";
import { menu } from "../Data/Data";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import "./Header.css";
import logo from "../Images/Logo (1).png";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext } from "../Context/Cartcontext";
// import About from "../Pages/About";
const Header = () => {
  const [block, setBlock] = useState(false);

  const toggleSearch = () => {
    setBlock(!block);
  };
  const { cart } = useContext(CreateContext);



  const navigate = useNavigate();
  const AddCart = () => {
    navigate("/addtocart");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0  nav styheader">
        <div className="container pt-3 pb-3" style={{ zIndex: "1" }}>
          <p className="navbar-brand navbarlogo p-0" href="#">
            <img className="img_size" src={logo} alt="" />
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navmain "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 align-items-center">
              {menu.map((items) => (
                <li className="nav-item h-menu position-relative" >
                  {items?.submenu && items.submenu.length > 0 ? (
                    <p className="mb-0 p-2 roboto-bold headerfonts">
                      {items.title}
                      {items?.submenu && items.submenu.length > 0 && (
                        <IoIosArrowDown />
                      )}
                    </p>
                  ) : (
                    <Link
                      className="nav-link active  headerfonts"
                      aria-current="page"
                      to={items.Url}
                    >
                      {items.title}
                      {items?.submenu && items.submenu.length > 0 && (
                        <IoIosArrowDown />
                      )}
                    </Link>
                  )}
                  {items?.submenu && items.submenu.length > 0 && (
                    <ul className="submenu p-0  " style={{ width: "100px" }}>
                      {items.submenu.map((item) => (
                        <li>
                          <Link
                            className="hover_submenu"
                            style={{ color: "white", fontWeight: "bold" }}
                            to={item.Url}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <div className="position-relative" >
                <input
                  className={`form-control input_animation me-2 ${
                    block ? "" : "d-none"
                  }`}
                  type="search"
                  aria-label="Search"
                />
                <div
                  className="d-flex justify-content-center align-items-center search_icon position-absolute"
                  onClick={toggleSearch}
                >
                  <CiSearch className="fs-5" />
                </div>
              </div>
          
                
              <div className="cart" onClick={() => AddCart()}>
                <div className="cart_main position-relative">
                  <div className="car_icon d-flex align-items-center justify-content-center  text-center ">
                    <div className="iconsty">
                      <IoCartOutline className=" fs-5 " />
                    </div>
                    <div className="cart_text">
                      <p className="cart_text m-0 roboto-bold ps-2 pe-2 t_color">
                        cart({cart.cart})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
             
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
// myyyy
