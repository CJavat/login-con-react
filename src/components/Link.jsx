import React from "react";
import '../css/Link.css'

function Link(props) {
  return(
    <a
      className="enlace" 
      href="#home">
        {props.texto}
    </a>
  );
}

export default Link;