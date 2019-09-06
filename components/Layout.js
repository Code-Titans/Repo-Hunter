import React from 'react';
import PropTypes from 'prop-types';
import Header, { HeaderLoggedInView } from './Header';

const styles = require('../styles/Layout.scss');

const Layout = props => {
  const { children, picture } = props;
  // TODO: check for login details then show the rest
  //  of the the header section
  return (
    <div className={styles.Layout}>
      <Header>
        <HeaderLoggedInView picture={picture} />
      </Header>
      <div className={styles.Section}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  picture: PropTypes.string.isRequired,
};

export default Layout;
