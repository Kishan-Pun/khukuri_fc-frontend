import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";

import ErrorModal from "../../UIElements/ErrorModal";
import LoadingSpinner from "../../UIElements/LoadingSpinner";

import { useHttpClient } from "../../hooks/http-hook";

// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useContext(AuthContext);

  // const history = useHistory(); // Initialize history

  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginhandler = async (event) => {
    event.preventDefault();

    // const logininfo = {
    //   email: enteredEmail,
    //   password: enteredPassword,
    // };

    // console.log(logininfo);

    try {
      await sendRequest(
        "http://localhost:5000/api/admin/login",
        "POST",
        JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      
      // console.log(responseData);
      auth.login();
      navigate("/admin");
    } catch (err) {
      // console.log(err);
      // setError(err.message || "Something went wrong, please try again!");
    }

    setEnteredEmail("");
    setEnteredPassword("");

    // history.push("/admin");
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
                Login Form
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
                  <h2 className="fw-bold mb-5">Login now</h2>
                  <form onSubmit={loginhandler}>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input
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
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={enteredPassword}
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
                      Login
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

export default Login;
