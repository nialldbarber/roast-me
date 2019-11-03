import React, { FC, Fragment, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
// Hooks
import useForm from '~@hooks/useForm'
// Components
import Button from '~@components/button'
import Loading from '~@components/loading'
import Error from '~@components/error'
import FormErrors from '~@components/form-errors'
// Styles
import { Wrapper } from '~@pages/login-register/styles'
import { UserForm } from '~@styles/components/form'
// Schema
import { CREATE_STORE } from '~@components/add-store/schema'
import { GET_STORES } from '~@pages/all-stores/schema'
// Types
import { Props, Values } from '~@components/add-store/types'

const AddStoreForm: FC<Props> = ({ visibility, page }) => {
	const [ errors, setErrors ] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleAddStore, {
		name: '',
		location: '',
		description: '',
		rating: ''
	})

	const { name, location, description, rating }: Values = values

	const [ createStore, { loading, error } ] = useMutation(CREATE_STORE, {
		update(_, result) {
			page.history.push('/')
			console.log(result)
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		variables: { name, location, description, rating: parseInt(rating) },
		refetchQueries: [ { query: GET_STORES } ]
	})

	if (error) return <Error />
	if (loading) return <Loading />

	function handleAddStore() {
		createStore()
	}

	return (
		<Fragment>
			<Wrapper>
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
					<Button text="Add" />
					<FormErrors errors={errors} />
				</UserForm>
			</Wrapper>
		</Fragment>
	)
}

export default AddStoreForm
