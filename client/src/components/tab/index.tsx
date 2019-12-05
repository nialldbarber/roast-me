import React, { FC } from 'react'
// Styles
import { Wrapper } from '~/components/tab/styles'
import { Props } from '~/components/tab/types'

const Tab: FC<Props> = ({ text, name, click, active }) => (
	<Wrapper name={name} onClick={click} className={active}>
		{text}
	</Wrapper>
)

export default Tab
