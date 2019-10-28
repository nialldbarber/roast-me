export interface Props {
  likes: Array<LikeProps>
}

export interface LikeProps {
  _id: string,
  username: string,
  createdAt: string
}
