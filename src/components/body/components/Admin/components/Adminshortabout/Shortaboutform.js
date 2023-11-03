import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import ErrorModal from "../../../../UIElements/ErrorModal";
import LoadingSpinner from "../../../../UIElements/LoadingSpinner";

import { useHttpClient } from "../../../../hooks/http-hook";

const Shortaboutform = () => {
  const navigate = useNavigate();

  const [enteredShortTitle, setEnteredShortTitle] = useState("");
  const [enteredShortDescp, setEnteredShortDescp] = useState("");
  const [enteredShortImage, setEnteredShortImage] = useState("");

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const shorttitlechangehandler = (event) => {
    setEnteredShortTitle(event.target.value);
  };
  const shortdescpchangehandler = (event) => {
    setEnteredShortDescp(event.target.value);
  };
  const shortimagechangehandler = (event) => {
    setEnteredShortImage(event.target.value);
    // const selectedFile = event.target.files[0];
  // setEnteredShortImage(selectedFile);
  };

  const shortformhandler = async (event) => {
    event.preventDefault();

    // const shortaboutinfo = {
    //     shorttitle: enteredShortTitle,
    //     shortabout: enteredShortDescp,
    //     aboutimg: enteredShortImage
    // };

    // console.log(shortaboutinfo);
    // console.log(enteredShortImage);
    // console.log(enteredShortImage + 'this is the file inside the value');

    try {
      const formData = new FormData();
      formData.append("shorttitle", enteredShortTitle);
      formData.append("shortabout", enteredShortDescp);
      formData.append("aboutimg", enteredShortImage);
      await sendRequest(
        "http://localhost:5000/api/admin/shortaboutform",
        "POST",
        formData
      );

      // console.log(responseData);
      navigate("/admin/shortabouttable");
      console.log(enteredShortTitle);
      console.log(enteredShortDescp);
      console.log(enteredShortImage);
    } catch (err) {
      console.log(err);
      // setError(err.message || "Something went wrong, please try again!");
    }

    setEnteredShortTitle("");
    setEnteredShortDescp("");
    setEnteredShortImage("");
  };

  return (
    <React.Fragment>
      <ErrorModal
        error={error}
        onClear={clearError}
        style={{ height: "200px" }}
      />
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            {isLoading && <LoadingSpinner asOverlay />}
            <h6 className="m-0 font-weight-bold text-primary">
              About Section in front page
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={shortformhandler} encType="multipart/form-data" >
              <div className="mb-3">
                <label className="form-label">
                  Title For The About Section
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="shortabout"
                  aria-describedby="emailHelp"
                  value={enteredShortTitle}
                  onChange={shorttitlechangehandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Short Description</label>
                <textarea
                  className="form-control"
                  id="shortdescp"
                  rows="2"
                  value={enteredShortDescp}
                  onChange={shortdescpchangehandler}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Image for the Frontpage</label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  accept=".jpg,.png,.jpeg"
                  // value={enteredShortImage}
                  onChange={shortimagechangehandler} // Use onChange, not value
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shortaboutform;
