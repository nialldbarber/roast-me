import React, { FC } from 'react'
import { Container, Wrapper } from '~@components/comments/styles'

const Comments: FC = ({ comments }) => {
	return (
		<Container>
			{comments.map(({ _id, body, username, createdAt }) => (
				<Wrapper key={_id}>
					<p>Username: {username}</p>
					<p>Commented at: {createdAt}</p>
					<p>{body}</p>
				</Wrapper>
			))}
		</Container>
	)
}

export default Comments
