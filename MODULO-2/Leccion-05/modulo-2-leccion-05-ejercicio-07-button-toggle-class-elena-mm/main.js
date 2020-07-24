'use strict';

// Creamos una constante haga referencia al botón (tiene clase btn)
const button = document.querySelector('.btn');

// Le añadimos al botón un eventlistener de 'click' que llama a una función anónima que va a cambiar su estilo
button.addEventListener('click', function () {
  button.classList.toggle('btn-fancy');
});

// Como siempre, en vez de usar una función anónima podemos crear una nosotras y luego llamarla desde el eventListener

// 🦊 EMM
