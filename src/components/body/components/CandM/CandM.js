import React from "react";
import { Link } from "react-router-dom";

const CandM = (props) => {
  return (
    <div className="mb-5 mx-4">
      <div className="team-item bg-light rounded overflow-hidden">
        <div className="team-img position-relative overflow-hidden" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <img
            className="img-fluid" // Remove any width and height classes
            src={props.CandMimg}
            alt="candmimg"
            style={{ height: "350px" }}
          />
          <div className="team-social">
            <Link
              to={props.CandMfblink}
              className="btn btn-primary btn-lg rounded-circle"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to={props.CandMinstalink}
              className="btn btn-primary btn-lg rounded-circle"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
        <div className="text-center py-3">
          <h4 className="text-primary"> {props.CandMname} </h4>
          <h5 className="text-primary">Position: {props.CandMposition}</h5>
        </div>
      </div>
    </div>
  );
};

export default CandM;
