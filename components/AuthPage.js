import Router from 'next/dist/client/router';
import { Mutation } from 'react-apollo';
import { GITHUB_AUTH } from '../gql';
import Loading from './Loading';

// TODO: Make this component reusable
class CallLoginMutation extends React.Component {
  async componentDidMount() {
    if (!this.props.called) {
      const { data: { gitHubAuth } } = await this.props.githubAuth();
      if (gitHubAuth) {
        localStorage.setItem("token", gitHubAuth.access_token);
        Router.push(`/home`);
      }
    }
  }

  render() {
    return <Loading/>
  }
}

// TODO:
//  Create an error boundary
export const AuthLoading = ({ url }) =>{
  const { code } = url.query;
  return (
    <Mutation mutation={GITHUB_AUTH} variables={{ code }}>
      {
        (githubAuth, { error, loading, called }) => {
          if (error) console.log(error.message);
          if (loading) return <Loading/>;
          return (
            <CallLoginMutation githubAuth={githubAuth} called={called} />
          );
        }
      }
    </Mutation>
  );
};
