import React from 'react';
import '../App.css';
import MediaCard from './MediaCard'


const picURL = 'https://images.unsplash.com/photo-1595119396388-b8822b6c91fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';




function App() {

  return (
    <div className="App">
      <MediaCard 
      name="Soledad Mar"
      date="24 de julio de 2020"
      img={picURL}
      text="Hola a todas, este es un texto dinámico."
      likes="345"
      heart="💚"
      />
    </div>
  );
}

export default App;
