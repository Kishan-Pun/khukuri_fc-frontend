import React from "react";
import CandMform from "./CandMform";

const CandMforminfo = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-3 bg-header d-none d-sm-block d-md-block  ">
        <div className="row py-5"></div>
      </div>
      <div className="container-fluid mt-3">
        <CandMform />
      </div>
    </div>
  );
};

export default CandMforminfo;
