export interface Props {
	id?: string
	name?: string
	likes?: Array<LikeProps>
}

export interface LikeProps {
	_id: string
	username: string
	createdAt: string
}
