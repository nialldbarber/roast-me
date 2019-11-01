import React, { FC } from 'react'
// Types
import { Props } from '~@components/error/types'

const Error: FC<Props> = ({ message }) => (
	<div>
		<p>{message}</p>
		<p>Wuh woh! Looks like there was an error 😢</p>
	</div>
)

export default Error
