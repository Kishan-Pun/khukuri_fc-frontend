import React,{ useEffect, useState } from "react";

// import playerimg1 from "../../../../../../imgdemo/kishan.jpg";
// import playerimg2 from "../../../../../../imgdemo/sujan.jpg";
// import playerimg3 from "../../../../../../imgdemo/dipesh.jpg";
import CandMtableinfo from "../../components/Table/CandMtable/CandMtableinfo";

import LoadingSpinner from "../../../../UIElements/LoadingSpinner";
import ErrorModal from "../../../../UIElements/ErrorModal";

import { useHttpClient } from "../../../../hooks/http-hook";

// const CandM = [
//     {
//         CandMid: "cm1",
//         CandMname: "Kishan Pun",
//         CandMposition: "Coach",
//         CandMfblink: 'https://www.facebook.com/magardipesh.baral',
//         CandMinstalink: 'https://www.instagram.com/dipeshb.magar/',
//         CandMimg: playerimg1,
//     },
//     {
//         CandMid: "cm2",
//         CandMname: "Sujan Budhathoki",
//         CandMposition: "Manager",
//         CandMfblink: 'https://www.facebook.com/magardipesh.baral',
//         CandMinstalink: 'https://www.instagram.com/dipeshb.magar/',
//         CandMimg: playerimg3,
//     },
//     {
//         CandMid: "cm3",
//         CandMname: "Dipesh Baral",
//         CandMposition: "Manager",
//         CandMfblink: 'https://www.facebook.com/magardipesh.baral',
//         CandMinstalink: 'https://www.instagram.com/dipeshb.magar/',
//         CandMimg: playerimg2,
//     },
// ];

const Candmtable = () => {
  const [loadedCandM, setLoadedCandM] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/admin/candmtable"
        );

        setLoadedCandM(responseData.candm);
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
      {!isLoading && loadedCandM && <CandMtableinfo items={loadedCandM} />}
        
      </div>
    </React.Fragment>
  );
};

export default Candmtable;
