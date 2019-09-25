import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const CREATE_STORE = gql`
  mutation CreateStore($name: String!, $description: String!, $rating: Int!) {
    createStore(name: $name, description: $description, rating: $rating) {
      name
      description
      rating
    }
  }
`

const useAddStore = () => {
  // state
  const [store, setStore] = useState({
    name: '',
    description: '',
    rating: '',
  })

  const [storeError, setStoreError] = useState({
    status: '',
    message: '',
  })

  const { name, description, rating } = store
  const { status, message } = storeError

  // apollo
  const [createStore, { error }] = useMutation(CREATE_STORE, {
    variables: { name, description, rating: parseInt(rating) },
    // re-fetch queries
    refetchQueries: ['getAllStores'],
  })

  if (error) {
    console.log(`Error: ${error}`)
  }

  // Change Inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setStore({ ...store, [name]: value })
  }

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && description && rating) {
      createStore()
      setStore({
        name: '',
        description: '',
        rating: '',
      })
      setStoreError({ status: 'success', message: `Wooo, ${name} has been added! 🔥` })
    } else {
      setStoreError({ status: 'warning', message: `Dude enter something!` })
    }
  }

  return {
    store,
    storeError,
    handleChange,
    handleSubmit,
  }
}

export default useAddStore
