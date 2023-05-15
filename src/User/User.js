import React from 'react';
import './User.css';

const User = ({ user }) => {
  return (
    <div className="user-container">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <hr />
    </div>
  );
};

export default User;
