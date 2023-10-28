import React from "react";
import { useState } from "react";
import data from "./data";
const User = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const idVal = Date.now();
    const newUser = { id: idVal, name: name };
    const updateUsers = [...user, newUser];
    setUser(updateUsers);
    setName("");
  };
  const removeItem = (id) => {
    const updateVal = user.filter((person) => person.id !== id);
    setUser(updateVal);
  };
  return (
    <div className="form">
      <h2>Add Users</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Users List</h2>
      {user.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <button type="button" onClick={() => removeItem(person.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default User;
