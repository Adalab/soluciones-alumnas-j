'use strict';

// Creamos array que contiene los tres párrafos
const paragraphList = document.querySelectorAll('p');

// Hacemos loop para recorrer cada item del array
for (const paragraph of paragraphList) {
  // Creamos constante que es el offsetHeight del párrafo
  const pHeight = paragraph.offsetHeight;

  // Modificamos el atributo height del párrafo para que sea un tercio del offsetHeight del mismo (RECUERDA que height espera una expresión tipo "200px", con lo que no valdría con sólo poner pHeight, sino que hay que añadirle el px!!)
  paragraph.style.height = `${pHeight / 3}px`;
}

// He utilizaod el for...in pero también se puede hacer con el típico for(let i = 0; i < paragrpahList; i++)!

// 🦊 EMM
