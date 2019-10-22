import React, { FC } from 'react'

const Loading: FC = () => {
	let loader
	for (let i = 1; i <= 8; i++) {
		loader = <div className={`circle circle-${i}`} />
	}

	return (
		<div className="loader">
			<div className="loader-group">{loader}</div>
		</div>
	)
}

export default Loading
