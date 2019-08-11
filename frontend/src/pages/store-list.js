import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import axios from 'axios';

export const GET_STORES = gql`
	{
		stores {
			name
			id
		}
	}
`;

export default function StoreList() {
	const { loading, error, data } = useQuery(GET_STORES);

	if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

	return (
		<div className="container">
		<h2 className="title">Store List</h2>
			<section className="cards">
				{data.stores.map(({name, id}) => (
					<div className="card" key={id}>
						<Link to={`/store/${id}`}>
							<div className="inner" name={name}>
                <h3>{name}</h3>
              </div>
						</Link>
					</div>
				))}
				</section>
		</div>
	);
}
