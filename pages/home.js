import React from 'react';
import Layout from '../components/Layout';
import SortAndFilter from '../components/SortAndFilter';
import Sidebar from '../components/Sidebar';
import RepoList from '../components/RepoList';


const Home = () => (
  <Layout>
    <SortAndFilter />
    <Sidebar />
    <RepoList />
  </Layout>
);


export default Home;
