import React, {useState} from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(20);
  const [presents, setPresents] = useState(1);

  const handleAge = () => {
    setAge(age + 1);
  }

  const handlePresents = () => {
    setPresents(presents + 1);
  }


  return (
    <div className="App">
      <p>Hoy tengo {age} años de edad.</p>
      <button type="button" onClick={handleAge}>Haxme más viejo</button>
      
      <p>Tengo {presents} regalo.</p>
      <button type="button" onClick={handlePresents}>Dame regalos</button>    
    </div>
  );
}

export default App;
