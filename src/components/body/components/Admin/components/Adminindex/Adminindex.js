import React from "react";
import { Link } from "react-router-dom";

const Adminindex = () => {
  return (
    <div>
      <div id="wrapper">
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="mt-5 mb-0 text-gray-800">Dashboard</h1>
              </div>

              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- Short About Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                <Link to='/admin/shortaboutform'>
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Short About Section
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-thin fa-address-card fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </Link>
                </div>

                {/* <!-- Long About Khukuri FC Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                <Link to='/admin/longfcaboutform'>
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Long About Khukuri FC
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-solid fa-futbol fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* <!-- Long About Team Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                <Link to='/admin/longteamaboutform'>
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Long About Team
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-solid fa-people-group fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* <!-- Contact Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                <Link to='/admin/contactsform'>
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                              Contact
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-solid fa-location-dot fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* <!-- News Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <Link to='/admin/newsform'>
                  
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              News
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-solid fa-newspaper fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                </div>

                {/* <!-- Player Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <Link to='/admin/playerform'>
                    <div className="card border-left-danger shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                              Player
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-solid fa-user fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                </div>

                {/* <!-- Coach Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <Link to='/admin/candmform'>
                    <div className="card border-left-danger shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                              Coach/Manager
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-solid fa-user-tie fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                </div>
              </div>

              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}
          </div>
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
    </div>
  );
};

export default Adminindex;
