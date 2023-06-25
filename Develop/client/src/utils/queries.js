import { gql } from '@apollo/client'

export const FIND_SINGLE_USER = gql`
    query singleUser($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            savedBooks
        }
    }
` 