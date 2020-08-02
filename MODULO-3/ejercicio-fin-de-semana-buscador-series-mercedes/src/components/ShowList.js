import React from 'react';
import Show from './Show';

const ShowList = (props) => {
  const seriesElements = props.series.map((serie) => {
    return <Show key={serie.id} serie={serie} />;
  });
  return (
    <div className='ShowList'>
      <ul className='ShowList-header'>{seriesElements}</ul>
    </div>
  );
};

export default ShowList;
