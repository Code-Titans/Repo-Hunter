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

export const GITHUB_AUTH = gql`
    mutation githubAuth($code: String!) {
        gitHubAuth(code: $code) {
            token
        }
    }
`;

export const REPO_LIST = gql`
    {
        repoList{
            id
            imageUrl
            description
            comments
            likes
            title
            starsGazers
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
