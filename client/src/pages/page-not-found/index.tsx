import React, { FC } from 'react'
import Button from '~@components/button'
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'

const PageNotFound: FC = ({ history }) => {
	return (
		<PageContainer>
			<Title>This page does not exist!</Title>
			<Button text="Return home?" action={() => history.push('/')} />
		</PageContainer>
	)
}

export default PageNotFound
