import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import ErrorModal from "../../../../UIElements/ErrorModal";
import LoadingSpinner from "../../../../UIElements/LoadingSpinner";

import { useHttpClient } from "../../../../hooks/http-hook";

const Contactsform = () => {
  const navigate = useNavigate();

  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredSrc, setEnteredSrc] = useState("");

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const locationchangehandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const emailchangehandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phonechangehandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const srcchangehandler = (event) => {
    setEnteredSrc(event.target.value);
  };

  const contactformhandler = async (event) => {
    event.preventDefault();

    // const contactforminfo = {
    //     phnum: enteredPhone,
    //     email: enteredEmail,
    //     address: enteredLocation,
    //     srcformap: enteredSrc
    // }

    // console.log(contactforminfo);

    try {
      await sendRequest(
        "http://localhost:5000/api/admin/contactsform",
        "POST",
        JSON.stringify({
          phnum: enteredPhone,
          email: enteredEmail,
          address: enteredLocation,
          srcformap: enteredSrc,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      navigate("/admin/contactstable");
    } catch (err) {
      console.log(err);
    }

    setEnteredEmail("");
    setEnteredLocation("");
    setEnteredPhone("");
    setEnteredSrc("");
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
            <h6 className="m-0 font-weight-bold text-primary">Contact Info</h6>
          </div>
          <div className="card-body">
            <form onSubmit={contactformhandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Location Of The Club
                </label>
                <input
                  type="Text"
                  className="form-control"
                  id="email"
                  placeholder="New York, Street 123, town"
                  aria-describedby="emailHelp"
                  value={enteredLocation}
                  onChange={locationchangehandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Your Email For Contact
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={enteredEmail}
                  onChange={emailchangehandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  You Phone/Tel Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  placeholder="+356 2163 6734"
                  aria-describedby="emailHelp"
                  value={enteredPhone}
                  onChange={phonechangehandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter Your location on map ( By going inside google maps
                  searching your homestay location and then click share in the
                  share you will see embed in map in there only copy what is inside src="" then
                  paste here after copying only the "inside of src")
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  aria-describedby="emailHelp"
                  value={enteredSrc}
                  onChange={srcchangehandler}
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

export default Contactsform;
