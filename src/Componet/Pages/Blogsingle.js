import React, { useContext, useEffect } from "react";
import { Banner } from "../Banner/Banner";
import blogsinglebanner from "../Images/blogsinglebanner.png";
import "../Pages/Blogsingle.css";
import { FaUser } from "react-icons/fa6";
import { CreateContext } from "../Context/Cartcontext";

const Blogsingle = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])

  const { cartitems } = useContext(CreateContext);

  return (
    <>
      <div
        className="mainblogsingle position-relative "
        style={{ marginBottom: "300px" }}
      >
        <Banner img={cartitems.carditem.blogimg} />
        {/* Research More Organic Food */}
        <div className="container">
          <div className="blogsingle ">
            <div className="uptext d-flex align-items-center  ">
              <p className="font600 me-3">
                Posted On:<span className="font400"> January 6, 2022</span>
              </p>
              <p className="font400 ">
                <FaUser style={{ color: "#7EB693" }} />
                By Rachi Card
              </p>
            </div>
            <div className="headingtext">
              <h2 className="headingh2">Research More Organic Food</h2>
              <p className="font400">
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Research More Organic Food */}
      </div>
      <div className="container">
        <div className="mainblogtext">
          <p className="font400 mb-5">
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully researched data and
            enterprise process improvements. Collaboratively expedite quality
            manufactured products via client-focused results quickly communicate
            enabled technology and turnkey leadership skills. Uniquely enable
            accurate supply chains rather than friction technology.
          </p>
          <h2 className="headingh2 mb-5">Preferred Form of Vitamin D?</h2>
          <p className="font400 mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
          <ul className="font400 mb-5">
            <li>
              {" "}
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li> Content here, content here', making it look like readable</li>
            <li> Packages and web pageLorem Ipsum as their default</li>
          </ul>
          <p className="font400 textbak mb-5">
            “The first rule of any organic used in a business is that nature
            applied to an efficient operation will magnify the efficiency. The
            second is that organic applied to an inefficient operation will
            magnify the health.”
          </p>
          <h2 className="headingh2 mb-5">Make perfect organic product with us</h2>
          <p className="font400 mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
          <ol className="font400 mb-5">
            <li>Publishing packages and web pageLorem Ipsum as their default</li>
            <li>Content here, content here', making it look like readable</li>
            <li>Packages and web pageLorem Ipsum as their default</li>
            <li>more-or-less normal distribution of letters</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Blogsingle;
