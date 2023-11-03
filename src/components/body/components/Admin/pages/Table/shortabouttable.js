import React,{ useState, useEffect} from "react";
import Shortabouttableinfo from "../../components/Table/Shortabouttable/Shortabouttableinfo";
// import aboutimg from "../../../../../../imgdemo/shortaboutimg.jpg";

import LoadingSpinner from "../../../../UIElements/LoadingSpinner";
import ErrorModal from "../../../../UIElements/ErrorModal";

import { useHttpClient } from "../../../../hooks/http-hook";

// const About = [
//   {
//     shorttitle: "One Of The Best Team Representing Nepal",
//     shortabout:
//       "One Of The Best Team Representing Nepal and Most of the players are nepali so we are proud to represent our club as KHUKURI FC club. Our Club have amazing young players as well as some veteran players too.",
//     aboutimg: aboutimg,
//   },
// ];

const Shortabouttable = () => {

  const [loadedShortabout, setLoadedShortabout] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest("http://localhost:5000/api/admin/shortabouttable");
        

        setLoadedShortabout(responseData.shortabout);
        // setLoadedNews(responseData.news);
      } catch (err) {

      }
    };
    fetchData();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} style={{ height: "200px" }} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
    <div>
    {!isLoading && loadedShortabout && <Shortabouttableinfo items={loadedShortabout} />}
      
    </div>
    </React.Fragment>
  );
};

export default Shortabouttable;
