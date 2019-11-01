import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
// Components
import Loading from '~@components/loading'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Schema
import { GET_INDIVIDUAL_USER } from '~@pages/user-profile/schema'
// Types
import { Props } from '~@pages/user-profile/types'

const UserProfile: FC<Props> = ({ match }) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_USER, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) return <p>Error :( ${error.message}</p>

	return (
		<PageContainer>
			<Title>{data.getIndividualUser.username}</Title>
		</PageContainer>
	)
}

export default UserProfile
