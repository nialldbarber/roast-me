import { gql } from 'apollo-boost'

export const REGISTER_USER = gql`
   mutation registerUser(
      $username: String!
      $email: String!
      $password: String!
      $confirmPassword: String!
   ) {
      registerUser(
         registerInput: {
            username: $username
            email: $email
            password: $password
            confirmPassword: $confirmPassword
         }
      ) {
         _id
         username
         email
         token
         createdAt
      }
   }
`
