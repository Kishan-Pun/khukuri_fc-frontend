import React from "react";

import ErrorModal from "../../../../../UIElements/ErrorModal";
import LoadingSpinner from "../../../../../UIElements/LoadingSpinner";

import { useHttpClient } from "../../../../../hooks/http-hook";

const Longteamabouttable = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const deleteHandler = async () => {
    console.log("Deleting");

    try {
      // Define the data to be sent in the request body
      const data = {
        _id: props.id, // The ID of the data you want to delete
      };

      // console.log(data);

      // Send a DELETE request with the data in the request body
      const responseData = await sendRequest(
        "http://localhost:5000/api/admin/longteamabouttable",
        "DELETE",
        JSON.stringify(data), // Convert data to JSON string
        {
          "Content-Type": "application/json", // Set the content type
        }
      );
      // console.log(props.id);
      console.log(responseData);

      // After successfully deleting the data, you can update the UI or perform any other actions as required.
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal
        error={error}
        onClear={clearError}
        style={{ height: "200px" }}
      />
      {isLoading && <LoadingSpinner className="center" />}
      <tr>
        <td> {props.longteamabouttitle} </td>
        <td>{props.longteamabout}</td>
        <td>
          <img
            src={props.aboutteamimg}
            alt="aboutfcimg"
            style={{ height: "auto", width: "80px" }}
          />
        </td>

        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Longteamabouttable;
