import { gql } from 'apollo-boost'

export const GET_ALL_USERS = gql`
  {
    getAllUsers {
      _id
      username
      email
    }
  }
`
