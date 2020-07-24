'use strict';

/* EJERCICIO 1 */
class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side * side;
  }
}
const mySquare = new Square();

let squareSide = 9;
console.log(
  `El cuadrado tiene un perimetro de ${mySquare.perimeter(squareSide)}cm`
);
console.log(`El cuadrado tiene un area de ${mySquare.area(squareSide)}cm`);
