import React, { useState } from 'react';
import axios from 'axios';
import Toast from '../components/toast';
import Button from '../components/button';

export default function AddStore() {
  const [store, setStore] = useState({
    name: '',
    description: '',
    tags: [],
  });
  const [error, setError] = useState(false);

  const { name, description, tags } = store;

  const handleChange = e => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newStore = {
      name,
      description,
      tags,
    };

    console.log(newStore);
    axios
      .post(`http://localhost:7777/add`, newStore)
      .then(res => console.log(res.data))
      .catch(err => {
        if (!err.ok) {
          setError(true);
        }
      });
  };

  return (
    <div className="container">
      <h2>Add Store</h2>
      <Toast
        error={error}
        message={`Noooo, ${name} already exists! 🤷‍♂️`}
        link={name}
      />
      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <label htmlFor={name}>
          Name:
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
        {/* DESCRIPTION */}
        <label htmlFor={description}>
          Review:
          <textarea
            value={description}
            name="description"
            onChange={handleChange}
          />
        </label>
        <Button text="Add" />
      </form>
    </div>
  );
}
