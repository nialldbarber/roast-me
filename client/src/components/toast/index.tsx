import React, { FC, useState } from 'react'
import Button from '~@/components/button'
import close from '~@assets/icons/cross.svg'
import { Props } from '~@components/toast/types'

const Toast: FC<Props> = ({ error, message }) => {
	const [ active, setActive ] = useState(true)

	return (
		<div className={`toast ${error && active ? 'active' : ''} toast-${error}`}>
			<p>
				<span>{message}</span>
				<Button className="toaster" icon={close} action={() => setActive(false)} />
			</p>
		</div>
	)
}

export default Toast
