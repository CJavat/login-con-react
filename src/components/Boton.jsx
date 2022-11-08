import React from "react";
import '../css/Boton.css';

function Boton() {
  return(
    <a
      className="link"
      href="https://www.google.com/">
        <button
          className="boton"
          id="log-in"
          type="submit">
            Log In
        </button>
    </a>
  );
}

export default Boton;