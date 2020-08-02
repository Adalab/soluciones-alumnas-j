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
