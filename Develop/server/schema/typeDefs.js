const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    authors: [String],
    description: String!,
    bookId: String!,
    image: String,
    link: String,
    title: String!
},

input BookInput {
    authors: [String],
    description: String!,
    bookId: String!,
    image: String,
    link: String,
    title: String!
},

type User {
    _id: ID!,
    username: String!,
    email: String!,
    savedBooks: [Book]
},

type Auth {
    token: ID!,
    user: User
},

type Query {
    user(userId: ID!): User
},

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth,
    login(username: String!, password: String!): Auth,
    saveBook(userId: ID!, book: BookInput!): User,
    deleteBook(userId: ID!, bookId: String!): User
}`

module.exports = typeDefs;