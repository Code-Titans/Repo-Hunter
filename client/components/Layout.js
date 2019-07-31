import Header, { HeaderLoggedInView } from './Header';
import React from 'react';

const styles = require('../styles/Layout.scss');
const Layout = (props) => {
  const { handleSearch, handleSearchSubmit, viewProfile, showUploadForm, showProfile, uploadForm } = props;
  // TODO: check for login details then show the rest of the the header section
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
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
