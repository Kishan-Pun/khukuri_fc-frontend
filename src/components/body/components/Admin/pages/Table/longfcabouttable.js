import React, { useState, useEffect } from "react";
import Longfcabouttableinfo from "../../components/Table/Longfcabouttable/Longfcabouttableinfo";
// import aboutfclong from "../../../../../../imgdemo/shortaboutimg.jpg";

import LoadingSpinner from "../../../../UIElements/LoadingSpinner";
import ErrorModal from "../../../../UIElements/ErrorModal";

import { useHttpClient } from "../../../../hooks/http-hook";

// const AboutTeam = [
//   {
//     aboutfclongtitle: "One Of The Best Team Representing Nepal",
//     aboutfclong:
//       "One Of The Best Team Representing Nepal and Most of the players are nepali so we are proud to represent our club as KHUKURI FC club. Our Club have amazing young players as well as some veteran players too. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium? ",
//     aboutfclongimg: aboutfclong,
//   },
// ];

const Longfcabouttable = () => {
  const [loadedLongfcabout, setLoadedLongfcabout] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/admin/longfcabouttable"
        );

        setLoadedLongfcabout(responseData.longfcabout);
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
        {!isLoading && loadedLongfcabout && (
          <Longfcabouttableinfo items={loadedLongfcabout} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Longfcabouttable;
