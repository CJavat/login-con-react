import React from "react";
import '../css/Input.css'


function Input(props) {
    return(
        <div className="contenedor">
            <img
                className="icon-img" 
                src={ props.img } 
                alt={ props.alt }
            />
            <input
                className="input"
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default Input;