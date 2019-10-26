import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
import { Btn } from '~@styles/components/button'
import { Props } from '~@components/button/types'

const Button: FC<Props> = ({ text, icon, action }) => (
	<Btn className="btn" type="submit" onClick={action}>
		<span>
			<span>{text}</span>
			{icon ? <SVG src={icon} className="close-btn" /> : ''}
		</span>
	</Btn>
)

export default Button
