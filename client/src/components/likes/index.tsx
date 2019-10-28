import React, { FC } from 'react'
import { useMutation } from '@apollo/react-hooks'
// Components
import Button from '~@components/button'
import Loading from '~@components/loading'
// Types
import { Props } from '~@components/likes/types'
// Schema
import { LIKE_STORE } from '~@components/likes/schema'
import { GET_STORES } from '~@pages/all-stores/schema'

const Likes: FC<Props> = ({ likes, id }) => {
	const [likeStore, { loading, error }] = useMutation(LIKE_STORE, {
		variables: { _id: id },
		refetchQueries: [{ query: GET_STORES }]
	})

	if (error) console.log(`Error: ${error}`)
	if (loading) return <Loading />

	return (
		<div>
			<p>Likes</p>
			<h1>{likes.length}</h1>
			<Button text="Like" action={likeStore} />
		</div>
	)
}

export default Likes
