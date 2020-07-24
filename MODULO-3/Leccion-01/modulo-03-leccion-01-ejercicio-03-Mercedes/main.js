'use strict';

import { Dog, FAMOUS_DOGS } from './dog.js'; //importamos la clase y constante que previamente exportamos en el otro archivo

const hachiko = new Dog();

console.log(`Some famous dogs in history: ${FAMOUS_DOGS.join(', ')}...`);
hachiko.bark();
