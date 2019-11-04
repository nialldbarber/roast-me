import React, { FC, useState } from 'react'
// Components
import Button from '~@components/button'
import { Props } from '~@components/toast/types'
// Styles
import { Container } from '~@components/toast/styles'
// Assets
import close from '~@assets/icons/cross.svg'

const Toast: FC<Props> = ({ error, message }) => {
	const [active, setActive] = useState(true)

	return (
		<Container className={`toast ${error && active ? 'active' : ''} toast-${error}`}>
			<p>
				<span>{message}</span>
				<Button type="button" className="toaster" icon={close} action={() => setActive(false)} />
			</p>
		</Container>
	)
}

export default Toast
