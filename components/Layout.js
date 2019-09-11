import React from 'react';
import PropTypes from 'prop-types';
import Header, { HeaderLoggedInView } from './Header';

const styles = require('../styles/Layout.scss');

const Layout = props => {
  const { children } = props;
  // TODO: check for login details then show the rest
  //  of the the header section
  return (
    <div className={styles.Layout}>
      <Header>
        <HeaderLoggedInView />
      </Header>
      <div className={styles.Section}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Layout;
