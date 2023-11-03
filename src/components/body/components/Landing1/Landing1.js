import React from "react";
import { Link } from "react-router-dom";
import khukurifcbg from "../../../../imgdemo/khukuri fc bg.jpg";
import team from "../../../../imgdemo/team images.jpg";

const Landing = () => {
  return (
    <div>
      {/* <!-- Carousel Start --> */}

      <div className="container-fluid position-relative p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={khukurifcbg} alt="ThisImage" style={{height: "900px",}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    About the Club
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Learn More About Our Club
                  </h1>
                  <Link to="/aboutus">
                    <button className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                      About the Club
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={team} alt="ThisImage" style={{height: "900px",}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    About Our Players
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Check Our Players In The Club
                  </h1>
                  <Link to="/players">
                    <button className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                      Players of our Club
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-1.jpg" alt="ThisImage" style={{height: "900px",}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Inquiry about Club
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Inquiry about KHUKURI Club
                  </h1>
                  <Link to="/contact">
                    <button className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </div>
  );
};

export default Landing;
