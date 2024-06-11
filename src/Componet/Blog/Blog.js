import React, { useContext } from "react";
import Button from "../Button/Button";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CreateContext } from "../Context/Cartcontext";

const Blog = ({ blogc }) => {
  const navigate = useNavigate();
  const {cartitems} = useContext(CreateContext)
  const blogr = (item) => {
    cartitems.setcartitem(item)
    navigate("/blogsingle");
  };
  return (
    <>
      <div className="blogs">
        <div className="blog_card">
          <img src={blogc.blogimg} alt="" />
          <div className="blogimg_text">
            <span className="roboto-bold">
              {" "}
              {blogc.blogusericon} {blogc.blogusername}
            </span>
            <h2>{blogc.blogsimgtext}</h2>
            <p>{blogc.blogimgsubtext}</p>
            <Button onClick={() => blogr(blogc)}
              name={"More News "}
              bg_color={"#EFD372"}
              color={"#274C5B"}
              fontw={"700"}
              icon={<FaCircleArrowRight />}
            />
          </div>
          <div className="rounddate">
            <p>{blogc.blogimgdate}</p>
            <span>{blogc.blogimgmonth}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
