import React, { FC } from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
// Utils 
import { getUserBadgeFromStoresAdded } from '~@utils/user'
// Components
import Loading from '~@components/loading'
import Error from '~@components/error'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Schema
import { GET_INDIVIDUAL_USER } from '~@pages/individual-user/schema'
// Types
import { Props } from '~@pages/individual-user/types'

const IndividualUser: FC<Props> = ({ match, history }) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_USER, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) {
		console.log(error)
		return <Error message="Error getting user profile" history={history} />
	}

	return (
		<PageContainer>
			<Title>{data.getIndividualUser.username}</Title>
			<p>
				{data.getIndividualUser.username} has added {data.getIndividualUser.storesAdded.length} stores
			</p>
			<p>{getUserBadgeFromStoresAdded(data.getIndividualUser.storesAdded.length)}</p>
		</PageContainer>
	)
}

export default withRouter(IndividualUser)
