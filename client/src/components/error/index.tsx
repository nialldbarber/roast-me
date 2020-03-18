import React, { FC } from 'react'
import Button from '~/components/button'
import { PageContainer } from '~/styles/components/container'
import { Title } from '~/styles/components/title'
import { Props } from '~/components/error/types'

const Error: FC<Props> = ({ message, history }) => (
	<PageContainer>
		<Title>Error 😢</Title>
		{message ? <p>{message}</p> : <p>Wuh woh! Looks like there was an error</p>}
		<Button type="button" text="Return home?" action={() => history.push('/')} />
	</PageContainer>
)

export default Error
