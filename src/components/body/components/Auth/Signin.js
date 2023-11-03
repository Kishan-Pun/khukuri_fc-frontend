import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useHttpClient } from "../../hooks/http-hook";

import ErrorModal from "../../UIElements/ErrorModal";
import LoadingSpinner from "../../UIElements/LoadingSpinner";

const Signin = () => {
  const navigate = useNavigate();

  const [enterdName, setEnteredName] = useState("");
  // const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  // const lastnameChangeHandler = (event) => {
  //   setEnteredLastName(event.target.value);
  // };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const signinhandler = async (event) => {
    event.preventDefault();

    // const signininfo = {
    //   firstname: enterdFirstName,
    //   lastname: enteredLastName,
    //   email: enteredEmail,
    //   password: enteredPassword,
    // };

    try {
      await sendRequest(
        "http://localhost:5000/api/admin/signin",
        "POST",
        JSON.stringify({
          name: enterdName,
          email: enteredEmail,
          password: enteredPassword,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      // console.log(sendRequest);
      navigate("/admin/login");
    } catch (err) {
      // console.log(err);
      // setError(err.message || "Something went wrong, please try again!");
    }

    // console.log(signininfo);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <React.Fragment>
      <ErrorModal
        error={error}
        onClear={clearError}
        style={{ height: "200px" }}
      />
      <div>
        {/* <!-- Carousel Start --> */}
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">
                Signin Form
              </h1>
              {/* <a href="" className="h5 text-white">Home</a>
                <i className="far fa-circle text-white px-2"></i>
                <a href="" className="h5 text-white">SignIn</a> */}
            </div>
          </div>
        </div>
        {/* <!-- Carousel End --> */}

        <section className="text-center">
          {/* <!-- Background image --> */}
          <div
            className="p-5 bg-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
              height: "300px",
            }}
          ></div>
          {/* <!-- Background image --> */}

          <div
            className="card mx-4 mx-md-5 shadow-5-strong"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  {isLoading && <LoadingSpinner asOverlay />}
                  <h2 className="fw-bold mb-5">Signin now</h2>
                  <form onSubmit={signinhandler}>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            style={{
                              textAlign: "center",
                            }}
                            type="text"
                            id="form3Example1"
                            className="form-control"
                            value={enterdName}
                            onChange={nameChangeHandler}
                          />
                          <label className="form-label" htmlFor="form3Example1">
                            Name
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input
                        style={{
                          textAlign: "center",
                        }}
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input
                        style={{
                          textAlign: "center",
                        }}
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={enteredPassword}
                        placeholder="Enter at least 6 character or number"
                        onChange={passwordChangeHandler}
                        autoComplete="on"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Signin
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Signin;
