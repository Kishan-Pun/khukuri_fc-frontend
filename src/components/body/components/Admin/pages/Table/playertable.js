import React, { useState, useEffect } from "react";

// import playerimg1 from "../../../../../../imgdemo/kishan.jpg";
// import playerimg2 from "../../../../../../imgdemo/dipesh.jpg";
// import playerimg3 from "../../../../../../imgdemo/sujan.jpg";
import Playertableinfo from "../../components/Table/Playertable/Playertableinfo";

import LoadingSpinner from "../../../../UIElements/LoadingSpinner";
import ErrorModal from "../../../../UIElements/ErrorModal";

import { useHttpClient } from "../../../../hooks/http-hook";

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
//     playername: "Kishan Pun",
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

const Playertable = () => {
  const [loadedPlayer, setLoadedPlayer] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/admin/playertable"
        );

        setLoadedPlayer(responseData.player);
        // setLoadedNews(responseData.news);
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
        {!isLoading && loadedPlayer && <Playertableinfo items={loadedPlayer} />}
      </div>
    </React.Fragment>
  );
};

export default Playertable;
