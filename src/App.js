import './App.css';
import Title from './components/Title';
import Input from './components/Input.jsx';
import User from './img/user.png';
import Lock from './img/lock.png';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Title />
        <div className='contenedor-inputs'>
          <Input 
            img={User}
            alt="User Icon"
            type="text"
            name="username"
            placeholder="Username"
          />

          <Input 
            img={Lock}
            alt="Lock Icon"
            type="passwprd"
            name="Password"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
  );
}

export default App;