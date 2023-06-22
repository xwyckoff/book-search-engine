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

type User {
    _id: ID,
    username: String!,
    email: String!,
    password: String!,
    savedBooks: [Book]
},

type Auth {
    token: ID!,
    user: User
},

type Query {
    User(userId: ID!)
},

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth,
    login(username: String!, password: String!): Auth,
    saveBook(userId: ID!, bookid: String!),
    deleteBook(userId: ID!, bookId: String!)
}`
