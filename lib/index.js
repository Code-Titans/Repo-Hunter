import { HttpLink } from 'apollo-boost';
import { withData } from 'next-apollo';

const config = {
  link: new HttpLink({
    uri: 'http://localhost:4200',
    opts: {
      credentials: 'same-origin',
    },
  }),
};
export default withData(config);
