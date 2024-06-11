import React, { useContext } from 'react'
import Button from '../Button/Button'
import { FaCircleArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import { CreateContext } from '../Context/Cartcontext';

const Card_blog = ({blog}) => {
  const navigate = useNavigate();
  const {cartitems} = useContext(CreateContext)
  const blogr = (item) => {
    cartitems.setcartitem(item)
    navigate("/blogsingle");
  };
  return (
    <>
      <div className="blogs"  >
        <div className="blog_card">
          <img src={blog.blogimg} alt="" />
          <div className="blogimg_text">
            <span className="roboto-bold">
              {" "}
              {blog.blogusericon} {blog.blogusername}
            </span>
            <h2>{blog.blogsimgtext}</h2>
            <p>{blog.blogimgsubtext}</p>
            <Button onClick={() => blogr(blog)} name={"Read More"}  
              bg_color={"white"}
              color={"#274C5B"}
              fontw={"700"}
              icon={<FaCircleArrowRight/>}/>
          </div>
          <div className="rounddate">
            <p>{blog.blogimgdate}</p>
            <span>{blog.blogimgmonth}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card_blog
