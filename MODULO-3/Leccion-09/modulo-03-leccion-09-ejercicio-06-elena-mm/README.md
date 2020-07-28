# README

![](https://media0.giphy.com/media/YcH3LrxENdotO/giphy.gif?cid=ecf05e4785cbc19ef038f58f35a72a7b3c1161603d60b6b9&rid=giphy.gif)

**Card.js** ANTES:

```jsx
const Card = (props) => {

  return (
    <div className="card">
      <h1>{props.updatedUser.name || 'Título de la película'}</h1>
      <p>{props.updatedUser.description || 'Descripción de la película'}</p>
      <p>{props.updatedUser.language || 'Idioma'}</p>
    </div>
  )
}

```

**Card.js** DESPUÉS:

```jsx
const Card = (props) => {
    const {
        name,
        description,
        language
    } = props.updatedUser;

    return (
        <div className="card">
            <h1>{name || 'Título de la película'}</h1>
            <p>{description || 'Descripción de la película'}</p>
            <p>{language || 'Idioma'}</p>
        </div>
    )
}
```



**Form.js** ANTES:

```jsx
render() {

  return(
    <form>
      <label>
        Nombre
        <input 
          type="text" 
          id="name" 
          value={this.state.name}
          onChange={this.handleChange}/>
      </label>

      <label>
        Descripción
        <textarea 
          value={this.state.description}
          id="description"
          onChange={this.handleChange}/>
      </label>

      <label>
        Escoge el idioma:
        <select 
          value={this.state.language}
          id="language"
          onChange={this.handleChange}>
          <option value="Español" defaultChecked>Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
      </label>
    </form>);
}
```



**Form.js** DESPUÉS:

```jsx
render() {
const {
  name,
  description,
  language
  } = this.state;

  return(
    <form>
      <label>
        Nombre
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={this.handleChange}/>
      </label>

      <label>
        Descripción
        <textarea 
          value={description}
          id="description"
          onChange={this.handleChange}/>
      </label>

      <label>
        Escoge el idioma:
        <select 
          value={language}
          id="language"
          onChange={this.handleChange}>
          <option value="Español" defaultChecked>Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
      </label>
    </form>);
}
```



