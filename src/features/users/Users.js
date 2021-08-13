import React from "react";
// add any needed imports here
import {useSelector} from 'react-redux'
// import {const state = useSelector(state => state.state)}

function Users() {
  const users = useSelector(state => state.users)
  const userCount = useSelector(state => state.users.length)
  return (
    <div>
      <ul>
        Users!
        {users.map(user => <li key={user.username}>{user.username} {user.hometown}</li>)}
        Total Users: {userCount}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
