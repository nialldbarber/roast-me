import React, { FC } from 'react'
import { Props } from '~@components/error/types'

const Error: FC<Props> = ({ message }) => (
	<div>
		<p>{message}</p>
	</div>
)

export default Error
