import React, { useState, useEffect } from "react";
import Contactquerytableinfo from "../../components/Table/Contactquerytable/Contactquerytableinfo";


import LoadingSpinner from "../../../../UIElements/LoadingSpinner";
import ErrorModal from "../../../../UIElements/ErrorModal";

import { useHttpClient } from "../../../../hooks/http-hook";

// const Contactquery = [
//   {
//     cqid: "cq",
//     name: "Kishan Pun",
//     email: "xyz@gmail.com",
//     phone: "+977 980746897",
//     subject: "to join fc club",
//     message:
//       "I like to join the fc club i'm good at attacking mid also center forward",
//   },
// ];

const Contactquerytable = () => {
  const [loadedContactquery, setLoadedContactquery] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/admin/contactquerytable"
        );

        setLoadedContactquery(responseData.contactquery);
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
        {!isLoading && loadedContactquery && (
          <Contactquerytableinfo items={loadedContactquery} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Contactquerytable;
