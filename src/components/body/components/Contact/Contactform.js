import React, { useState } from "react";

import ErrorModal from "../../UIElements/ErrorModal";
import LoadingSpinner from "../../UIElements/LoadingSpinner";

import { useHttpClient } from "../../hooks/http-hook";

const Contactform = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enterdPhone, setEnteredPhone] = useState("");

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const queryhandler = async (event) => {
    event.preventDefault();

    // const contactforminfo = {
    //   name: enteredName,
    //   email: enteredEmail,
    //   phone: enterdPhone,
    //   subject: enteredSubject,
    //   message: enteredMessage,
    // };

    // console.log(contactforminfo);

    console.log(JSON.stringify({
      name: enteredName,
      email: enteredEmail,
      phone: enterdPhone,
      subject: enteredSubject,
      message: enteredMessage,
    }));

    try {
      await sendRequest(
        "http://localhost:5000/api/khukurifc/contact",
        "POST",
        JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          phone: enterdPhone,
          subject: enteredSubject,
          message: enteredMessage,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      // navigate("/admin/candmtable");
      
      
    } catch (err) {
      console.log(err);
      // console.log(error);
    }

    

    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredSubject("");
    setEnteredMessage("");
  };

  return (
    <React.Fragment>
      <ErrorModal
        error={error}
        onClear={clearError}
        style={{ height: "200px" }}
      />
      <div>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
          <form onSubmit={queryhandler}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Name"
                  style={{ height: "55px" }}
                  value={enteredName}
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Email"
                  style={{ height: "55px" }}
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
              </div>
              <div className="col-12">
                <input
                  type="tel"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Phone Number"
                  style={{ height: "55px" }}
                  value={enterdPhone}
                  onChange={phoneChangeHandler}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Subject"
                  style={{ height: "55px" }}
                  value={enteredSubject}
                  onChange={subjectChangeHandler}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0 bg-light px-4 py-3"
                  rows="4"
                  placeholder="Message"
                  value={enteredMessage}
                  onChange={messageChangeHandler}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contactform;
