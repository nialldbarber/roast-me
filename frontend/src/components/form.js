import React from 'react'
import PropTypes from 'prop-types'
import Button from '~@components/button'

const Form = ({ options }) => (
	<form>
		{options.map((option, i) => (
			<label key={i}>
				{option}:
				<input type="text" />
			</label>
		))}
		<Button type="button" text="Add" />
	</form>
)

export default Form

Form.propTypes = {
	options: PropTypes.array
}
