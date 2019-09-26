import React from 'react';
import Layout from '../components/Layout';
import SortAndFilter from '../components/SortAndFilter';
import Sidebar from '../components/Sidebar';
import RepoList from '../components/RepoList';
import styles from '../styles/Index.scss';

const Index = () => (
  <Layout>
    <SortAndFilter />
    <div className={styles.Container}>
      <Sidebar />
      <RepoList />
    </div>
  </Layout>
);

export default Index;
