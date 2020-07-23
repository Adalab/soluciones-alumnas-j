# README

Creo que lo tengo idéntico al anterior pero sin el alert. El enunciado no me dejó las cosas muy claras.

>  "La diferencia con ejercicios anteriores es que ahora el select está en su propio componente". Para llevarlo a cabo debemos:" Pues eos, no sé si vale con lo que puse en el otro, que era esto:
>
> ```jsx
> return (
>   <div>
>     <select name="destinies" onChange={this.handleClick}>
>       <option value="...">...</option>
>       <option value="Praga">Praga</option>
>       <option value="Buenos Aires">Buenos Aires</option>
>       <option value="Boston">Boston</option>
>       <option value="Sydney">Sydney</option>
>       <option value="Tokio">Tokio</option>
>     </select>
>     <CityImage city={this.selectedCity} />
>   </div>
> )
> }
> ```
>
> O quiere que meta el select en un componente y quede tal que así:
>
> ```jsx
> return (
>   <div>
>     <CitySelect .... />
>     <CityImage city={this.selectedCity} />
>   </div>
> )
> }
> ```
>
> Posiblemente sea esta segunda opción, para así practicar el mandar información de un componente hijo a un componente padre pero ya estoy cansada :) cheers.