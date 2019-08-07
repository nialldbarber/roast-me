import React, { useState } from 'react';
import axios from 'axios';
import Toast from '../components/toast';
import Button from '../components/button';
import Rating from '../components/rating';
import Tags from '../components/tags';
import { MiniTags } from '../styles/components/tags';

export default function AddStore() {
  // Store
  const [store, setStore] = useState({
    name: '',
    description: '',
    rating: '',
    tags: []
  });
  // Tags
  const [tag, setTag] = useState([]);
  const [tagInput, setTagInput] = useState('');
  // Catch errors
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Store model
  const { name, description, rating, tags } = store;

  // Methods
  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
    console.log(tagInput);
  };

  const handleTagSubmit = () => {
    setTag([...tag, tagInput]);
    setTagInput('');
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
        <Rating />
        <div>
          {tag.map((item) => (
            <MiniTags className="tag">{item}</MiniTags>
          ))}
        </div>
        <Tags
          change={handleTagChange}
          value={tagInput}
          submit={handleTagSubmit}
          tag={tag}
        />
        <Button type="button" text="Add" />
      </form>
    </div>
  );
}
