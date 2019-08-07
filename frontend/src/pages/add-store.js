import React, { useState } from 'react';
import axios from 'axios';
import Toast from '../components/toast';
import Button from '../components/button';

export default function AddStore() {
  const [store, setStore] = useState({
    name: '',
    description: '',
    rating: '',
    tags: []
  });
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { name, description, rating, tags } = store;

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newStore = {
        name,
        description,
        rating,
        tags
      };

      axios
        .post(`http://localhost:7777/add`, newStore)
        .then((res) => {
          console.log(res.data);
          setError('success');
          setErrorMessage(`Wooo, ${name} has been added! 🔥`);
        })
        .catch((err) => {
          if (!err.ok) {
            setError('error');
            setErrorMessage(`Noooo, ${name} already exists! 🤷‍♂️`);
          }
        });
    } else {
      setError('warning');
      setErrorMessage(`Dude enter something!`);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Add Store</h2>
      <Toast error={error} message={errorMessage} link={name} />
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
        <label htmlFor={rating}>
          Rating:
          <input
            type="number"
            value={rating}
            name="rating"
            onChange={handleChange}
          />
        </label>
        <Button text="Add" />
      </form>
    </div>
  );
}
