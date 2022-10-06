import React from "react";
import "./Imagen.css";

function Imagen(props) {
  return <img src={props[0]} 
              className="rounded mx-auto" 
              alt={props[1]} />;
}

export default Imagen;
