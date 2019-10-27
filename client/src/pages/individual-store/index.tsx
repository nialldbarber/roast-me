import React, { FC, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import LazyLoad from 'react-lazyload'
import { AuthContext } from '~@state/auth'
import Loading from '~@components/loading'
import Comments from '~@components/comments'
import AddComment from '~@components/add-comment'
import Likes from '~@components/likes'
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
import { GET_INDIVIDUAL_STORE } from '~@pages/individual-store/schema'
import { Props } from '~@pages/individual-store/types'
import { ImgWrapper } from '~@pages/individual-store/styles'
import img from '~@assets/images/coffee-background.jpg'

const IndividualStore: FC<Props> = ({ match }) => {
	const { user } = useContext(AuthContext)
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_STORE, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) return <p>Error :( ${error.message}</p>

	const { _id, name, location, description, rating, likes, comments } = data.getIndividualStore

	return (
		<PageContainer>
			<ImgWrapper>
				<LazyLoad height={200}>
					<img src={img} alt="Hero image" />
				</LazyLoad>
			</ImgWrapper>
			<Title className="stores">{name}</Title>
			<p>{location}</p>
			<p>{description}</p>
			<p>{rating}</p>
			{user ? <AddComment id={_id} /> : ''}
			{comments.length > 0 ? <Comments comments={comments} /> : ''}
			<Likes likes={likes} />
		</PageContainer>
	)
}

export default IndividualStore
