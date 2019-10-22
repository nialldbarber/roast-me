import React from 'react'
import useAddStore from '~@hooks/useAddStore'
import Toast from '~@components/toast'
import Button from '~@components/button'
import Rating from '~@components/rating'

const AddStore = () => {
	const { store, storeError, handleChange, handleSubmit } = useAddStore()
	const { name, location, description, rating } = store
	const { status, message } = storeError

	return (
		<div className="container">
			<h2 className="title">Add Store</h2>
			<Toast error={status} message={message} link={name} />
			<form onSubmit={handleSubmit}>
				<label htmlFor={name}>
					Name:
					<input type="text" value={name} name="name" onChange={handleChange} />
				</label>
				<label htmlFor={location}>
					Location:
					<input type="text" value={location} name="location" onChange={handleChange} />
				</label>
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
