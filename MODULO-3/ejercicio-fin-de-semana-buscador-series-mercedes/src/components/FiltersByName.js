import React from 'react';

const FiltersByName = (props) => {
  // console.log(props);
  const handleChange = (ev) => {
    // console.log(ev);
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  /* const getDataFromApi = (ev) => {
    return fetch(`http://api.tvmaze.com/search/shows?q=${ev.target.value}`) //girls={input.value}
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return data.map((dataShow) => {
          // console.log(dataShow.show);

          return {
            id: dataShow.show.id,
            image: dataShow.show.image,
            name: dataShow.show.name,
            score: dataShow.score,
            status: dataShow.show.status,
          };
        });
      });
  }; */

  return (
    <>
      <label className='form__label display-block' htmlFor='name'>
        Filtrar por nombre:
      </label>
      <input
        className='form__input-text'
        type='text'
        name='name'
        id='name'
        onChange={handleChange}
      />
    </>
  );
};

export default FiltersByName;
