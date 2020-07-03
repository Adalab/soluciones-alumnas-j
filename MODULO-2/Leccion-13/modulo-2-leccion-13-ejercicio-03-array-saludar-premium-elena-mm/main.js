'use strict';

// Partimos de un array con objetos que repreentan usuarias, su nombre y si son premium o no
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];

// Queremos un nuevo array cuyos elementos sean saludos:
// - para las usuarias que sean premium "Bienvenida Yolanda. Gracias por confiar en nosotros"
// - para el resto de usuarias "Bienvenida Yolanda"
// Vamos a necesitar un condicional, para añadir un texto a unas (si isPremium: false) y otro a otras (si isPremium: true)
const greetings = users.map(user => {
    if (user.isPremium === false) {
        return `Bienvenida ${user.name}`;
    } else if (user.isPremium === true) {
        return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`
    }
});
