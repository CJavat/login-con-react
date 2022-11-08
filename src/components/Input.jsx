import React from "react";
import '../css/Input.css'

function Input(props) {

    const iconInput = () => {
        return(
            <img
                className="icon-img" 
                src={ props.img } 
                alt={ props.alt }
            />
        );
    };

    const iconEye = () => {
        return(
            <img
                onClick={ () => props.manejarClick() }
                className="icon-eye"
                src={props.iconEye}
                alt={props.altEye} 
            />
        );
    };
    
    const rememberMe = () => {
        return(
            <label 
                className="label"
                htmlFor={props.idInput}>
                    Remember me
            </label>
        );
    };

    return(
        <div className={props.type === "text" || props.type === "password" ? "contenedor" : "contenedor-checkbox"}>
            {
                props.type === "text" || props.type === "password"
                ? iconInput()
                : ""
            }
            <input
                // className="input"
                className={props.type === "text" || props.type === "password" ? "input" : "checkbox"}
                id={props.idInput}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
            {
                props.type === "checkbox"
                ? rememberMe()
                : ""
            }
            {
                props.alt === "Lock Icon"
                ? iconEye()
                : ""
            }
        </div>
    );
}

export default Input;