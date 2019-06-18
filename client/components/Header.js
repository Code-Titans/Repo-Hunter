import React from 'react';
const styles = require('../styles/Header.scss');

const Header = (props) => {
  return (
    <nav className={styles.Header}>
      <div className={styles.Logo}>
        Repohunter
      </div>
      {props.children}
    </nav>
  )
};


export default Header;
