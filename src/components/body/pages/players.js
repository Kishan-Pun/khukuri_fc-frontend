import React, { useState, useEffect } from "react";
// import Player from './components/Player/Player';
import Playerinfo from "../components/Player/Playerinfo";
// import playerimg1 from "../../../imgdemo/kishan.jpg";
// import playerimg2 from "../../../imgdemo/dipesh.jpg";
// import playerimg3 from "../../../imgdemo/sujan.jpg";
import CandMinfo from "../components/CandM/CandMinfo";

import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";

import { useHttpClient } from "../hooks/http-hook";

// const Players = [
//   {
//     playerid: "p1",
//     playername: "Kishan Pun",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: playerimg1,
//   },
//   {
//     playerid: "p2",
//     playername: "Dipesh Baral",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: playerimg2,
//   },
//   {
//     playerid: "p3",
//     playername: "Sujan Budhathoki",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: playerimg3,
//   },
//   {
//     playerid: "p4",
//     playername: "Shishir Thapa",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: playerimg1,
//   },
//   {
//     playerid: "p5",
//     playername: "Dipesh Baral 2",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: playerimg2,
//   },
// ];

// const CandM = [
//   {
//     CandMid: "cm1",
//     CandMname: "Kishan Pun",
//     CandMposition: "Coach",
//     CandMfblink: "https://www.facebook.com/magardipesh.baral",
//     CandMinstalink: "https://www.instagram.com/dipeshb.magar/",
//     CandMimg: playerimg1,
//   },
//   {
//     CandMid: "cm2",
//     CandMname: "Sujan Budhathoki",
//     CandMposition: "Manager",
//     CandMfblink: "https://www.facebook.com/magardipesh.baral",
//     CandMinstalink: "https://www.instagram.com/dipeshb.magar/",
//     CandMimg: playerimg3,
//   },
//   {
//     CandMid: "cm3",
//     CandMname: "Dipesh Baral",
//     CandMposition: "Manager",
//     CandMfblink: "https://www.facebook.com/magardipesh.baral",
//     CandMinstalink: "https://www.instagram.com/dipeshb.magar/",
//     CandMimg: playerimg1,
//   },
// ];

const Players = () => {
  const [loadedPlayer, setLoadedPlayer] = useState();
  const [loadedCandM, setLoadedCandM] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/khukurifc/players"
        );

        setLoadedPlayer(responseData.player);
        setLoadedCandM(responseData.candm);
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
        {!isLoading && loadedPlayer && <Playerinfo items={loadedPlayer} />}
        {!isLoading && loadedCandM && <CandMinfo items={loadedCandM} />}
      </div>
    </React.Fragment>
  );
};

export default Players;
