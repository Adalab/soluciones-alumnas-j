# README

![](https://media2.giphy.com/media/aYrtl1AhKDhjq/giphy.gif?cid=ecf05e475cd088d4a3fde4759c0ed70a7d954dbb4634d56b&rid=giphy.gif)

Basado en el ejercicio anterior, sólo hay que añadirle la funcionalidad de añadir regalos:

**App.js**

```jsx
import React, {useState} from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(20);
  
  // añadimos estado inicial para presents y la función que se encargará de actualizar su valor (setPresents)
  const [presents, setPresents] = useState(1);

  const handleAge = () => {
    setAge(age + 1);
  }

  // definimos la función que actualiza los regalos
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

```

