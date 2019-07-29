import React from 'react';
const styles = require('../styles/Header.scss');

const Header = (props) => {
  return (
    <nav className={styles.Header}>
      <div className={styles.Logo}>
        Repo<span className={styles.Red}>Hunter</span>
      </div>
      {props.children}
    </nav>
  )
};


export default Header;
