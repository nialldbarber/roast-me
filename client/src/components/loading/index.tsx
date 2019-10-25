import React, { FC } from 'react'
import { Container } from './styles'

const Loading: FC = () => {
	let loader
	for (let i = 1; i <= 8; i++) {
		loader = <div className={`circle circle-${i}`} />
	}

	return (
		<Container>
			<div className="loader">
				<div className="loader-group">{loader}</div>
			</div>
		</Container>
	)
}

export default Loading
