import React from "react";
import '../css/BotonLogos.css';

function BotonLogos(props) {
  return(
    <a 
      className="link-logos"
      href={props.url}
    >
      <img 
        className="logo"
        src={props.logoURL} 
        alt={props.altLogo} 
      />
    </a>
  );
}

export default BotonLogos;