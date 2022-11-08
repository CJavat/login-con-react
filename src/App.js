import './App.css';

import Title from './components/Title';
import Input from './components/Input';
import Link from './components/Link'
import Boton from './components/Boton'
import BotonLogos from './components/BotonLogos';
import SignUp from './components/SignUp';

import User from './icons/user.png';
import Lock from './icons/lock.png';
import EyeOpen from './icons/eye open.png';
import EyeClosed from './icons/eye closed.png';

import FacebookLogo from './img/facebook-logo.png';
import TwitterLogo from './img/twitter-logo.png';
import GooglePlusLogo from './img/google-logo.png';
import InstagramLogo from './img/instagram-logo.png';

import { useState } from 'react'

function App() {

  const [contadorOjo, setContador] = useState(0);
  const [iconoOjo, setIcono] = useState(EyeClosed);
  const [altOjo, setAlt] = useState("Hide Password");
  const [tipoInput, setTipo] = useState("password");

  const isSelected = () => {
    setContador(contadorOjo + 1);
    
    if(contadorOjo %2 === 0) {
      setIcono(EyeClosed)
      setAlt("Hide Password");
      setTipo("password");
    }
    else {
      setIcono(EyeOpen)
      setAlt("Show Password");
      setTipo("text");
    }
  };

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Title />
        <div className='contenedor-inputs'>
          <Input 
            img={User}
            alt="User Icon"
            idInput="userIcon"
            type="text"
            name="username"
            placeholder="Username"
          />
          <Input
            img={Lock}
            alt="Lock Icon"
            idInput="lockIcon"
            placeholder="Password"
            name="Password"
            type={tipoInput}
            manejarClick={ isSelected }
            iconEye={iconoOjo}
            altEye={altOjo}
          />
          <div className='contenedor-recordar-olvidar'>
            <Input 
              idInput="recordarMe"
              type="checkbox"
              name="recordarMe"
            />
            <Link 
              texto="Forgot Password"
            />
          </div>
          <Boton />
        </div>
        <div className='contenedor-signin'>
          <p className='text-signin'>
            Or Sign in with
          </p>
          <div className='social-logo'>
            <BotonLogos 
              url="https://www.facebook.com/"
              logoURL={FacebookLogo}
              altLogo="Facebook Logo."
            />
            <BotonLogos 
              url="https://www.twitter.com/"
              logoURL={TwitterLogo}
              altLogo="Twitter Logo."
            />
            <BotonLogos 
              url="https://www.google.com/"
              logoURL={GooglePlusLogo}
              altLogo="Google Plus Logo."
            />
            <BotonLogos 
              url="https://www.instagram.com/"
              logoURL={InstagramLogo}
              altLogo="Instagram Logo."
            />
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default App;