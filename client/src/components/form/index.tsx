import React, { FC } from 'react'
import Button from '~@components/button'
import { Props } from '~@components/form/types'

const Form: FC<Props> = ({ title, options, visibility }) => (
	<form style={{ opacity: visibility ? '1' : '0' }}>
		<p>{title}</p>
		{options.map((option: string, i: number) => (
			<label key={i}>
				{option}:
					<input type={option === 'password' ? 'password' : 'text'} />
			</label>
		))}
		<Button type="button" text="Add" />
	</form>
)

export default Form
