import React from 'react';
const styles = require('../styles/Header.scss')

const Header = (props) => {
  return (
    <nav>
      <span className={styles.Logo}>Logo is here</span>
      {props.children}
    </nav>
  )
}


export default Header; 