import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_INDIVIDUAL_STORE } from '~@pages/individual-store/schema'
import Loading from '~@components/loading'
import { PageContainer } from '~@styles/components/container'
import { Props } from '~@pages/individual-store/types'

const IndividualStore: FC<Props> = ({ match }) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_STORE, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) return <p>Error :( ${error.message}</p>

	const { name, location, description, rating } = data.getIndividualStore

	return (
		<PageContainer>
			<h2 className="store-name">{name}</h2>
			<p>{location}</p>
			<p>{description}</p>
			<p>{rating}</p>
		</PageContainer>
	)
}

export default IndividualStore
