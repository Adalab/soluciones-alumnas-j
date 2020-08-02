import React from 'react';

const FiltersByName = (props) => {
  // console.log(props.handleFilter);
  const handleChange = (ev) => {
    // console.log(ev.type, ev.target.value); //Para probar cual se ejecuta antes de onChange={handleChange}, keyUp={handleChange} y keyDown={handleChange}
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
