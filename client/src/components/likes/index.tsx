import React, { FC, useState, useEffect, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import SVG from 'react-inlinesvg'
// State
import { AuthContext } from '~@state/auth'
// Components
import Button from '~@components/button'
import Loading from '~@components/loading'
// Styles
import { Container, Wrapper, LikeCount } from '~@components/likes/styles'
// Schema
import { LIKE_STORE } from '~@components/likes/schema'
import { GET_STORES } from '~@pages/all-stores/schema'
// Types
import { Props } from '~@components/likes/types'
// Assets
import mug from '~@assets/images/mug.svg'

const Likes: FC<Props> = ({ likes, id }) => {
	const [ liked, setLiked ] = useState<boolean>(false)
	const { user } = useContext(AuthContext)
	const [ likeStore, { loading, error } ] = useMutation(LIKE_STORE, {
		variables: { _id: id },
		refetchQueries: [ { query: GET_STORES } ]
	})

	useEffect(
		() => {
			if (user && likes.find((like) => like.username === user.username)) {
				setLiked(true)
			} else {
				setLiked(false)
			}
		},
		[ user, likes ]
	)

	if (error) console.log(`Error: ${error}`)
	if (loading) return <Loading />

	return (
		<Container>
			<Wrapper className={liked ? 'active' : ''}>
				{user ? <Button type="button" text={liked ? 'Liked' : 'Like'} action={likeStore} /> : ''}
				<LikeCount>
					<SVG src={mug} alt="Mug" aria-label="Mug" />
					<span>{likes.length}</span>
				</LikeCount>
			</Wrapper>
		</Container>
	)
}

export default Likes
