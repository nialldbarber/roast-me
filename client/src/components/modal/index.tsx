import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
import useLockBodyScroll from '~/hooks/useLockBodyScroll'
import Button from '~/components/button'
import { Container, Box } from '~/components/modal/styles'
import { Props } from '~/components/modal/types'
import exit from '~/assets/icons/cross.svg'

const Modal: FC<Props> = ({ title, message, button, action, active, close }) => {
	useLockBodyScroll()

	return (
		<Container className={active ? `active` : ''}>
			<Box>
				<div className="close-container" id="close" onClick={close}>
					<SVG src={exit} className="close-btn" />
					<h3>{title}</h3>
				</div>
				<div className="modal-body">
					<p>{message}</p>
					<Button type="button" text={button} action={action} />
				</div>
			</Box>
		</Container>
	)
}

export default Modal
