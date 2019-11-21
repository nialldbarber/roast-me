import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
// Styles
import { Wrapper } from '~@components/like-count/styles'
// Types
import { Props } from '~@components/like-count/types'
// Assets
import mug from '~@assets/images/mug.svg'

const LikeCount: FC<Props> = ({ likes }) => (
	<Wrapper>
		<SVG src={mug} alt="Mug" aria-label="Mug" />
		<span>{likes?.length}</span>
	</Wrapper>
)

export default LikeCount
