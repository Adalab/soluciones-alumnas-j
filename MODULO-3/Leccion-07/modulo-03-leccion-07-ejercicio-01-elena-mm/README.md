# README

![](https://media2.giphy.com/media/xsE65jaPsUKUo/giphy.gif?cid=ecf05e47vitntcryxna9jmh2w49aqfoe2k9bsnf68ykrr8gm&rid=giphy.gif)

> Nos queda la mitad del tema...

Este ejercicio lo he hecho en **App.js**:

```jsx
import React, {useState} from 'react';
import './App.css';

function App() {
  // creamos estado para age, y función que se encargará de actualizar el valor. Valor inicial: 20
  const [age, setAge] = useState(20);

  // Definimos función que actualiza la edad
  const handleAge = () => {
    // La edad será la edad anterior + 1
    setAge(age + 1);
  }


  return (
    <div className="App">
      <p>Hoy tengo {age} años de edad.</p>
      <button type="button" onClick={handleAge}>Haxme más viejo</button>
    </div>
  );
}

export default App;
```

