import React, { FC, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import useForm from '~/hooks/useForm'
import Button from '~/components/button'
import Loading from '~/components/loading'
import Error from '~/components/error'
import FormErrors from '~/components/form-errors'
import { Props } from '~/components/add-comment/types'
import { UserForm } from '~/styles/components/form'
import { Wrapper } from '~/components/add-comment/styles'
import { ADD_COMMENT } from '~/components/add-comment/schema'
import { GET_STORES } from '~/pages/all-stores/schema'

const AddComment: FC<Props> = ({ id }) => {
	const [errors, setErrors] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleAddComment, { _id: '', body: '' })

	const { body }: any = values

	const [addComment, { loading, error }] = useMutation(ADD_COMMENT, {
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		variables: { _id: id, body },
		refetchQueries: [{ query: GET_STORES }]
	})

	if (error) {
		console.log(error)
		return <Error message="Couldn't add comment" />
	}

	if (loading) return <Loading />

	function handleAddComment() {
		addComment()
	}

	return (
		<Wrapper>
			<h3>Add a comment</h3>
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
				<Button type="submit" text="Add" />
				<FormErrors errors={errors} />
			</UserForm>
		</Wrapper>
	)
}

export default AddComment
