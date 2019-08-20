import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UploadPost from './UploadPost';

const styles = require('../styles/Header.scss');

const Header = ({ children }) => (
  <nav className={styles.Header}>
    <div className={styles.Logo}>
        Repo
      <span className={styles.LogoDesign}>Hunter</span>
    </div>
    {children}
  </nav>
);

Header.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export const HeaderLoggedInView = (props) => {
  const {
    handleSearchSubmit,
    handleSearch,
    showUploadForm,
    showProfile,
    viewProfile,
    uploadForm,
  } = props;
  return (
    <Fragment>
      <form onSubmit={handleSearchSubmit}>
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
            onInput={handleSearch}
          />
        </div>
      </form>
      <button
        type="button"
        name="new-repo"
        onClick={showUploadForm}
        className={styles.NewRepos}
      >
        NEW REPO
      </button>
      { uploadForm ? <UploadPost handleReset={showUploadForm} /> : null }
      <div className={styles.Profile}>
        <img
          role="button"
          onClick={showProfile}
          src="https://res.cloudinary.com/dry-wolf/image/upload/v1564569696/repo-hunter/profile-pic.svg"
          alt="profile-pic"
        />
        <div className={viewProfile
          ? `${styles.ProfileDropdown}`
          : `${styles.ProfileDropdown} ${styles.DisplayNone}`}
        >
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
  );
};

HeaderLoggedInView.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  showUploadForm: PropTypes.bool.isRequired,
  showProfile: PropTypes.func.isRequired,
  viewProfile: PropTypes.func.isRequired,
  uploadForm: PropTypes.func.isRequired,
};

export default Header;
