export interface Props {
  match: any
  history: any
}

export interface StoresProps {
  _id: string,
  name: string,
  likes: Array<LikeProps>
}

export interface LikeProps {
  _id: string,
  username: string,
  createdAt: string
}
