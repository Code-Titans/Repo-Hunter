import React from 'react';
import Layout from '../components/Layout';
import SortAndFilter from '../components/SortAndFilter';
import styles from '../styles/HomePage.scss';
import Sidebar from '../components/Sidebar';
import RepoList from '../components/RepoList';

const Home = () => (
  <Layout>
    <SortAndFilter />
    <div className={styles.Container}>
      <Sidebar />
      <RepoList />
    </div>
  </Layout>
);


export default Home;
