export interface Props {
  errors: Array<ErrorProps>
}

export interface ErrorProps {
  email: string,
  password: string,
  username: string
}
