import React, { FC, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import LazyLoad from 'react-lazyload'
import SVG from 'react-inlinesvg'
// State
import { AuthContext } from '~@state/auth'
// Components
import Loading from '~@components/loading'
import Comments from '~@components/comments'
import AddComment from '~@components/add-comment'
import Likes from '~@components/likes'
// Styles
import { GET_INDIVIDUAL_STORE } from '~@pages/individual-store/schema'
import { ImgWrapper, StoreInfo } from '~@pages/individual-store/styles'
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Types
import { Props } from '~@pages/individual-store/types'
// Assets
import img from '~@assets/images/coffee-background.jpg'
import finder from '~@assets/icons/finder.svg'

const IndividualStore: FC<Props> = ({ match }) => {
	const { user } = useContext(AuthContext)
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_STORE, {
		variables: { _id: match.params.id }
	})

	if (loading) return <Loading />
	if (error) return <p>Error :( ${error.message}</p>

	const { _id, name, location, description, rating, likes, comments } = data.getIndividualStore

	return (
		<PageContainer className="store">
			<ImgWrapper>
				<LazyLoad height={200}>
					<img src={img} alt="Hero image" />
				</LazyLoad>
			</ImgWrapper>
			<Title className="stores">{name}</Title>
			<StoreInfo>
				<div className="location">
					<SVG src={finder} alt="Finder" aria-label="Finder" />
					<h3>{location}</h3>
				</div>
				<p>{rating}</p>
			</StoreInfo>
			{user ? <AddComment id={_id} /> : ''}
			{comments.length > 0 ? <Comments comments={comments} /> : ''}
			<Likes likes={likes} id={_id} />
		</PageContainer>
	)
}

export default IndividualStore
