import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token,
            user {
                _id
                username
            }
        }
    }
`

export const SAVE_BOOK = gql`
    mutation saveBook($book: Book!) {
        saveBook(book: $book) {
            _id
            username
            savedBooks
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation deleteBook($bookId: String!) {
        deleteBook(bookId: $bookId) {
            _id
            username
            savedBooks
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`
