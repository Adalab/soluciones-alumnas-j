import React from 'react';
import FiltersByName from './FiltersByName';
import FiltersByGender from './FiltersByGender';
import FiltersByCities from './FiltersByCities';

const Filters = (props) => {
  // console.log(props);
  return (
    <section>
      <form>
        <FiltersByName handleFilter={props.handleFilter} />
        <FiltersByGender handleFilter={props.handleFilter} />
        <FiltersByCities
          cities={props.cities}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
