import React from 'react';
import User from './User';

function UserList(props) {
  // console.log(props);
  const userElements = props.users.map((user) => {
    return <User key={user.id} user={user} />;
  });

  return (
    <section>
      <ul className='cards'>{userElements}</ul>
    </section>
  );
}

export default UserList;
