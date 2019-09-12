import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './Layout';
import SignUp from './SignUp';
import styles from '../styles/Header.scss';


//TODO
// display the drop down menu

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { isLoggedIn, username, avatar } = useContext(UserContext);
  const displayDropdown = () => {
    setShowDropDown(!showDropDown)
  };
  const showProfile = () => {
    console.log('navigation to the profile page')
  };
  return (
    <nav className={styles.Header}>
      <div className={styles.Logo}>
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
      {!isLoggedIn ? <SignUp/> : (
        <div className={styles.Profile} >
          <img
            role="button"
            src={avatar}
            alt="profile-pic"
            onClick={displayDropdown}
          />
          {!showDropDown ? null : (
            <>
              <div className={styles.ProfileName} onClick={showProfile}>{username}</div>
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
  )
};

Header.propTypes = {
};

export default Header;
