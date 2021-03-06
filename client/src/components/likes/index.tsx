import React, { FC, useState, useEffect, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from '~/state/auth'
import Button from '~/components/button'
import Loading from '~/components/loading'
import LikeCount from '~/components/like-count'
import { Container, Wrapper } from '~/components/likes/styles'
import { LIKE_STORE } from '~/components/likes/schema'
import { GET_STORES } from '~/pages/all-stores/schema'
import { Props } from '~/components/likes/types'

const Likes: FC<Props> = ({ likes, id }) => {
	const [liked, setLiked] = useState<boolean>(false)
	const { user } = useContext(AuthContext)
	const [likeStore, { loading, error }] = useMutation(LIKE_STORE, {
		variables: { _id: id },
		refetchQueries: [{ query: GET_STORES }]
	})

	useEffect(
		() => {
			if (user && likes?.find((like: any) => like.username === user.username)) {
				setLiked(true)
			} else {
				setLiked(false)
			}
		},
		[user, likes]
	)

	if (error) console.log(`Error: ${error}`)
	if (loading) return <Loading />

	return (
		<Container>
			<Wrapper className={liked ? 'active' : ''}>
				{user ? <Button type="button" text={liked ? 'Liked' : 'Like'} action={likeStore} /> : ''}
				<LikeCount likes={likes} />
			</Wrapper>
		</Container>
	)
}

export default Likes
