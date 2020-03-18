import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
import { Container } from '~/components/footer/styles'
import logo from '~/assets/images/logo.svg'

const Footer: FC = () => (
	<Container>
		<SVG src={logo} alt="Logo" aria-label="Logo" />
	</Container>
)

export default Footer
