import Header from './Header';

const styles = require('../styles/Layout.scss');
const Layout = (props) => {
  return (
    <div className={styles.Layout}>
      <Header/>
      <div className={styles.Section}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
