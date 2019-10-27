import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Loading from '~@components/loading'
import Comments from '~@components/comments'
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
import { GET_INDIVIDUAL_STORE } from '~@pages/individual-store/schema'
import { Props } from '~@pages/individual-store/types'

const IndividualStore: FC<Props> = ({ match }) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_STORE, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) return <p>Error :( ${error.message}</p>

	const { name, location, description, rating, likes, comments } = data.getIndividualStore

	console.log(comments)

	return (
		<PageContainer>
			<Title>{name}</Title>
			<p>{location}</p>
			<p>{description}</p>
			<p>{rating}</p>
			<Comments />
		</PageContainer>
	)
}

export default IndividualStore
