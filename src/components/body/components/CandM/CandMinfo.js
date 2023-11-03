import React from 'react';
import CandM from './CandM';

const CandMinfo = (props) => {
     // Check if there are items in the props.items array
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>Team Members are yet to show on this page!!!!</h2>
      </div>
    );
  }

  return (
    <div>

      {/* team */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
             <h5 className="fw-bold text-primary text-uppercase">
              Coach And Manager Of KHUKURI FC
            </h5>
            <h1 className="mb-0">
              Here Are All The Coach And Managers In The Club
            </h1>
          </div>
          <div className="row g-1 px-5">
            {props.items.map((candm) => (
              <div key={candm.id} className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <CandM
                  CandMname={candm.CandMname}
                  CandMposition={candm.CandMposition}
                  CandMfblink={candm.CandMfblink}
                  CandMinstalink={candm.CandMinstalink}
                  CandMimg={candm.CandMimg}
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandMinfo;