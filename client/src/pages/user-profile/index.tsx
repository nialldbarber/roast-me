import React, { FC, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
// State
import { AuthContext } from '~@state/auth'
// Components
import Loading from '~@components/loading'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Schema
import { GET_INDIVIDUAL_USER } from '~@pages/user-profile/schema'

const UserProfile: FC = () => {
	const { user } = useContext(AuthContext)
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_USER, {
		variables: { _id: user.id }
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
