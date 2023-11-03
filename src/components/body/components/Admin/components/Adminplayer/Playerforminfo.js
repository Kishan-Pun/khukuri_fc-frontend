import React from "react";
import Playerform from "./Playerform";

const Playerforminfo = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-3 bg-header d-none d-sm-block d-md-block  ">
        <div className="row py-5"></div>
      </div>
      <div className="container-fluid mt-3">
        <Playerform />
      </div>
    </div>
  );
};

export default Playerforminfo;
