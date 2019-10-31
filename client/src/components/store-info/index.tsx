import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
import { Wrapper } from '~@components/store-info/styles'
import finder from '~@assets/icons/finder.svg'

const StoreInfo: FC = ({ location, rating }) => (
	<Wrapper>
		<div className="location">
			<SVG src={finder} alt="Finder" aria-label="Finder" />
			<h3>{location}</h3>
		</div>
		<p>{rating}</p>
	</Wrapper>
)

export default StoreInfo
