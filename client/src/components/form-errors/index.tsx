import React from 'react'
import { Wrapper } from '~@components/form-errors/styles'

const FormErrors = ({ errors }) => (
	<Wrapper>
		{Object.keys(errors).length > 0 &&
			Object.values(errors).map((val, i) => (
				<p key={i} className="form-errors">
					<span>{val}</span>
				</p>
			))}
	</Wrapper>
)

export default FormErrors
