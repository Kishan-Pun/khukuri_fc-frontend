import React, {useState, useEffect} from 'react';
import Newstableinfo from '../../components/Table/Newstable/Newstableinfo';
// import img from "../../../../../../imgdemo/shortaboutimg.jpg";

import LoadingSpinner from "../../../../UIElements/LoadingSpinner";
import ErrorModal from "../../../../UIElements/ErrorModal";

import { useHttpClient } from "../../../../hooks/http-hook";

// const News = [
//     {
//       nid: "n1",
//       img: img,
//       title: "Khukuri fc Champions",
//       newsdetail:
//         "Sujan Scored 3 goals and won the game",
//       publisher: "Kishan1",
//       date: "01 Jan, 2046",
//     },
//     {
//       nid: "n2",
//       img: img,
//       title: "Khukuri fc Champions",
//       newsdetail:
//         "Sujan kicked a volley",
//       publisher: "Kishan2",
//       date: "01 Jan, 2046",
//     },
//     {
//       nid: "n3",
//       img: img,
//       title: "Khukuri fc Champions",
//       newsdetail:
//         "Khukuri FC Won the champions league in the finals and now moving towards laliga",
//       publisher: "Kishan3",
//       date: "01 Jan, 2046",
//     },
//   ];

const Newstable = () => {
  const [loadedNews, setLoadedNews] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/admin/newstable"
        );

        setLoadedNews(responseData.news);
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
        {!isLoading && loadedNews && (
          <Newstableinfo items={loadedNews} />
        )}
            
        </div>
        </React.Fragment>
    )
};

export default Newstable;