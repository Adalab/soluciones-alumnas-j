import React from 'react';
import FiltersByName from './FiltersByName';
import FiltersByState from './FiltersByState';

const Filters = (props) => {
  // console.log(props);
  return (
    <section>
      <form>
        <FiltersByName handleFilter={props.handleFilter} />
        <FiltersByState
          status={props.status}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
