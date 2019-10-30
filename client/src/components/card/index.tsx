import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// Utils
import { randomCoffeeImageGenerator } from '~@utils'
// Styles
import { LikeCount } from '~@components/card/styles'
// Types
import { Props } from '~@components/card/types'

const Card: FC<Props> = ({ id, name, likes }) => (
	<div className="card">
		<Link to={`/store/${id}`}>
			<div className="inner" name={name}>
				<h3>{name}</h3>
				<img src={randomCoffeeImageGenerator()} alt="Store images" />
				{likes.length > 0 ? <LikeCount>{likes.length}</LikeCount> : ''}
			</div>
		</Link>
	</div>
)

export default Card
