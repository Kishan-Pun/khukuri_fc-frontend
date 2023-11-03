import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../imgdemo/khukurilogo.png";

import "../css/style.css";


const Footer = (props) => {
  

  return (
    
      <div>
        {/* <!-- Footer Start --> */}
        <div
          className="container-fluid text-light mt-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ backgroundColor: "#0f3772" }}
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-6 footer-about">
                <div className="d-flex flex-column align-items-center justify-content-center text-center h-75 bg-primary p-4">
                  <Link to="/">
                    <div className="navbar-brand">
                      <h1 className="m-0 text-white">
                        <img
                          src={logo}
                          alt="logo"
                          style={{
                            display: "inline-block",
                            verticalAlign: "middle",
                            marginRight: "10px",
                            width: "auto",
                            height: "150px",
                          }}
                        />
                      </h1>
                    </div>
                  </Link>

                  <h1 className="mt-3 mb-4 text-white">Khukuri FC</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="row gx-5">
                  <div className="col-lg-6 col-md-12 pt-5 mb-5">
                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 className="text-light mb-0">Get In Touch</h3>
                    </div>
                    <div className="d-flex mb-2">
                      <i className="bi bi-geo-alt text-primary me-2"></i>
                      <p className="mb-0">
                        {props.address}
                      </p>
                    </div>
                    <div className="d-flex mb-2">
                      <i className="bi bi-envelope-open text-primary me-2"></i>
                      <p className="mb-0">
                        {props.email}
                      </p>
                    </div>
                    <div className="d-flex mb-2">
                      <i className="bi bi-telephone text-primary me-2"></i>
                      <p className="mb-0">
                        {props.phnum}
                      </p>
                    </div>

                    {/* <div className="d-flex mt-4">
                    <Link to="#">
                      <button className="btn btn-primary btn-square me-2">
                        <i className="fab fa-twitter fw-normal"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button className="btn btn-primary btn-square me-2">
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button className="btn btn-primary btn-square me-2">
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button className="btn btn-primary btn-square me-2">
                        <i className="fab fa-instagram fw-normal"></i>
                      </button>
                    </Link>
                  </div> */}
                  </div>
                  <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 className="text-light mb-0">Quick Links</h3>
                    </div>
                    <div className="link-animated d-flex flex-column justify-content-start">
                      <NavLink
                        to="/"
                        className="nav-item nav-link"
                        style={{
                          color: "white",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                        // activeClassName="active"
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        Home
                      </NavLink>
                      <NavLink
                        to="/aboutus"
                        className="nav-item nav-link"
                        style={{
                          color: "white",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                        // activeClassName="active"
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        About
                      </NavLink>
                      <NavLink
                        to="/players"
                        className="nav-item nav-link"
                        style={{
                          color: "white",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                        // activeClassName="active"
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        Player Info
                      </NavLink>
                      <NavLink
                        to="/contact"
                        className="nav-item nav-link"
                        style={{
                          color: "white",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                        // activeClassName="active"
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        Contact
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid text-white"
          style={{ background: "rgba(9, 30, 62, 1)" }}
        >
          <div className="container text-center">
            <div className="row justify-content-end">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: "75px" }}
                >
                  <p className="mb-0">
                    &copy;
                    <Link
                      to="../body/index"
                      className="text-white border-bottom"
                    >
                      KHUKURI FC
                    </Link>
                    . All Rights Reserved. Designed by
                    <Link
                      to="https://htmlcodex.com"
                      className="text-white border-bottom"
                    >
                      {``} HTML Codex
                    </Link>
                    {``} Distributed By: {``}
                    <Link to="https://themewagon.com" className="border-bottom">
                      ThemeWagon
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End --> */}

        {/* <!-- Back to Top --> */}
        {/* <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a> */}
      </div>
    
  );
};

export default Footer;
