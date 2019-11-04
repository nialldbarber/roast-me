import React, { FC } from 'react'
// Components
import Button from '~@components/button'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Types
import { Props } from '~@components/error/types'

const Error: FC<Props> = ({ message, history }) => (
	<PageContainer>
		<Title>Error 😢</Title>
		<p>Wuh woh! Looks like there was an error</p>
		<Button type="button" text="Return home?" action={() => history.push('/')} />
	</PageContainer>
)

export default Error
