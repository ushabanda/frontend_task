export const getUsers = () => async dispatch => {
  try{
    const response = await fetch('http://example.com/users')
    const parsedResponse = await response.json()
    dispatch({
      type: 'LIST_USERS',
      payload: parsedResponse
    });
  }catch(e){
    console.log(e);
  }
};

export const addUser = (payload) => async dispatch => {
  try{
    const response = await fetch("http://example.com/user", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const parsedResponse = await response.json()
    if(parsedResponse.success){
      dispatch(getUsers());
    }
  }catch(e){
    console.log(e);
  }
};

export const delUser = (userId) => async dispatch => {
  try {
    const response = await fetch(`http://example.com/user/${userId}`, {
      method: "DELETE"
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch(getUsers());
    }
  } catch (e) {
    console.log(e);
  }
};

export const editUser = (payload) => async dispatch => {
  try {
    const response = await fetch(`http://example.com/user/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch(getUsers());
    }
  } catch (e) {
    console.log(e);
  }
};

export const setEditedUser = (user) => ({
  type: "SET_EDITED_USER",
  payload: user,
});

export const clearEditedUser = () => ({
  type: "CLEAR_EDITED_USER",
});