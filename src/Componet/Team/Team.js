import React from "react";
import Temimg from "../Images/teamimg1.jpg";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { team } from "../Data/Data";

const Team = () => {
  return (
    <>
      

      <div className="team mypadding_top-bottom ">
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
              {team.map((teamitmes) => (
                <div className="col-lg-4 col-12">
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
    </>
  );
};

export default Team;
