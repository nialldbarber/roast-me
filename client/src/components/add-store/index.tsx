import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import useForm from '~/hooks/useForm'
import Button from '~/components/button'
import Loading from '~/components/loading'
import Error from '~/components/error'
import FormErrors from '~/components/form-errors'
import { Wrapper } from '~/pages/login-register/styles'
import { UserForm } from '~/styles/components/form'
import { CREATE_STORE } from '~/components/add-store/schema'
import { GET_STORES } from '~/pages/all-stores/schema'
import { GET_ALL_USERS } from '~/pages/all-users/schema'
import { Props, Values } from '~/components/add-store/types'

const AddStoreForm: FC<Props> = ({ visibility }) => {
	const history = useHistory()
	const [errors, setErrors] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleAddStore, {
		name: '',
		location: '',
		description: '',
		rating: ''
	})

	const { name, location, description, rating }: Values = values

	const [createStore, { loading, error }] = useMutation(CREATE_STORE, {
		update() {
			history.push('/')
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		variables: { name, location, description, rating: parseInt(rating) },
		refetchQueries: [{ query: GET_STORES }, { query: GET_ALL_USERS }]
	})

	if (error) {
		console.log(error)
		return <Error message="Couldn't add store" />
	}

	if (loading) return <Loading />

	function handleAddStore() {
		createStore()
	}

	return (
		<Wrapper>
			<UserForm className={visibility ? 'active' : ''} onSubmit={handleSubmit} noValidate>
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
		</Wrapper>
	)
}

export default AddStoreForm
