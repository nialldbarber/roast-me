import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// Utils
import { randomCoffeeImageGenerator } from '~@utils'
// Components
import LikeCount from '~@components/like-count'
// Types
import { Props } from '~@components/card/types'

const Card: FC<Props> = ({ id, name, likes, type }) => (
	<div className="card">
		<Link to={`/${type.toLowerCase()}/${id}`}>
			<div className="inner">
				<h3>{name}</h3>
				<img src={type === 'User' ? '' : randomCoffeeImageGenerator()} alt={`${type} images`} />
				{likes?.length > 0 ? <LikeCount likes={likes} /> : ''}
			</div>
		</Link>
	</div>
)

export default Card
