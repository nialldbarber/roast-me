import React, { FC, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { AuthContext } from '~/state/auth'
import Loading from '~/components/loading'
import Comments from '~/components/comments'
import AddComment from '~/components/add-comment'
import Likes from '~/components/likes'
import StoreInfo from '~/components/store-info'
import Ratings from '~/components/ratings'
import { ImgWrapper } from '~/pages/individual-store/styles'
import { PageContainer } from '~/styles/components/container'
import { Title } from '~/styles/components/title'
import { GET_INDIVIDUAL_STORE } from '~/pages/individual-store/schema'
import { Props } from '~/pages/individual-store/types'
import img from '~/assets/images/coffee-background.jpg'

const IndividualStore: FC<Props> = ({ match }) => {
	const { user } = useContext(AuthContext)
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_STORE, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) return <p>Error ${error.message}</p>

	const { _id, name, location, rating, likes, comments, ratingAverage } = data.getIndividualStore

	return (
		<PageContainer className="store">
			<ImgWrapper>
				<img src={img} alt="Hero image" />
			</ImgWrapper>
			<Title className="stores">{name}</Title>
			<Likes likes={likes} id={_id} />
			<StoreInfo location={location} rating={rating} />
			{ratingAverage.length > 0 ? <Ratings ratingAverage={ratingAverage} /> : ''}
			{user ? <AddComment id={_id} /> : ''}
			{comments.length > 0 ? <Comments comments={comments} /> : ''}
		</PageContainer>
	)
}

export default IndividualStore
