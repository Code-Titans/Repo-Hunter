import { HttpLink } from 'apollo-boost';
import { withData } from "next-apollo";

let token;

if (typeof window !== 'undefined') {
  console.log('we are running on the client')
  token = localStorage.getItem('token');
  console.log(token)
} else {
  console.log('we are running on the server');
}

const config = {
  link: new HttpLink({
    uri: "http://localhost:4200",
    opts: {
      credentials: "same-origin",
    },
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
};
export default withData(config);
