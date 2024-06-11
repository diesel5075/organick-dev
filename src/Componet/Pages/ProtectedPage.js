import React, { useEffect } from "react";
import Banner_two from "../Banner_two/Banner_two";
import bannerimgtwo from "../Images/bannertoo.png";
import secimgprotect from "../Images/protect.jpg";
import Button from "../Button/Button";
import "../Pages/protectedpage.css";

const ProtectedPage = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <>
      <Banner_two img={bannerimgtwo} name={"Protected Page"} />
      <div className="container">
         <div className="mainprotect ">
        <div className="row align-items-center">
        <div className="col-3">
            <div className="rightimgprotect m-3">
              <img src={secimgprotect} alt="" />
            </div>
            </div>
            <div className="col-9">
              <div className="leftprotect">
                <div >
                  <label for="exampleInputPassword1" className="form-label font18">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mb-5 myinput"
                    placeholder="Enter Your Password"
                    id="exampleInputPassword1"
                  />
                  <Button name={"Send Now"} />
                </div>
              </div>
            </div>
         </div>
          </div>
        </div>
    </>
  );
};

export default ProtectedPage;
