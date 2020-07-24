# README

**CityImage.js**

```jsx
class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      Praga: 'aquí la url',
      Boston: 'aquí la url',
      Sydney: 'aquí la url',
      Tokio: 'aquí la url'
    };
  }   
  render() {
    return (
      <img src={this.cities[this.props.city]} alt={this.props.city}/>
    )
  }
}
```

> Con el `this.cities[this.props.city]` conseguimos que, dependiendo del valor que le pasemos por `props` a **CityImage** (si seleccionamos PRaga, será PRaga, y si seleccionamos Tokio, será Tokio) pues se sustituye lo que hay entre corchetes por ese valor 'Praga', 'Tokio' y entonces devolvería el valor de la propiedad de `cities`. Por ejemplo:
>
> - si selecciono Tokio --> `myCity`= 'Tokio' --> `this.props.city`= 'Tokio'
> - `this.cities['Tokio']` --> nos devuelve el valor de Tokio, que es su imagen

**Destiny.js**

```jsx
class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.myCity = '...';
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(ev) {
    this.myCity = ev.target.value;
    alert(`Tu destino es ir a ${this.myCity}`)
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <select name="destinies" onChange={this.onChangeHandler}>
          <option value="">...</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
        <CityImage city={this.myCity} />
      </div>
    )
  }
}
```

