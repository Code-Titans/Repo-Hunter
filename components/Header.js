import React from 'react';
import PropTypes from 'prop-types';

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

export const HeaderLoggedInView = () => (
  <>
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
    <div className={styles.Profile}>
      <img
        role="button"
        src="../static/img/profile-pic.svg"
        alt="profile-pic"
      />
      <div>Bryan-Cee</div>
    </div>
  </>
);

export default Header;
