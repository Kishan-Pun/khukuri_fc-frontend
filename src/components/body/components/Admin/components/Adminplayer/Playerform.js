import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import ErrorModal from "../../../../UIElements/ErrorModal";
import LoadingSpinner from "../../../../UIElements/LoadingSpinner";

import { useHttpClient } from "../../../../hooks/http-hook";

const Playerform = () => {
  const navigate = useNavigate();

  const [enteredName, setEnteredName] = useState("");
  const [enteredPosition, setEnteredPosition] = useState("");
  const [enteredFblink, setEnteredFblink] = useState("");
  const [enteredInstalink, setEnteredInstalink] = useState("");
  const [enteredPlayerImg, setEnteredPlayerImg] = useState("");

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const namechangehandler = (event) => {
    setEnteredName(event.target.value);
  };

  const positionchangehandler = (event) => {
    setEnteredPosition(event.target.value);
  };

  const fblinkchangehandler = (event) => {
    setEnteredFblink(event.target.value);
  };

  const instalinkchangehandler = (event) => {
    setEnteredInstalink(event.target.value);
  };

  const playerimgchangehandler = (event) => {
    setEnteredPlayerImg(event.target.value);
  };

  const playerformhandler = async (event) => {
    event.preventDefault();

    // const playerforminfo = {
    //   playername: enteredName,
    //   playerposition: enteredPosition,
    //   playerfblink: enteredFblink,
    //   playerinstalink: enteredInstalink,
    //   playerimg: enteredPlayerImg,
    // };

    // console.log(playerforminfo);

    try {
      await sendRequest(
        "http://localhost:5000/api/admin/playerform",
        "POST",
        JSON.stringify({
          playername: enteredName,
          playerposition: enteredPosition,
          playerfblink: enteredFblink,
          playerinstalink: enteredInstalink,
          playerimg: enteredPlayerImg,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      
      navigate("/admin/playertable");
    } catch (err) {
      console.log(err);
    }


    setEnteredName("");
    setEnteredPosition("");
    setEnteredFblink("");
    setEnteredInstalink("");
    setEnteredPlayerImg("");
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
            <h6 className="m-0 font-weight-bold text-primary">Add Players</h6>
          </div>
          <div className="card-body">
            <form onSubmit={playerformhandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Player Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="playername"
                  aria-describedby="emailHelp"
                  value={enteredName}
                  onChange={namechangehandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Player Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="playerpostion"
                  aria-describedby="emailHelp"
                  value={enteredPosition}
                  onChange={positionchangehandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Player Facebook Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="playerpostion"
                  aria-describedby="emailHelp"
                  value={enteredFblink}
                  onChange={fblinkchangehandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Player Insta Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="playerpostion"
                  aria-describedby="emailHelp"
                  value={enteredInstalink}
                  onChange={instalinkchangehandler}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Image Of The Player
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  value={enteredPlayerImg}
                  onChange={playerimgchangehandler}
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

export default Playerform;
