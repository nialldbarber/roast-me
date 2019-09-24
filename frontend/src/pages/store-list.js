import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const GET_STORES = gql`
	{
		stores {
			_id
			name
		} 
	}
`

export default function StoreList() {
	const { loading, error, data } = useQuery(GET_STORES)

	if (loading) {return 'Loading...'}
  if (error) {return `Error! ${error.message}`}

	return (
		<div className="container">
		<h2 className="title">Store List</h2>
			<section className="cards">
				{data.stores.map(({ name, _id }) => (
					<div className="card" key={_id}>
						<Link to={`/store/${_id}`}>
							<div className="inner" name={name}>
                <h3>{name}</h3>
              </div>
						</Link>
					</div>
				))}
				</section>
		</div>
	)
}
