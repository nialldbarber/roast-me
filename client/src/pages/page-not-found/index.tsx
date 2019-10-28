import React, { FC } from 'react'
// Components
import Button from '~@components/button'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Types
import { Props } from '~@pages/page-not-found/types'

const PageNotFound: FC<Props> = ({ history }) => (
	<PageContainer>
		<Title>This page does not exist!</Title>
		<Button text="Return home?" action={() => history.push('/')} />
	</PageContainer>
)

export default PageNotFound
