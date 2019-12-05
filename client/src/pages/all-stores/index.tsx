import React from 'react'
import { useQuery } from '@apollo/react-hooks'
// Components
import Loading from '~/components/loading'
import Error from '~/components/error'
import Card from '~/components/card'
// Styles
import { Cards } from '~/pages/all-stores/styles'
import { PageContainer } from '~/styles/components/container'
import { Title } from '~/styles/components/title'
// Schema
import { GET_STORES } from '~/pages/all-stores/schema'
// Types
import { StoreProps } from '~/pages/all-stores/types'

const AllStores = () => {
	const { loading, error, data } = useQuery(GET_STORES)

	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	return (
		<PageContainer>
			<Title>Store List</Title>
			<Cards>
				{data.getAllStores.map(({ _id, name, likes }: StoreProps) => (
					<Card key={_id} id={_id} name={name} likes={likes} type="Store" />
				))}
			</Cards>
		</PageContainer>
	)
}

export default AllStores
