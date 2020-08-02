import React from 'react';
const Show = (props) => {
  // const defaultImage =
  //   'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
  // if (props.serie.image !== null) {
  //   return props.serie.image.medium;
  // } else {
  //   return defaultImage;
  // }

  return (
    <div className='Show'>
      <img className='Show-img' src='' alt='show' />
      <h3 className='Show-header'>{props.serie.name}</h3>
      <span className='Show-header'>{props.serie.score}</span>
      <p className='Show-header'>{props.serie.status}</p>
    </div>
  );
};

export default Show;
