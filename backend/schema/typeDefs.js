import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    stores: [Store!]!
    login(email: String!, password: String!): User
    verifyToken(token: String!): User
  }

  type Store {
    id: ID!
    name: String!
  }

  type User {
    _id: ID! 
    email: String!
    token: String!
  }

  input UserInput {
    email: String!    
    password: String!    
    confirm: String!    
  }  

  type Mutation {
    createStore(name: String!): Store!
    createUser(userInput: UserInput): User
  }
`;
