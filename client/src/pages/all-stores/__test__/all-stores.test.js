import React from 'react'
import renderer from 'react-test-renderer'
import { MockedProvider } from '@apollo/react-testing'

import { GET_STORES } from '~/pages/all-stores/schema'
import AllStores from '~/pages/all-stores'

const mocks = [
	{
		request: {
			query: GET_STORES,
			variables: {
				name: 'Coffee shop'
			}
		},
		result: {
			data: {
				getAllStores: {
					_id: '5db728be69aec2a2169af083',
					name: 'Coffee shop',
					description: 'It was really good',
					location: 'Bristol',
					rating: 10
				}
			}
		}
	}
]

it('renders without errors', () => {
	renderer.create(
		<MockedProvider mocks={mocks} addTypename={false}>
			<AllStores name="Coffee shop" />
		</MockedProvider>
	)
})
