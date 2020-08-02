import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Filters from './Filters';
import UserList from './UserList';
import UserDetail from './UserDetail';
import getDataFromApi from '../servicios/getDataFromApi';

const App = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [citiesFilter, setCitiesFilter] = useState([]);
  // console.log(users);
  useEffect(() => {
    // console.log(`me estoy montando`);
    getDataFromApi().then((data) => {
      setUsers(data);
    });
  }, []);

  // event handlers

  const handleFilter = (data) => {
    // console.log('Manejando los filtros', data);
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'gender') {
      setGenderFilter(data.value);
    } else if (data.key === 'location') {
      if (data.checked === true) {
        const newCitiesFilter = [...citiesFilter];
        newCitiesFilter.push(data.value);
        setCitiesFilter(newCitiesFilter);
      } else {
        const newCitiesFilter = citiesFilter.filter((city) => {
          return city !== data.value;
        });
        setCitiesFilter(newCitiesFilter);
        // const newCitiesFilter = [...citiesFilter];
        // const cityIndex = newCitiesFilter.indexOf(data.value);
        // newCitiesFilter.splice(cityIndex, 1);
        // setCitiesFilter(newCitiesFilter);
      }
    }
  };
  // console.log('Name:', nameFilter);
  // console.log('Gender:', genderFilter);

  const filteredUsers = users
    .filter((user) => {
      // devolver booleano true/false en funcion de los filtros
      return user.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((user) => {
      // console.log(user);
      if (genderFilter === 'all') {
        return true;
      } else {
        return user.gender === genderFilter;
      }
      // return genderFilter === 'all' ? true : user.gender === genderFilter;
    })
    .filter((user) => {
      if (citiesFilter.length === 0) {
        return true;
      } else {
        return citiesFilter.includes(user.city);
      }
      // return citiesFilter.length === 0 ? true : citiesFilter.includes(user.city);
    });
  // console.log(filteredUsers);

  const renderUserDetail = (props) => {
    // console.log(props.match.params.userid,users);
    const userId = props.match.params.userid;
    const foundUser = users.find((user) => {
      // console.log(user);
      // console.log(user.id);
      return user.id === userId;
    });
    // console.log(foundUser);
    // if (foundUser !== undefined) {
    return <UserDetail user={foundUser} />;
    // }
  };
  const getCities = () => {
    return users.map((user) => user.city);
  };
  // console.log(citiesFilter);
  return (
    <>
      <h1 className='title--big'>Directorio de personas</h1>
      <div className='col2'>
        <Filters cities={getCities()} handleFilter={handleFilter} />
        <UserList users={filteredUsers} />
        <Switch>
          <Route path='/user/:userid' render={renderUserDetail} />
        </Switch>
      </div>
    </>
  );
};

export default App;
