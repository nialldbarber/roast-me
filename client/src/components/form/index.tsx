import React, { FC } from 'react'
import Button from '~@components/button'
import { Props } from '~@components/form/types'

const Form: FC<Props> = ({ options }) => (
	<form>
		{options.map((option, i) => (
			<label key={i}>
				{option}:
				<input type={option === 'password' ? 'password' : 'text'} />
			</label>
		))}
		<Button type="button" text="Add" />
	</form>
)

export default Form
