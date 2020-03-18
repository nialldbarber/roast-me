import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '~/components/button'
import { PageContainer } from '~/styles/components/container'
import { Title } from '~/styles/components/title'
import { Container } from '~/pages/page-not-found/styles'
import { Props } from '~/pages/page-not-found/types'

const PageNotFound: FC<Props> = () => {
	const history = useHistory()

	return (
		<PageContainer>
			<Title>This page does not exist!</Title>
			<Container>
				<Button type="button" text="Return home?" action={() => history.push('/')} />
			</Container>
		</PageContainer>
	)
}

export default PageNotFound
