import React from "react";
import { circle } from "../Data/Data";

export const Circle = () => {
  return (
    <>
      <div className="circle">
        <div className="container">
          <div className="row">
            {circle.map((circle_item) => (
              <div className="col-lg-3 col-md-3 "data-aos="zoom-in">
                <div className="circle_main">
                  <h5 className="roboto-bold">{circle_item.per}</h5>
                  <p>{circle_item.testi_name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
