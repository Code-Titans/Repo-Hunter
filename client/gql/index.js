import { gql } from 'apollo-boost';

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!){
        login(input: { email: $email, password: $password}) {
            token
            user {
                id
                email
            }
        }
    }
`;

export const SIGN_UP = gql`
    mutation Register($email: String!, $password: String!){
        register(input: { email: $email, password: $password}) {
            token
            user {
                id
                email
            }
        }
    }
`;
