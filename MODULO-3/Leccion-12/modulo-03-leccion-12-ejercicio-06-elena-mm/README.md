# README

![](https://media3.giphy.com/media/iTiG5vhZs7II/giphy.gif?cid=ecf05e47d379a3b6f4eef044b395713349bda5f03a47ce56&rid=giphy.gif)

**TenxtInput.js**

```jsx
const TextInput = () => {
  const [userInput, setUserInput] = useState('');


  // get item from localstorage --> sólo se ejctua una vez (array vacío)
  useEffect(() => {
    const newInput = localStorage.getItem('userInput');
    if (newInput) {
      setUserInput(newInput)
    }
  }, []); // <-- este array vacío indica que sólo se ejecute una vez: cuando el componente sea mounted

  // set item in localstorage
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
```

> ⚠️ No he puesto el stringify al guardar el elemento en el localStorage porque no estoy guardando un objeto, sino un string.

