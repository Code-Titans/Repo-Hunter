import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import SignUp from './SignUp';
import styles from '../styles/Header.scss';

const Header = ({ isLoggedIn, name, avatar }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <nav className={styles.Header}>
      <div
        className={styles.Logo}
        role="link"
        tabIndex={-1}
        onClick={() => Router.push('/')}
      >
        Repo
        <span className={styles.LogoDesign}>Hunter</span>
      </div>
      <form>
        <div className={styles.SearchBlock}>
          <img
            src="https://res.cloudinary.com/dry-wolf/image/upload/v1564569484/repo-hunter/search_icon.svg"
            alt="search_icon"
            className={styles.SearchInputIcon}
          />
          <input
            type="search"
            name="search"
            placeholder="Search for repository..."
            className={styles.SearchInput}
          />
        </div>
      </form>
      {!isLoggedIn ? <SignUp /> : (
        <div className={styles.Profile}>
          <img
            role="button"
            src={avatar}
            alt="profile-pic"
            onClick={() => setShowDropDown(!showDropDown)}
          />
          {!showDropDown ? null : (
            <>
              <div
                role="button"
                tabIndex={-2}
                className={styles.ProfileName}
                onClick={() => {
                  Router.push('/profile');
                  setShowDropDown(!showDropDown);
                }}
              >
                {name}
              </div>
              <div className={styles.ProfileDropdown}>
                <ul>
                  <li>Logout</li>
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Header;
