import React from "react";
import { Link } from "react-router-dom";

const Landing2 = (props) => {
  return (
    <div>
      {/* <!-- About SHORT Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  About KHUKURI FC
                </h5>
                <h1 className="mb-0">{props.shorttitle}</h1>
              </div>
              <p className="mb-4">{props.shortabout}</p>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div className="ps-0">
                  <h3 className="mb-2">Discover What Makes Our Club Special</h3>
                </div>
              </div>
              <Link to="/aboutus">
                <div
                  className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  Click Here
                </div>
              </Link>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={props.aboutimg}
                  alt="aboutimg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
