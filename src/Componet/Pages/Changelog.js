import React, { useEffect } from 'react'
import Banner_two from '../Banner_two/Banner_two'
import bannerimgtwo from "../Images/bannertoo.png";
import changelogo from "../Images/changelogo.png"
import "../Pages/Changelog.css";

const Changelog = () => {
    const  scrolltop = ()=>{
        window.scrollTo(0,0);
      }
      useEffect(()=>{
        scrolltop();
      },[])
  return (
    <>
      <Banner_two img={bannerimgtwo} name={"Changelog"} />
     
     <div className="changelog">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mainchange">
                        <div className="logo">
                            <img src={changelogo} />
                        </div>
                        <div className="changetext">
                            <h2 className='ms-5 font40 m-0'>V.1</h2>
                            <p className='font400 ms-2 m-0'>Initial Organick Webflow Template Release</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Changelog
