Este ejercicio parte del [ejercicio 1](https://github.com/Adalab/soluciones-alumnas-j/tree/master/MODULO-3/Leccion-02/modulo-03-leccion-02-ejercicio-01-elena-mm) Tan sólo tenemos que meter el codigo **JSX** en variables:

1. Dividimos nuestro código JSX en partes que podamos guardar en variables:

```JSX
  const appProfile = (
    <div className="card__profile">
      <img className="card__image" src={picURL}/>
      <div className="card__profile-text">
          <p className="card__profile-name">
            Alex Guerrero
          </p>
          <p className="card__profile-date">
            Lunes 26 de junio de 2017
          </p>
      </div>
    </div>
  );

  const appTextContent = (
    <div className="card__text-content">
      <p>Lorem ipsum dolor sit amet, consectetur adisicing elit, bla bla bla blo blo hola amigas cómo están todo bien vamos a bailar react es maravilloso</p>
    </div>
  );

  const appExtraInfo = (
      <div className="card__extra">
        <p className="read-more">Leer más...</p>
        <p className="favorite">37 <i className="fas fa-heart"></i></p>
      </div>
  );
```

2. Creamos `appRoot` que contendrá todo el contenido:

```JSX

  const appRoot = (
    <div className="App">
      <div className="card">
        {appProfile}
        {appTextContent}
        {appExtraInfo}
      </div>
    </div>
  );
```

3. return con `appRoot`, que lo contiene todo de manera ordenada:

```JSX
  return appRoot;
```



---

Hemos pasado de esto:

```JSX

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card__profile">
          <img className="card__image" src={picURL}/>
          <div className="card__profile-text">
            <p className="card__profile-name">
              Alex Guerrero
            </p>
            <p className="card__profile-date">
              Lunes 26 de junio de 2017
            </p>
          </div>
        </div>
        <div className="card__text-content">
          <p>Lorem ipsum dolor sit amet, consectetur adisicing elit, bla bla bla blo blo hola amigas cómo están todo bien vamos a bailar react es maravilloso</p>
        </div>
        <div className="card__extra">
          <p className="read-more">Leer más...</p>
          <p className="favorite">37 <i className="fas fa-heart"></i></p>
        </div>
      </div>
    </div>
  );
}
```

A esto 🎉:

```JSX
function App() {

  const appProfile = (
    <div className="card__profile">
      <img className="card__image" src={picURL}/>
      <div className="card__profile-text">
          <p className="card__profile-name">
            Alex Guerrero
          </p>
          <p className="card__profile-date">
            Lunes 26 de junio de 2017
          </p>
      </div>
    </div>
  );

  const appTextContent = (
    <div className="card__text-content">
      <p>Lorem ipsum dolor sit amet, consectetur adisicing elit, bla bla bla blo blo hola amigas cómo están todo bien vamos a bailar react es maravilloso</p>
    </div>
  );

  const appExtraInfo = (
      <div className="card__extra">
        <p className="read-more">Leer más...</p>
        <p className="favorite">37 <i className="fas fa-heart"></i></p>
      </div>
  );

  const appRoot = (
    <div className="App">
      <div className="card">
        {appProfile}
        {appTextContent}
        {appExtraInfo}
      </div>
    </div>
  );


  return appRoot;
}
```



—🦊 [EMM](https://github.com/elemarmar)