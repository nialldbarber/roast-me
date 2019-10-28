import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_STORES } from '~@pages/all-stores/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import { PageContainer } from '~@styles/components/container'
import { StoreProps } from '~@pages/all-stores/types'
import { Cards, LikeCount } from '~@pages/all-stores/styles'
import { Title } from '~@styles/components/title'
import { randomCoffeeImageGenerator } from '~@utils'

const AllStores = () => {
	const { loading, error, data } = useQuery(GET_STORES)

	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	return (
		<PageContainer>
			<Title>Store List</Title>
			<Cards>
				{data.getAllStores.map(({ _id, name, likes }: StoreProps) => (
					<div className="card" key={_id}>
						<Link to={`/store/${_id}`}>
							<div className="inner" name={name}>
								<h3>{name}</h3>
								<img src={randomCoffeeImageGenerator()} alt="Store images" />
								{likes.length > 0 ? <LikeCount>{likes.length}</LikeCount> : ''}
							</div>
						</Link>
					</div>
				))}
			</Cards>
		</PageContainer>
	)
}

export default AllStores
