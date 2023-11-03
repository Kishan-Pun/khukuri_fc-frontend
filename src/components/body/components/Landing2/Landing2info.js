import React from "react";
import Landing2 from "./Landing2";

const Landing2info = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No HomeStays Found!</h2>
      </div>
    );
  }

  // console.log(props.items);
  return (
    <div>
      {props.items.map((about) => (
        <Landing2
          key={about.id}
          shortabout={about.shortabout}
          shorttitle={about.shorttitle}
          aboutimg={about.aboutimg}
        />
      ))}
    </div>
  );
};

export default Landing2info;
