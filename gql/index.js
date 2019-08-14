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

export const POST_REPO = gql`
    mutation PostRepo($link: String!, $description: String!){
        postRepo(link:$link, description: $description){
            id
            repo
            repoLink
            description
            owner{
                username
                email
            }
        }
    }
`;
