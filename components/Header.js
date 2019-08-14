import React, { Fragment } from 'react';
import UploadPost from './UploadPost';
const styles = require('../styles/Header.scss');

const Header = (props) => {
  return (
    <nav className={styles.Header}>
      <div className={styles.Logo}>
        Repo<span className={styles.LogoDesign}>Hunter</span>
      </div>
      {props.children}
    </nav>
  )
};

export const HeaderLoggedInView = (props) => {
  const { handleSearchSubmit, handleSearch, showUploadForm, showProfile, viewProfile, uploadForm } = props;
  return (
    <Fragment>
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
      <button name="new-repo" onClick={showUploadForm} className={styles.NewRepos}>
        NEW REPO
      </button>
      { uploadForm ? <UploadPost handleReset={showUploadForm}/> : null }
      <div className={styles.Profile}>
        <img onClick={showProfile} role='button' src="../static/img/profile-pic.svg" alt="profile-pic"/>
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
    </Fragment>
  )
};

export default Header;
