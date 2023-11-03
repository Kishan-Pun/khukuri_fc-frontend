import React from "react";
// import { Link } from "react-router-dom";

const Aboutteam = (props) => {
  return (
    <div>
      {/* <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: "90px" }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">
              About KHUKURI FC
            </h1>
          </div>
        </div>
      </div> */}

      {/* about us start */}

      {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s"> */}
        {/* first upper */}
        {/* <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  About KHUKURI FC
                </h5>
                <h1 className="mb-0"> {props.longfcabouttitle} </h1>
              </div>
              <p className="mb-4">
                {props.longfcabout}
              </p>
            </div>
            <div className="col-lg-5" style={{minHeight: "500px"}}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={props.aboutfcimg}
                  style={{objectFit: "cover"}}
                  alt="altimg"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* second lower     */}
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5" style={{minHeight: "500px"}}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={props.aboutteamimg}
                  style={{objecFtit: "cover"}}
                  alt="aboutimg"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                
                <h1 className="mb-0"> {props.longteamabouttitle} </h1>
              </div>
              <p className="mb-4">
                {props.longteamabout}
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}

            {/* about us end */}
      
    </div>
  );
};

export default Aboutteam;
