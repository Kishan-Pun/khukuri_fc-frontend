import React from "react";
import Contactquerytable from "./Contactquerytable";

const Contactquerytableinfo = (props) => {
  return (
    <div>
      <div className="container-fluid bg-primary py-3 bg-header d-none d-sm-block d-md-block">
        <div className="row py-5"></div>
      </div>
      <div className="container-fluid mt-3">
        <h1 className="h3 mb-2 text-gray-800">
          Questions came for our Khukuri FC
        </h1>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Questions Table
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                  {props.items.map((cq) => (
                    <Contactquerytable
                      key={cq.id}
                      id={cq.id}
                      name={cq.name}
                      email={cq.email}
                      phone={cq.phone}
                      subject={cq.subject}
                      message={cq.message}
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

export default Contactquerytableinfo;
