import React, {useState, useEffect} from 'react';
import ShowList from '../components/ShowList/ShowList';
import getDataFromApi from '../services/getDataFromApi';
import './App.css';

import Header from '../components/Header/Header';



const App = (props) => {

  // states
  const [shows, setShows] = useState([]);
  const [textFilter, setTextFilter] = useState('girls'); // por defecto girls
  const [showRunningShows, setShowRunningShows] = useState(false); 


useEffect(() => {
  getDataFromApi(textFilter).then(data => {
    setShows(data);
  });
}, [textFilter]);


  // handlers
  const handleChangeInput = (ev) => {
    setTextFilter(ev.target.value);
  }

  const handleCheckedInput = (ev) => {
    setShowRunningShows(ev.target.checked); // si el checkbox está checkeado (true) -> estado running = true y viceversa
    }


    return (
      <div className="App">
        <Header 
          handleChangeInput={handleChangeInput}
          textFilter={textFilter}
          handleCheckedInput={handleCheckedInput}/>
        <ShowList 
          shows={shows}
          // le paso si estamos en modo ver las series que estén running o todas (true/false)
          running={showRunningShows}/>
      </div>
    );
}

export default App;
