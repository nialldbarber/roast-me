import React, { FC } from 'react'
import { useMutation } from '@apollo/react-hooks'
// Components
import Button from '~@components/button'
// Types
import { Props } from '~@components/likes/types'
// Schema
import { LIKE_STORE } from './schema'

const Likes: FC<Props> = ({ likes, id }) => {

	const [likeStore] = useMutation(LIKE_STORE, {
		variables: { _id: id }
	})

	return (
		<div>
			<p>Likes</p>
			<Button text="Like" action={likeStore} />
		</div>
	)
}

export default Likes
