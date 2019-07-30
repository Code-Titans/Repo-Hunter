import Header from './Header';
import React from 'react';

const styles = require('../styles/Layout.scss');
const Layout = (props) => {
  const { handleSearch, handleSearchSubmit, viewProfile, showProfile } = props;
  // TODO: check for login details then show the rest of the the header section
  return (
    <div className={styles.Layout}>
      <Header>
        <form onSubmit={handleSearchSubmit}>
          <div className={styles.SearchBlock}>
            <img
              src="../static/img/search_icon.svg"
              alt="search_icon"
              className={styles.SearchInputIcon}
            />
            <input
              type="search"
              name="search"
              placeholder="Search for repository..."
              className={styles.SearchInput}
              onInput={handleSearch}
            />
          </div>
        </form>
        <button name="new-repo" className={styles.NewRepos}>
          NEW REPO
        </button>
        <div className={styles.Profile}>
          <img onClick={showProfile} role='button' src="../static/img/profile-pic.png" alt="profile-pic"/>
          <div className={ viewProfile
            ? `${styles.ProfileDropdown}`
            : `${styles.ProfileDropdown} ${styles.DisplayNone}` }>
            <span>Bryan Cee</span>
            <ul>
              <li id="profile">
                Profile
              </li>
              <li id="user">
                Users
              </li>
              <li id="logout">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <div className={styles.Section}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
