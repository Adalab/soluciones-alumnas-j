import React from 'react';

const FiltersByState = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'status',
      checked: ev.target.checked,
    });
  };
  console.log(props);
  const statusElements = props.status.map((state, index) => {
    return (
      <label key={index} className='display-block'>
        <input
          type='checkbox'
          name='state'
          value={state}
          onChange={handleChange}
        />
        {state}
      </label>
    );
  });
  return (
    <>
      <label className='display-block'>Estado</label>
      {statusElements}
    </>
  );
};

export default FiltersByState;
