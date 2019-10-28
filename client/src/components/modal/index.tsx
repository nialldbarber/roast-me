import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
// Hooks 
import useLockBodyScroll from '~@hooks/useLockBodyScroll'
// Components
import Button from '~@components/button'
// Styles
import { Container, Box } from '~@components/modal/styles'
// Types
import { Props } from '~@components/modal/types'
// Assets
import exit from '~@assets/icons/cross.svg'

const Modal: FC<Props> = ({ title, message, button, action, active, close }) => {
	useLockBodyScroll()

	return (
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
}

export default Modal
