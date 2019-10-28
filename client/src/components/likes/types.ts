export interface Props {
  likes: Array<LikeProps>
  id: string
}

export interface LikeProps {
  _id: string,
  username: string,
  createdAt: string
}
