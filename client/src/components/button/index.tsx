import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
// Styles
import { Btn } from '~/styles/components/button'
// Types
import { Props } from '~/components/button/types'

const Button: FC<Props> = ({ text, icon, action, id, type }) => (
	<Btn className="btn" type={type} onClick={action} id={id}>
		<span>
			<span>{text}</span>
			{icon ? <SVG src={icon} className="close-btn" /> : ''}
		</span>
	</Btn>
)

export default Button
