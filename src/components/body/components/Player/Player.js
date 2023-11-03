// import React from "react";
// import { Link } from "react-router-dom";

// const Player = (props) => {
//   return (
//     <div>
//       {/* team */}

//       <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
//         <div className="team-item bg-light rounded overflow-hidden">
//           <div className="team-img position-relative overflow-hidden">
//             <img
//               className="img-fluid w-100"
//               src={props.playerimg}
//               alt="playerimg"
//             />
//             <div className="team-social">
//               <Link
//                 to={props.fblink}
//                 className="btn btn-lg btn-primary btn-lg-square rounded"
//               >
//                 <i className="fab fa-facebook-f fw-normal"></i>
//               </Link>
//               <Link
//                 to={props.instalink}
//                 className="btn btn-lg btn-primary btn-lg-square rounded"
//               >
//                 <i className="fab fa-instagram fw-normal"></i>
//               </Link>
              
//             </div>
//           </div>
//           <div className="text-center py-4">
//             <h4 className="text-primary"> {props.playername} </h4>
//             <h5 className="text-primary">Position: {props.playerposition}</h5>
//             {/* <p className=" m-0">Position: Forward</p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Player;

import React from "react";
import { Link } from "react-router-dom";

const Player = (props) => {
  return (
    <div className="mb-5 mx-2">
      <div className="team-item bg-light rounded overflow-hidden">
        <div className="team-img position-relative overflow-hidden" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <img
            className="img-fluid" // Remove any width and height classes
            src={props.playerimg}
            alt="playerimg"
            style={{ height: "350px" }}
          />
          <div className="team-social">
            <Link
              to={props.playerfblink}
              className="btn btn-primary btn-lg rounded-circle"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to={props.playerinstalink}
              className="btn btn-primary btn-lg rounded-circle"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
        <div className="text-center py-3">
          <h4 className="text-primary"> {props.playername} </h4>
          <h5 className="text-primary">Position: {props.playerposition}</h5>
        </div>
      </div>
    </div>
  );
};

export default Player;


