export interface Props {
  comments: Array<CommentProps>
}

export interface CommentProps {
  _id: string,
  body: string,
  username: string,
  createdAt: string
}
