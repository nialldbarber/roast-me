import React, { FC, useState, useEffect } from 'react'
import { RatingProps } from '~/components/ratings/types'

const Ratings: FC<RatingProps> = ({ ratingAverage }) => {
	const [ ratings, setRatings ] = useState({
		taste: '',
		variety: '',
		atmosphere: '',
		wifi: '',
		seating: '',
		restroomQuality: ''
	})

	const { taste, variety, atmosphere, wifi, seating, restroomQuality } = ratings

	useEffect(
		() => {
			setRatings({
				taste: Math.round(ratingAverage.reduce((a, { taste }) => a + taste, 0) / ratingAverage.length),
				variety: Math.round(ratingAverage.reduce((a, { variety }) => a + variety, 0) / ratingAverage.length),
				atmosphere: Math.round(
					ratingAverage.reduce((a, { atmosphere }) => a + atmosphere, 0) / ratingAverage.length
				),
				wifi: Math.round(ratingAverage.reduce((a, { wifi }) => a + wifi, 0) / ratingAverage.length),
				seating: Math.round(ratingAverage.reduce((a, { seating }) => a + seating, 0) / ratingAverage.length),
				restroomQuality: Math.round(
					ratingAverage.reduce((a, { restroomQuality }) => a + restroomQuality, 0) / ratingAverage.length
				)
			})
		},
		[ ratingAverage ]
	)

	return (
		<div>
			<p>{taste || ''}</p>
			<p>{variety || ''}</p>
			<p>{atmosphere || ''}</p>
			<p>{wifi || ''}</p>
			<p>{seating || ''}</p>
			<p>{restroomQuality || ''}</p>
		</div>
	)
}

export default Ratings
