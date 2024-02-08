import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const UserManager = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // TODO: handle all the possible responses
        setUsers(data.data)        
        });
  }, []);

  const UserList = () => {
    return (
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <div>
      <h1>Users</h1>
      <UserList />
    </div>
  );
}

export default UserManager;
