import React, { useState, useEffect } from "react";
// import Aboutfc from './components/About/Aboutfc';
// import aboutfclong from "../../../imgdemo/shortaboutimg.jpg";
// import aboutteamlong from "../../../imgdemo/team images.jpg";
import Aboutfcinfo from "../components/About/Aboutfcinfo";

import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";

import { useHttpClient } from "../hooks/http-hook";

// const AboutTeam = [
//   {
//     // aboutid: "a1",
//     aboutfclongtitle: "One Of The Best Team Representing Nepal",
//     aboutfclong:
//       "One Of The Best Team Representing Nepal and Most of the players are nepali so we are proud to represent our club as KHUKURI FC club. Our Club have amazing young players as well as some veteran players too. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium? ",
//     aboutfclongimg: aboutfclong,
//     aboutteamlongtitle: "Our Khukuri FC Team",
//     aboutteamlong:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium?",
//     aboutteamlongimg: aboutteamlong,
//   },
// ];

const Aboutus = () => {
  const [loadedLongfcabout, setLoadedLongfcabout] = useState();
  const [loadedLongteamabout, setLoadedteamfcabout] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/khukurifc/aboutus"
        );

        setLoadedLongfcabout(responseData.longfcabout);
        setLoadedteamfcabout(responseData.longteamabout);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal
        error={error}
        onClear={clearError}
        style={{ height: "200px" }}
      />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div>
        {!isLoading && loadedLongfcabout && loadedLongteamabout && (
          <Aboutfcinfo
            longfc={loadedLongfcabout}
            longteam={loadedLongteamabout}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Aboutus;
