'use strict';

/* EJERCICIO 2 */
class Square {
  //Ahora los atributos los metemos en el constructor, ya no van dentro de los métodos
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side * this.side;
  }
}
const mySquare1 = new Square(1);
const mySquare2 = new Square(3);
const mySquare3 = new Square(7);

console.log(
  `El cuadrado1 tiene un perimetro de ${mySquare1.perimeter()}cm y un area de ${mySquare1.area()}cm2`
);
console.log(
  `El cuadrado2 tiene un perimetro de ${mySquare2.perimeter()}cm y un area de ${mySquare2.area()}cm2`
);
console.log(
  `El cuadrado3 tiene un perimetro de ${mySquare3.perimeter()}cm y un area de ${mySquare3.area()}cm2`
);
