import React, { useState, useEffect } from "react";
import Longteamabouttableinfo from "../../components/Table/Loongteamabouttable/Longteamabouttableinfo";
// import aboutteamlong from "../../../../../../imgdemo/team images.jpg";

import LoadingSpinner from "../../../../UIElements/LoadingSpinner";
import ErrorModal from "../../../../UIElements/ErrorModal";

import { useHttpClient } from "../../../../hooks/http-hook";

// const AboutTeam = [
//   {
//     aboutteamlongtitle: "Our Khukuri FC Team",
//     aboutteamlong:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium?",
//     aboutteamlongimg: aboutteamlong,
//   },
// ];

const Longteamabouttable = () => {
  const [loadedLongteamabout, setLoadedLongteamabout] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/admin/longteamabouttable"
        );

        setLoadedLongteamabout(responseData.longteamabout);
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
        {!isLoading && loadedLongteamabout && (
          <Longteamabouttableinfo items={loadedLongteamabout} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Longteamabouttable;
