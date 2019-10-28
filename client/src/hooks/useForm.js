import { useState } from 'react'

const useForm = (callback, initialState = {}) => {
	const [values, setValues] = useState(initialState)

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		callback()
		setValues(initialState)
	}

	return {
		values,
		handleChange,
		handleSubmit
	}
}

export default useForm
