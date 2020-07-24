'use strict';

/* EJERCICIO 3 - BONUS A */
//Clase Polygon
class Polygon {
  //Atributos
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  //metodo para calcular el perímetro
  perimeter() {
    return this.base * this.numberOfSides;
  }
  //método para calcular el area
  area() {
    return this.base * this.height;
  }
}
//Subclases
class Square extends Polygon {
  //Esta subclase gracias a extends hereda los metodos de polygon,
  //pero hay que indicarle sus atributos propios
  constructor(side) {
    //Hacemos referencia a los atributos del padre (polygon)
    //numberOfSides = 4
    //base = side
    //height = side
    super(4, side, side);
    this.side = side;
  }
}
class Triangle extends Polygon {
  constructor(base, height) {
    //Hacemos referencia a los atributos del padre (polygon)
    //numberOfSides = 3
    //base = base
    //height = height
    super(3, base, height);
  }
  area() {
    //modificamos el metodo que calcula el area
    return super.area() / 2;
  }
}
// Instancias
const square = new Square(4);
const triangle = new Triangle(4, 3);

// Every dog barks in its own language

console.log(`El cuadrado tiene un perimetro de ${square.perimeter()}cm`);
console.log(`El cuadrado tiene un área de ${square.area()}cm`);

console.log(`El triángulo tiene un perimetro de ${triangle.perimeter()}cm`);
console.log(`El triángulo tiene un área de ${triangle.area()}cm`);
