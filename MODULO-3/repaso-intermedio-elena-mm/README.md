# README

![](https://media3.giphy.com/media/3oEduSbCOfeCvO5RPW/giphy.gif?cid=ecf05e4719871f0caeb0cc72d6aa57f98fc9b72536c51c02&rid=giphy.gif)

Ejercicio de repaso. 👉🏻 Por si sirve de ayuda a quienes quieran hacerlo durante el finde.

Lo he hecho con componentes funcionales (¡Larga vida a los compoenntes funcionales!). Como no hay interactividad, que nada cambia porque no hay eventos ni nada, pues no hace falta utilizar `state`.

### Estructura 

```bash
|
|__components/
|		|__App.js
|		|__Club.js
|		|__ClubList.js
```



### Código

**App.js**

```jsx
// la constante con toda la info de los clubs
const clubs = [
  {
    "name": "Book club",
    "fa": "fas fa-glasses",
    "members": [
      "Rosalie Bradley",
      "Lula Day",
      ......
      }]
    
    
function App(props) {

  return (
    <div className="App">
      <ClubList clubinfo={clubs}/>
    </div>
  );
}

export default App;
```

> ​    // le pasamos al componente ClubList la información de los clubs a través de props

**ClubList.js**

```jsx

const ClubList = props => {
  // recibo la información de los clubs a través de props
  const clubsArray = props.clubinfo;
  
  // creo una nueva array clubsJSX que va a contener el "HTML" con su respectiva información obtenida del clubsArray por medio de un element.
  // esta función va a crear tantos clubs como haya en el array clubsArray y va a sustituir el name, icon y membersArray por su nombre icono y listado de miembros respectivo para cada club
  const clubsJSX = clubsArray.map(element => {
    return (

      <Club 
        name={element.name} 
        icon={element.fa} 
        membersArray={element.members}
        />

    );
  });

  return(

    <div className="club-list">
      <ul>
        {clubsJSX}
      </ul>
    </div>
  );
}
```



**Club.js**

```jsx
const Clubs = props => {
  // meto la info de los miembros en constante members
  const members = props.membersArray;
  
  // creo una nueva array que contiene como elementos los <li> con cada miembro dentro, de manera que contiene el "html" que queremos pintar (para esto utilizo el método funcional map)
  const membersArrayJSX = members.map(element => {
    return(
      <li>{element}</li>
    );
  })


  // hago el return y voy sustituyendo la información en la tarjeta por los datos obtenidos del props del App.js
  // en el caso del listado de miembros, le paso directamente el membersArrayJSX que ya contiene todos los miembros metidos en <li>
  return(
    <li className="card">
      <span><i className={props.icon}></i></span>
      <div className="card__info">
        <h2>{props.name}</h2>
        <div className="members">
          <h4 className="members__title">Members:</h4>
          <ul className="members__list">
            {membersArrayJSX}
          </ul>
        </div>
      </div>
    </li>
  )
}


export default Clubs;
```



> No olvidéis modificar el **App.css** para darle el estilo que queráis.

![image-20200724130606937](./image-20200724130606937.png)