import React from 'react'

 export const Banner_two = (props) => {
  return (
    <>
      <div className="banner">
        <div className="bannername">
          <div className="btext">
            <img src={props.img} className="w-100" alt="Banner" />
            <div className="text-overlay">
              <p className="bannertext headingh2 ">{props.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner_two
