import React from "react";

export const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <div className="bannername">
          <div className="btext">
            <img src={props.img} className="w-100" alt="Banner" />
            <div className="text-overlay">
              <p className="bannertext bannetrshoph2 ">{props.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
