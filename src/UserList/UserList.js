import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../User/User';
import './UserList.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list-container">
      <h1>List of Users</h1>
      {listOfUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
