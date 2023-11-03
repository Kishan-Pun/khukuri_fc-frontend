import React, { useEffect, useState } from "react";
import Landing from "../components/Landing1/Landing1";
import Landing3info from "../components/Landing3/Landing3info";
import Landing2info from "../components/Landing2/Landing2info";

import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";

import { useHttpClient } from "../hooks/http-hook";

// // const News = [
// //     {
// //       nid: "n1",
// //       img: img,
// //       title: "Khukuri fc Champions",
// //       newsdetail:
// //         "Sujan Scored 3 goals and won the game",
// //       publisher: "Kishan1",
// //       date: "01 Jan, 2046",
// //     },
// //     {
// //       nid: "n2",
// //       img: img,
// //       title: "Khukuri fc Champions",
// //       newsdetail:
// //         "Sujan kicked a volley",
// //       publisher: "Kishan2",
// //       date: "01 Jan, 2046",
// //     },
// //     {
// //       nid: "n3",
// //       img: img,
// //       title: "Khukuri fc Champions",
// //       newsdetail:
// //         "Khukuri FC Won the champions league in the finals and now moving towards laliga",
// //       publisher: "Kishan3",
// //       date: "01 Jan, 2046",
// //     },
// //   ];

// //   const About = [
// //     {
// //       shorttitle: "One Of The Best Team Representing Nepal",
// //       shortabout:
// //         "One Of The Best Team Representing Nepal and Most of the players are nepali so we are proud to represent our club as KHUKURI FC club. Our Club have amazing young players as well as some veteran players too.",
// //       aboutimg: aboutimg,
// //     },
// //   ];

const Index = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  const [loadedShortabout, setLoadedShortabout] = useState();
  const [loadedNews, setLoadedNews] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/khukurifc"
        );

        setLoadedShortabout(responseData.shortabout);
        setLoadedNews(responseData.news);
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
        <Landing />
        {!isLoading && loadedShortabout && (
          <Landing2info items={loadedShortabout} />
        )}
        {!isLoading && loadedNews && <Landing3info items={loadedNews} />}
      </div>
    </React.Fragment>
  );
};

export default Index;
