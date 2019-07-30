import React, { useState } from 'react';
import axios from 'axios';

export default function AddStore() {
  const [store, setStore] = useState({
    name: '',
    description: '',
    tags: [],
  });

  const { name, slug, description, tags } = store;

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
      .then(res => console.log(res.data));
  };

  return (
    <div>
      <h2>Add Store</h2>
      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <label htmlFor={name}>
          Name:
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
        {/* SLUG */}
        <label htmlFor={slug}>
          Slug:
          <input type="text" value={slug} name="slug" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
