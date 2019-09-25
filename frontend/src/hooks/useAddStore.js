import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_STORE } from '~@pages/add-store/schema'

const useAddStore = () => {
	// state
	const [ store, setStore ] = useState({
		name: '',
		location: '',
		description: '',
		rating: ''
	})

	const [ storeError, setStoreError ] = useState({
		status: '',
		message: ''
	})

	const { name, location, description, rating } = store
	const { status, message } = storeError

	// apollo
	const [ createStore, { error } ] = useMutation(CREATE_STORE, {
		variables: { name, location, description, rating: parseInt(rating) },
		// re-fetch queries
		refetchQueries: [ 'getAllStores' ]
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
				location: '',
				description: '',
				rating: ''
			})
			setStoreError({
				status: 'success',
				message: `Wooo, ${name} has been added! 🔥`
			})
		} else {
			setStoreError({
				status: 'warning',
				message: `Dude enter something!`
			})
		}
	}

	return {
		store,
		storeError,
		handleChange,
		handleSubmit
	}
}

export default useAddStore
