import React from "react";
import Shortabouttable from "./Shortabouttable";

const Shortabouttableinfo = (props) => {
  return (
    <div>
      <div className="container-fluid bg-primary py-3 bg-header d-none d-sm-block d-md-block">
        <div className="row py-5"></div>
      </div>

      <div className="container-fluid mt-3">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Short About Table
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Short Title</th>
                    <th>Short Description</th>
                    <th>About Image</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {props.items.map((about) => (
                    <Shortabouttable
                      key={about.id}
                      id={about.id}
                      shortabout={about.shortabout}
                      shorttitle={about.shorttitle}
                      aboutimg={about.aboutimg}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {props.items.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h1>No data found</h1>
        </div>
      )}
    </div>
  );
};

export default Shortabouttableinfo;
