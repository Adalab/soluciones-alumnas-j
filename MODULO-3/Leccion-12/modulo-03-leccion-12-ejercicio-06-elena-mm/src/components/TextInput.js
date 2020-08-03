import React, {useState, useEffect} from 'react';

const TextInput = () => {
  const [userInput, setUserInput] = useState('');


  // get item from localstorage --> sólo se ejctua una vez (array vacío)
  useEffect(() => {
    const newInput = localStorage.getItem('userInput');
    if (newInput) {
        setUserInput(newInput)
    }
  }, []); // <-- este array vacío indica que sólo se ejecute una vez: cuando el componente sea mounted

  useEffect(()=> {
    localStorage.setItem('userInput', userInput); 
  }, [userInput]); // <-- que se ejecute cada vez que userInput cambie

  const handleInput = (ev) => {
      setUserInput(ev.target.value)
  }


    return <input 
        type="text" 
        onChange={handleInput} 
        value={userInput}></input>;
}

export default TextInput;