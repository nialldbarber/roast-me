import React, { useState } from 'react'
import axios from 'axios'
import Toast from '~@components/toast'
import Button from '~@components/button'
import Rating from '~@components/rating'

const AddStore = () => {
  // Store
  const [store, setStore] = useState({
    name: '',
    description: '',
    rating: '',
  })

  // Catch errors
  const [error, setError] = useState({
    status: '',
    message: '',
  })

  // Store model
  const { name, description, rating } = store
  const { status, message } = error

  // Methods
  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newStore = {
        name,
        description,
        rating,
      }

      axios
        .post(`http://localhost:7777/add`, newStore)
        .then((res) => {
          console.log(res.data)
          setError({ status: 'success', message: `Wooo, ${name} has been added! 🔥` })
        })
        .catch((err) => {
          if (!err.ok) {
            setError({ status: 'error', message: `Noooo, ${name} already exists! 🤷‍♂️` })
          }
        })
    } else {
      setError({ status: 'warning', message: `Dude enter something!` })
    }
  }

  return (
    <div className="container">
      <h2 className="title">Add Store</h2>
      <Toast error={status} message={message} link={name} />
      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <label htmlFor={name}>
          Name:
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
        {/* DESCRIPTION */}
        <label htmlFor={description}>
          Review:
          <textarea value={description} name="description" onChange={handleChange} />
        </label>
        <label htmlFor={rating}>
          Rating:
          <input type="number" value={rating} name="rating" onChange={handleChange} />
        </label>
        <Rating />
        <Button type="button" text="Add" />
      </form>
    </div>
  )
}

export default AddStore
