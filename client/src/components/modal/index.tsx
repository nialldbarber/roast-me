import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
import { Container, Box } from '~@components/modal/styles'
import Button from '~@components/button'
import { Props } from '~@components/modal/types'
import exit from '~@assets/icons/cross.svg'

const Modal: FC<Props> = ({ title, message, button, action, active, close }) => (
	<Container className={active ? `active` : ''}>
		<Box>
			<div className="close-container" id="close" onClick={close}>
				<SVG src={exit} className="close-btn" />
			</div>
			<h3>{title}</h3>
			<p>{message}</p>
			<Button text={button} action={action} />
		</Box>
	</Container>
)

export default Modal
