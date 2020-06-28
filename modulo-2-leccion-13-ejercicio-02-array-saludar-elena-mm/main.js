'use strict';

// Partimos de array con nombres:
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

// Queremos un nuevo array con los saludos para cada una "Bienvenida Yolanda".
const greetings = names.map(name => `Bienvenida ${name}`);