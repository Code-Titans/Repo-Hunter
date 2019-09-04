import React from 'react';
import PropTypes from 'prop-types';
import Header, { HeaderLoggedInView } from './Header';

const styles = require('../styles/Layout.scss');

const Layout = (props) => {
  const {
    handleSearch,
    handleSearchSubmit,
    viewProfile,
    showUploadForm,
    showProfile,
    uploadForm,
    children,
  } = props;
  // TODO: check for login details then show the rest
  //  of the the header section
  return (
    <div className={styles.Layout}>
      <Header>
        <HeaderLoggedInView
          viewProfile={viewProfile}
          handleSearchSubmit={handleSearchSubmit}
          handleSearch={handleSearch}
          showProfile={showProfile}
          uploadForm={uploadForm}
          showUploadForm={showUploadForm}
        />
      </Header>
      <div className={styles.Section}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  showUploadForm: PropTypes.bool.isRequired,
  showProfile: PropTypes.func.isRequired,
  viewProfile: PropTypes.func.isRequired,
  uploadForm: PropTypes.func.isRequired,
  children: PropTypes.shape({}).isRequired,
};

export default Layout;
