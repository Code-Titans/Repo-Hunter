import { Component } from 'react';

const styles = require('../styles/Loading.scss');
class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  render() {
    return (
      <div className={styles.LoadingOverlay}>
          <img src="../static/img/spinner.svg" alt="spinner"/>
      </div>
    );
  }

}

export default Loading;
