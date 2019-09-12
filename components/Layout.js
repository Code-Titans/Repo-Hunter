import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Layout.scss';
import Header from './Header';
import jwt from 'jsonwebtoken';

export const UserContext = React.createContext();

// class Layout extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//       accessToken: ''
//     }
//   }
//
//   componentDidMount() {
//     const { isLoggedIn } = this.state;
//     const token = localStorage.getItem('token');
//     if (token){
//       const {
//         data: {
//           accessToken, picture, username, id,
//         },
//       } = jwt.verify(token, process.env.SECRET_KEY);
//       this.setState({
//         isLoggedIn: !isLoggedIn,
//         accessToken,
//         picture,
//         username,
//         id
//       })
//     }
//   }
//
//   render() {
//     const { children } = this.props;
//     return (
//       <UserContext.Provider value={this.state}>
//         <div className={styles.Layout}>
//           <Header/>
//           <div className={styles.Section}>
//             {children}
//           </div>
//         </div>
//       </UserContext.Provider>
//     );
//   }
// }

const Layout2 = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token){
      const {
        data: {
          accessToken, picture, username, id,
        },
      } = jwt.verify(token, process.env.SECRET_KEY);
      setAccessToken(accessToken);
      setAvatar(picture);
      setIsLoggedIn(!isLoggedIn);
      setId(id);
      setUsername(username);
    }
  }, []);
  return (
    <UserContext.Provider value={{ isLoggedIn, username, accessToken, avatar, id}}>
      <div className={styles.Layout}>
        <Header/>
        <div className={styles.Section}>
          {children}
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default Layout2;
