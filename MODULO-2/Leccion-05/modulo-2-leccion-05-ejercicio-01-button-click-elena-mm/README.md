Ejercicio sencillito pero que se puede resolver de muchas maneras. Propongo brevemente 2:

- utilizar función anónima y llamarla con el eventlistener del button

  ```js
  button.addEventListener('click', function () {
      message.innerHTML = newMessage;
  });
  ```

  

- definir función propia con nombre (changeMessage) y llamarla en el eventlistener

  ```js
  function changeMessage() {
      message.innerHTML = newMessage;
  }
  button.addEventListener('click', changeMessage);
  ```

  

​        —🦊 [Elena *mm*](https://github.com/elemarmar) 

