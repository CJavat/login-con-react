import React from "react";
import '../css/ImagenPerfil.css'
import userImg from '../img/user.png'

function ImagenPerfil(props) {
  return(
    <div className="contenedor-imagen">
      <img 
        className="imagen-perfil"
        src={userImg} 
        alt="Logo Usuario" 
      />
      <p
        className="titulo">
          INICIAR SESIÓN
      </p>
    </div>
  );
}

export default ImagenPerfil;