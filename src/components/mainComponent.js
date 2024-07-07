import React, { useEffect } from "react";
import { useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, delUser, editUser, editedUser,setEditedUser, clearEditedUser } = props;
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = ({ name, email }) => {
    if (editMode && editedUser) {
      editUser({ id: editedUser.id, name, email });
      setEditMode(false);
      clearEditedUser(null);
    } else {
    const newId = userState.users.length > 0
      ? Math.max(...userState.users.map(user => user.id)) + 1
      : 1;
    addUser({id:newId, name, email });
  } };
  const handleEditUser = (user) => {
    setEditMode(true);
    setEditedUser(user);
  };
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} editMode={editMode} currentUser={editedUser} />
      <SimpleTable dataSource={userState.users} onDelUser = {delUser} onEditUser={handleEditUser}/>
    </div>
  );
}

export default MainComponent;
