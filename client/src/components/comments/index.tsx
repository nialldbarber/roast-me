import React, { FC } from 'react'
// Styles
import { Container, Wrapper } from '~@components/comments/styles'
// Types
import { Props, CommentProps } from '~@components/comments/types'

const Comments: FC<Props> = ({ comments }) => (
	<Container>
		<h3>Comments</h3>
		{comments.map(({ _id, body, username, createdAt }: CommentProps) => (
			<Wrapper key={_id}>
				<p>Username: {username}</p>
				<p>Commented at: {createdAt}</p>
				<p>{body}</p>
			</Wrapper>
		))}
	</Container>
)

export default Comments
