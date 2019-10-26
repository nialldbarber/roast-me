import React, { FC } from 'react'
import useAddStore from '~@hooks/useAddStore'
import Toast from '~@components/toast'
import Button from '~@components/button'
import Rating from '~@components/rating'
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'

const AddStore: FC = () => {
	const { store, storeError, handleChange, handleSubmit } = useAddStore()
	const { name, location, description, rating } = store
	const { status, message } = storeError

	return (
		<PageContainer>
			<Title>Add Store</Title>
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
		</PageContainer>
	)
}

export default AddStore
