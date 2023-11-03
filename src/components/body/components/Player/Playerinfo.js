// 

import React from 'react';
import Player from './Player';

const Playerinfo = (props) => {
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
      {/* upper carousel */}
      <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: "90px" }}>
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Players in KHUKURI FC</h1>
          </div>
        </div>
      </div>

      {/* team */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Players Of KHUKURI FC
            </h5>
            <h1 className="mb-0">
              Here Are All The Players In The Club
            </h1>
          </div>
          <div className="row g-1 px-5">
            {props.items.map((player) => (
              <div key={player.pid} className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <Player
                  playername={player.playername}
                  playerposition={player.playerposition}
                  playerfblink={player.playerfblink}
                  playerinstalink={player.playerinstalink}
                  playerimg={player.playerimg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playerinfo;
