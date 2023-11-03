import React from "react";
import CandMtable from "./CandMtable";

const CandMtableinfo = (props) => {
  // if (props.items.length === 0) {
  //   return (
  //     <div>
  //       <div className="container-fluid bg-primary py-3 bg-header d-none d-sm-block d-md-block">
  //       <div className="row py-5"></div>
  //     </div>
  //     <div className="container-fluid mt-3">
  //       <h1 className="h3 mb-2 text-gray-800">Coach and Mangaer Table</h1>
  //       <h1>No data found </h1>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="container-fluid bg-primary py-3 bg-header d-none d-sm-block d-md-block">
        <div className="row py-5"></div>
      </div>
      <div className="container-fluid mt-3">
        <h1 className="h3 mb-2 text-gray-800">Coach and Mangaer Table</h1>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Contact and Managers Table
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Person Name</th>
                    <th>Person Position</th>
                    <th>Person FB Link</th>
                    <th>Person Insta Link</th>
                    <th>Person Image</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                  {props.items.map((candm) => (
                    <CandMtable
                      key={candm.id}
                      id={candm.id}
                      CandMname={candm.CandMname}
                      CandMposition={candm.CandMposition}
                      CandMfblink={candm.CandMfblink}
                      CandMinstalink={candm.CandMinstalink}
                      CandMimg={candm.CandMimg}
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

export default CandMtableinfo;
