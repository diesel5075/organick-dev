import React, { useEffect } from "react";
import { Banner } from "../Banner/Banner";
import blogsbanner from "../Images/blogsbanner.png";
import { blogpcard } from "../Data/Data";
import Card_blog from "../Card_blog/Card_blog";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])


  return (
    <>
      <Banner img={blogsbanner} name={"Recent  News"} />
      <div className="container">
        <div className="row">
          {blogpcard.map((item) => (
            <div className="col-lg-6">
              <Card_blog blog={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
