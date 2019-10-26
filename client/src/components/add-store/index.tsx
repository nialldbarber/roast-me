import React, { FC, Fragment, useState, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from '~@state/auth'
import useForm from '~@hooks/useForm'
import Button from '~@components/button'
import Loading from '~@components/loading'
import FormErrors from '~@components/form-errors'
import { Props } from '~@components/form/types'
import { CREATE_STORE } from './schema'
import { GET_STORES } from '../../pages/all-stores/schema'
import { UserForm } from '~@styles/components/form'

const AddStoreForm: FC<Props> = ({ title, visibility, page }) => {
	const context = useContext(AuthContext)
	const [ errors, setErrors ] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleAddStore, {
		name: '',
		location: '',
		description: '',
		rating: ''
	})

	const { name, location, description, rating } = values

	const [ createStore, { loading, error } ] = useMutation(CREATE_STORE, {
		variables: { name, location, description, rating: parseInt(rating) },
		update() {
			page.history.push('/')
		},
		onError(err) {
			// setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		refetchQueries: [ { query: GET_STORES } ]
	})

	if (error) console.log(`Error: ${error}`)
	if (loading) return <Loading />

	function handleAddStore() {
		createStore()
	}

	return (
		<Fragment>
			{title}
			<UserForm className={`${visibility ? 'active' : ''}`} onSubmit={handleSubmit} noValidate>
				<label htmlFor="name">
					<input
						type="text"
						name="name"
						value={name}
						placeholder="Name"
						className={errors.name ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="location">
					<input
						type="text"
						name="location"
						value={location}
						placeholder="Location"
						className={errors.location ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="description">
					<textarea
						type="text"
						name="description"
						value={description}
						placeholder="Description"
						className={errors.description ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="rating">
					<input
						type="text"
						name="rating"
						value={rating}
						placeholder="Rating"
						className={errors.rating ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<Button type="submit" text="Add" />
				<FormErrors errors={errors} />
			</UserForm>
		</Fragment>
	)
}

export default AddStoreForm
