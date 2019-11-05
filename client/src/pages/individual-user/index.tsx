import React, { FC } from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
// Utils
import { getUserBadgeFromStoresAdded } from '~@utils/user'
// Components
import Loading from '~@components/loading'
import Error from '~@components/error'
import Card from '~@components/card'
// Styles
import { Cards } from '~@pages/all-stores/styles'
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

	const { username, storesAdded } = data.getIndividualUser

	return (
		<PageContainer>
			<Title>{username}</Title>
			<Cards>
				{storesAdded.map(({ _id, name, likes }) => (
					<Card key={_id} id={_id} name={name} likes={likes} type="Store" />
				))}
			</Cards>
			<p>{getUserBadgeFromStoresAdded(storesAdded.length)}</p>
		</PageContainer>
	)
}

export default IndividualUser
