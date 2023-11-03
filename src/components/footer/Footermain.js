import React, { useState, useEffect} from 'react';
import Footerinfo from './Footerinfo';

import LoadingSpinner from "../body/UIElements/LoadingSpinner";
import ErrorModal from "../body/UIElements/ErrorModal";

import { useHttpClient } from "../body/hooks/http-hook";

const Footermain = () => {
    const [loadedFooter, setLoadedFooter] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/admin/contactstable"
        );

        setLoadedFooter(responseData.contact);
        // setLoadedNews(responseData.news);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);
    return(
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
        {!isLoading && loadedFooter && <Footerinfo items={loadedFooter} />}
            
        </div>
        </React.Fragment>
    )
};

export default Footermain