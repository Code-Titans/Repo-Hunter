import React from 'react';

const styles = require('../styles/Loading.scss');

const Loading = () => (
  <div className={styles.LoadingOverlay}>
    <img
      src="https://res.cloudinary.com/dry-wolf/image/upload/v1564569484/repo-hunter/spinner.svg"
      alt="spinner"
    />
  </div>
);

export default Loading;
