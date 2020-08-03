import React, { useState, useEffect } from 'react';

const Counter = () => {
  console.log('Me estoy renderizando');

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Me estoy montando');
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => {
      console.log('Me estoy desmontando');
      clearInterval(intervalId);
    };
  });
  return <div>Contador: {counter}</div>;
};

export default Counter;