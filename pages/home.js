import React from 'react';
import Layout from '../components/Layout';
import SortAndFilter from '../components/SortAndFilter';
import styles from '../styles/HomePage.scss';
import Sidebar from '../components/Sidebar';
import RepoList from '../components/RepoList';

const Home = (props) => {
  return (
    <Layout picture={`https://avatars1.githubusercontent.com/u/19145546?v=4`}>
      <SortAndFilter />
      <div className={styles.Container}>
        <Sidebar />
        <RepoList />
      </div>
    </Layout>
  );
};


export default Home;
