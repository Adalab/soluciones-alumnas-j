import React, { useEffect, useState } from 'react';
import '../App.css';
import Filters from './Filters';
import ShowList from './ShowList';
import getDataFromApi from '../components/services/getDataFromApi';

const App = () => {
  const [series, setSeries] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState([]);
  useEffect(() => {
    // console.log(`me estoy montando`);
    getDataFromApi().then((data) => {
      setSeries(data);
    });
  }, []);

  //event handlers

  const handleFilter = (data) => {
    // console.log('manejando filtros');
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'status') {
      setStatusFilter(data.value);
    }
  };
  // console.log(nameFilter);

  const filteredSeries = series
    .filter((serie) => {
      // devolver booleano true/false en funcion de los filtros
      return serie.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((serie) => {
      console.log(serie.status);
      return serie.status === statusFilter;
    });
  // console.log(filteredSeries);

  const getStatus = () => {
    return series.map((serie) => serie.status);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title--big'>Buscador de series</h1>
      </header>
      <Filters status={getStatus()} handleFilter={handleFilter} />
      <ShowList series={filteredSeries} />
    </div>
  );
};

export default App;
