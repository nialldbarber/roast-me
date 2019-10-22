import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { GET_INDIVIDUAL_STORE } from '~@pages/store/schema'
import Loading from '~@components/loading'

const Store = ({ match }) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_STORE, {
		variables: { _id: match.params.id }
	})

	if (loading) {
		return <Loading />
	}
	if (error) {
		return <p>Error :( ${error.message}</p>
	}

	const { name, location, description, rating } = data.getIndividualStore

	return (
		<div className="container">
			<h2 className="store-name">{name}</h2>
			<p>{location}</p>
			<p>{description}</p>
			<p>{rating}</p>
		</div>
	)
}

export default Store

Store.propTypes = {
	match: PropTypes.object
}
