import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Input } from "antd";

const InputHandler = ({ onSubmit, editMode, currentUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    if (editMode && currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [editMode, currentUser]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorList = {}
    if (!name) {
      errorList.name = 'Name is required!'

    }
    if (!email) {
      errorList.email = 'Email is required!'

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorList.email = "Please enter valid email";
    }

    if (Object.keys(errorList).length > 0) {
      setError(errorList)
      return
    }
    onSubmit({ name, email });
    setName('')
    setEmail('')
    setError({})
  };

  return (
    <div className="header-box">
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
        </div>
        <div>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
        </div>
        <div className="add-btn">
          <Button type="primary" htmlType="submit" >
             Add user
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputHandler;
