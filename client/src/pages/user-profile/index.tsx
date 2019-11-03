import React, { FC } from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
// Components
import Loading from '~@components/loading'
import Error from '~@components/error'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Schema
import { GET_INDIVIDUAL_USER } from '~@pages/user-profile/schema'
// Types
import { Props } from '~@pages/user-profile/types'

const UserProfile: FC<Props> = ({ match, history }) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_USER, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) {
		console.log(error)
		return <Error message="Shit" history={history} />
	}

	return (
		<PageContainer>
			<Title>{data.getIndividualUser.username}</Title>
			<p>
				{data.getIndividualUser.username} has added {data.getIndividualUser.storesAdded.length} stores
			</p>
		</PageContainer>
	)
}

export default withRouter(UserProfile)
