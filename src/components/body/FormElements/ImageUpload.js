import React from "react";


import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = () => {
  return (
    <div className="form-control">
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png, .jpeg"
      />
      <div className={`image-upload ${props.center && 'center'} `} >
        
      </div>
    </div>
  );
};

export default ImageUpload;
