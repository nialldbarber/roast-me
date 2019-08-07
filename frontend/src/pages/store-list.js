import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function StoreList() {
	const [ stores, setStores ] = useState([]);

	useEffect(() => {
		const fetchStores = async () => {
			const store = await axios('http://localhost:7777/');
			setStores(store.data);
		};
		fetchStores();
	}, []);

	console.log(stores);

	return (
		<div className="container">
			<h2 className="title">Store List</h2>
			<p>Most popular stores</p>
			<section className="cards">
				{stores.map(({ name, description, slug, _id }) => (
					<div className="card" key={_id}>
						<Link to={`/store/${_id}`}>
							<div className="inner" name={name} review={description}>
								<h3>{name}</h3>
								<p>{description}</p>
							</div>
						</Link>
					</div>
				))}
			</section>
		</div>
	);
}
