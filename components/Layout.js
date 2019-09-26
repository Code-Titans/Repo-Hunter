import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import styles from '../styles/Layout.scss';
import Header from './Header';

export const UserContext = React.createContext();

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      try {
        const {
          data: {
            accessToken, picture, username, id,
          },
        } = jwt.verify(jwtToken, process.env.SECRET_KEY);
        setToken(accessToken);
        setAvatar(picture);
        setIsLoggedIn(!isLoggedIn);
        setUserId(id);
        setName(username);
      } catch (e) {
        console.log(e.name, ':', e.message);
      }
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        isLoggedIn, name, token, avatar, userId,
      }}
    >
      <div className={styles.Layout}>
        <Header isLoggedIn={isLoggedIn} name={name} avatar={avatar} />
        <div className={styles.Section}>
          {children}
        </div>
      </div>
    </UserContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Layout;
