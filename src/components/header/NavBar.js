import React, { useContext } from "react";
// import { NavLink, useLocation  } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
// // import './NavBar.css'
// import useStickyNavbar from '../CustomHooks/useStickyNavbar';
import { AuthContext } from "../body/components/context/auth-context";
import khukurilogo from "../../imgdemo/khukurilogo.png";

import "../css/style.css";

const NavBar = () => {
  // const isSticky = useStickyNavbar();

  const auth = useContext(AuthContext);

  // const location = useLocation();
  // Function to check if the current location matches a pattern
  // const isLocationMatching = (pattern) => {
  //   return location.pathname.includes(pattern);
  // };

  return (
    <div className="container-fluid position-relative p-0">
      {/* <nav className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${isSticky ? 'sticky-navbar' : ''}`}> */}
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <NavLink className="navbar-brand p-0 " to="/">
          <h1 className="m-0">
            {" "}
            <img
              src={khukurilogo}
              alt="Logo"
              className="logo"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: "10px",
                width: "auto",
                height: "120px",
              }}
            />{" "}
            {/* KHUKURI FC */}
          </h1>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink
              to="/"
              className="nav-item nav-link"
              // activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="nav-item nav-link"
              // activeClassName="active"
            >
              About
            </NavLink>
            <NavLink
              to="/players"
              className="nav-item nav-link"
              // activeClassName="active"
            >
              Player Info
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-item nav-link"
              // activeClassName="active"
            >
              Contact
            </NavLink>

            {auth.isLoggedin && (
              <NavLink to="/admin" className="nav-item nav-link">
              Dashboard
            </NavLink>
            )} 
            

            {/* Dropdown NavLink for "Pages" */}
            {auth.isLoggedin && (
            <li className="nav-item nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Adding Pages
              </Link>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                <NavLink to="/admin/shortaboutform" className="dropdown-item">
                  Short About
                </NavLink>
                <NavLink to="/admin/longfcaboutform" className="dropdown-item">
                  Long FC About
                </NavLink>
                <NavLink
                  to="/admin/longteamaboutform"
                  className="dropdown-item"
                >
                  Long Team About
                </NavLink>
                <NavLink to="/admin/contactsform" className="dropdown-item">
                  Contact
                </NavLink>
                <NavLink to="/admin/newsform" className="dropdown-item">
                  News
                </NavLink>
                <NavLink to="/admin/playerform" className="dropdown-item">
                  Players
                </NavLink>
                <NavLink to="/admin/candmform" className="dropdown-item">
                  Coach/Manager
                </NavLink>
              </div>
            </li>
            )}

            {/* Dropdown NavLink for "Tables" */}
            {auth.isLoggedin && (
            <li className="nav-item nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Table
              </Link>

              <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                <NavLink to="/admin/shortabouttable" className="dropdown-item">
                  Short About Table
                </NavLink>
                <NavLink to="/admin/longfcabouttable" className="dropdown-item">
                  Long FC About Table
                </NavLink>
                <NavLink to="/admin/longteamabouttable" className="dropdown-item">
                  Long Team About Table
                </NavLink>
                <NavLink to="/admin/contactstable" className="dropdown-item">
                  Contact Table
                </NavLink>
                <NavLink to="/admin/newstable" className="dropdown-item">
                  News Table
                </NavLink>
                <NavLink to="/admin/playertable" className="dropdown-item">
                  Players Table
                </NavLink>
                <NavLink to="/admin/candmtable" className="dropdown-item">
                  Coach/Manager Table
                </NavLink>
                <NavLink to="/admin/contactquerytable" className="dropdown-item">
                  Questions Table
                </NavLink>
              </div>
            </li>
            )}

            {auth.isLoggedin && (
            <NavLink to="/admin/login">
              <div
                className="btn btn-primary py-2 px-4 ms-3 mt-4"
                onClick={auth.logout}
              >
                {" "}
                Logout
              </div>
            </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
