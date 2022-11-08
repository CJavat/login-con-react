import React from "react";
import '../css/SignUp.css';
import Link from "../components/Link";

function SignUp(props) {

  return(
    <div className='contenedor-signup'>
            <p className="signup-texto">
              Don't have an account?
            </p>
            <Link 
              texto="Sign up"
            />
    </div>
  );
}

export default SignUp;