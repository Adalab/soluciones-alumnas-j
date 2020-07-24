'use strict';

// Array de 3 objetos:
const informationSet = [
  {
    name: 'Mercedes',
    surname: 'Silvertongue',
    phone: 999999999,
  },
  {
    name: 'Corina',
    surname: 'Asriel',
    phone: 777777777,
  },
  {
    name: 'Sara',
    surname: 'Coulter',
    phone: 333333333,
  },
];

// Referencia a los elementos del formulario
const inputName = document.querySelector('#firstName');
const inputLastName = document.querySelector('#lastName');
const inputPhone = document.querySelector('#phone');
const profileSelect = document.querySelector('.info-set');

// Función que se encarga de rellenar el formulario según la opción del select que escojamos
function fillForm() {
  console.log('HI');

  // Condicional según el valor del select
  // Primera persona
  if (profileSelect.value === 'mercedes') {
    inputName.value = informationSet[0].name;
    inputLastName.value = informationSet[0].surname;
    inputPhone.value = informationSet[0].phone;

    // Segunda persona
  } else if (profileSelect.value === 'corina') {
    inputName.value = informationSet[1].name;
    inputLastName.value = informationSet[1].surname;
    inputPhone.value = informationSet[1].phone;

    // Tercera persona
  } else if (profileSelect.value === 'sara') {
    inputName.value = informationSet[2].name;
    inputLastName.value = informationSet[2].surname;
    inputPhone.value = informationSet[2].phone;
  }
}

// EVENT LISTENER
profileSelect.addEventListener('change', fillForm);

// 🦊 EMM
