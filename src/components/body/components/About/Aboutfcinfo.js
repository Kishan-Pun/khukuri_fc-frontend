import React from "react";
import Aboutfc from "./Aboutfc";
import Aboutteam from "./Aboutteam";

const Aboutfcinfo = (props) => {
  if (props.longfc.length === 0) {
    return (
      <div className="center">
        <h2>
          Team Khukuri FC is A Team full of hardworking players and young
          players with goal to win and enjoy Football to its fullest.!!!!!
        </h2>
      </div>
    );
  }
  if (props.longteam.length === 0) {
    return (
      <div className="center">
        <h2>
          Khukuri FC is mainly of Nepali Players respresenting Nepal and the Love for the country
          and also the passion for Football
        </h2>
      </div>
    );
  }


  console.log(props.items);
  return (
    <div>
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: "90px" }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">
              About KHUKURI FC
            </h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        {props.longfc.map((about) => (
          <Aboutfc
            key={about.id}
            longfcabouttitle={about.aboutfclongtitle}
            longfcabout={about.aboutfclong}
            aboutfcimg={about.aboutfclongimg}
          />
        ))}
        {props.longteam.map((about) => (
          <Aboutteam
            key={about.id}
            longteamabouttitle={about.aboutteamlongtitle}
            longteamabout={about.aboutteamlong}
            aboutteamimg={about.aboutteamlongimg}
          />
        ))}
      </div>
    </div>
  );
};

export default Aboutfcinfo;
