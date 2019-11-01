import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
// Styles
import { Container, Wrapper } from '~@components/comments/styles'
// Types
import { Props, CommentProps } from '~@components/comments/types'

const Comments: FC<Props> = ({ comments }) => {
	console.log(comments)
	return (
		<Container>
			<h3>Comments</h3>
			{comments.map(({ _id, body, username, createdAt, userId }: CommentProps) => (
				<Wrapper key={_id}>
					<NavLink to={`/user/${userId}`}>
						{username}
					</NavLink>
					<p>Commented at: {createdAt}</p>
					<p>{body}</p>
				</Wrapper>
			))}
		</Container>
	)
}

export default Comments
