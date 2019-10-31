import React, { FC, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import LazyLoad from 'react-lazyload'
// State
import { AuthContext } from '~@state/auth'
// Components
import Loading from '~@components/loading'
import Comments from '~@components/comments'
import AddComment from '~@components/add-comment'
import Likes from '~@components/likes'
import StoreInfo from '~@components/store-info'
// Styles
import { ImgWrapper } from '~@pages/individual-store/styles'
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Schema
import { GET_INDIVIDUAL_STORE } from '~@pages/individual-store/schema'
// Types
import { Props } from '~@pages/individual-store/types'
// Assets
import img from '~@assets/images/coffee-background.jpg'

const IndividualStore: FC<Props> = ({ match }) => {
	const { user } = useContext(AuthContext)
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_STORE, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) return <p>Error :( ${error.message}</p>

	const { _id, name, location, rating, likes, comments } = data.getIndividualStore

	console.log(comments)

	return (
		<PageContainer className="store">
			<ImgWrapper>
				<LazyLoad height={200}>
					<img src={img} alt="Hero image" />
				</LazyLoad>
			</ImgWrapper>
			<Title className="stores">{name}</Title>
			<StoreInfo location={location} rating={rating} />
			{user ? <AddComment id={_id} /> : ''}
			{comments.length > 0 ? <Comments comments={comments} /> : ''}
			<Likes likes={likes} id={_id} />
		</PageContainer>
	)
}

export default IndividualStore
