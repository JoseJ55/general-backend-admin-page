import React from 'react';
import './Users.css';

import PopupUsers from '../PopupUsers/PopupUsers';

// Shows both all users and recent users.
function Users() {
  return (
    <div id="users">
      <PopupUsers />
    </div>
  );
}

export default Users;
