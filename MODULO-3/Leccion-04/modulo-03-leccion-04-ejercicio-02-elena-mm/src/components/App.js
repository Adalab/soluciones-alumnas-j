import React from 'react';
import HalfPage from './HalfPage';


import '../App.css';

function App() {
  return (
    <div className="App">
      <HalfPage>
        <h1>This is the title</h1>
        <p>This is some paragraph with text. Woohoo!</p>
      </HalfPage>
      <HalfPage>
        <h1>This is another title</h1>
        <p>This is another paragraph with text. Woohoo! Wiiiiii!</p>
      </HalfPage>
    </div>
  );
}

export default App;
