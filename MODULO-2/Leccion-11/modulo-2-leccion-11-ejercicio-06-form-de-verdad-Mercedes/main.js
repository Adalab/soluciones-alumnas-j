'use strict';

const userName = document.querySelector('.js-name');
const lastName = document.querySelector('.js-last-name');
const paragraph = document.querySelector('.js-print-name');

document.addEventListener('keyup', function () {
  paragraph.innerHTML = userName.value + ' ' + lastName.value;

  const userInfo = {
    name: userName.value,
    lastName: lastName.value,
  };

  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});

//recuperar datos al refrescar
function uploadInfo() {
  const savedInfo = JSON.parse(localStorage.getItem('userInfo'));
  userName.value = savedInfo.name;
  lastName.value = savedInfo.lastName;
  paragraph.innerHTML = userName.value + ' ' + lastName.value;
}
uploadInfo();
