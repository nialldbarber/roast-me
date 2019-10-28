import React, { FC, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
// Hooks
import useForm from '~@hooks/useForm'
// Components
import Button from '~@components/button'
import Loading from '~@components/loading'
import FormErrors from '~@components/form-errors'
import { Props } from '~@components/add-comment/types'
// Styles
import { UserForm } from '~@styles/components/form'
// Schema
import { ADD_COMMENT } from '~@components/add-comment/schema'

const AddComment: FC<Props> = ({ id }) => {
	const [errors, setErrors] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleAddComment, { _id: '', body: '' })

	const { body } = values

	const [addComment, { loading, error }] = useMutation(ADD_COMMENT, {
		update(_, result) {
			console.log(result)
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		variables: { _id: id, body }
	})

	if (error) console.log(`Error: ${error}`)
	if (loading) return <Loading />

	function handleAddComment() {
		addComment()
	}

	return (
		<div>
			<h3>Add a comment!</h3>
			<UserForm className="active" onSubmit={handleSubmit} noValidate>
				<label htmlFor="body">
					<input
						type="text"
						name="body"
						value={body}
						placeholder="Add a comment..."
						className={errors.body ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<Button text="Add" />
				<FormErrors errors={errors} />
			</UserForm>
		</div>
	)
}

export default AddComment
