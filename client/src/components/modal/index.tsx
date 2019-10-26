import React, { FC } from 'react'
import { Container, Box } from '~@components/modal/styles'
import { Props } from '~@components/modal/types'

const Modal: FC<Props> = ({ title, message, button, action, active }) => (
	<Container className={active ? `active` : ''}>
		<Box>
			<h3>{title}</h3>
			<p>{message}</p>
			<button onClick={action}>{button}</button>
		</Box>
	</Container>
)

export default Modal
