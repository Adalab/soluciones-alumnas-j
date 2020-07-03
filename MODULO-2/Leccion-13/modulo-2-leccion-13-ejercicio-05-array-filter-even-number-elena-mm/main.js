'use strict';

// Partimos de un array con  un listado de contraseñas
const pins = [2389, 2384, 2837, 5232, 8998];

// Queremos un nuevo array que sólo contenga las contraseñas que sean un número par
// Necesitamos:
// utilizar el método filter()
// una expresión de devuelva un valor boolean --> pin % 2 === 0 (¿Es nº par?)
const evenPins = pins.filter(pin => pin % 2 === 0);
