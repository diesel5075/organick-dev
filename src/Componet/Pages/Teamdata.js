import React, { useEffect } from 'react'
import { Banner } from '../Banner/Banner'
import bannerteamdata from "../Images/teambanner.jpg";
import {teamdata} from "../Data/Data";
import { FaFacebook, FaTwitter } from 'react-icons/fa6';

const Teamdata = () => {
  const  scrolltop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    scrolltop();
  },[])
  return (
    <div>
      <Banner img={bannerteamdata} name={"Our Team"}/>
      <div className="team  ">
        <div className="container">
          <div className="tram_info text-center">
            <h4 className="First_text_p ">Team</h4>
            <h2 className="headingh2">Our Organic Experts</h2>
            <p className="">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="mainitems">
            <div className="row">
              {teamdata.map((teamitmes) => (
                <div className="col-4 mb-5">
                  <div className="img">
                    <img src={teamitmes.teamimage} />
                    <div className="teamright">
                      <div className="reamright">
                        <h5 className="h5text">{teamitmes.teamname}</h5>
                        <p className="smallp">{teamitmes.teamtech}</p>
                      </div>
                      <div className="rteamleft">
                        <FaFacebook className="me-3" />
                        <FaTwitter />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teamdata
