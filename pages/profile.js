import React from 'react';
import Layout from '../components/Layout';
import ProfileDetails from '../components/ProfileDetails';
import ProfileRepoList from '../components/ProfileRepoList';
import styles from '../styles/Profile.scss';

const Profile = () => (
  <Layout>
    <div className={styles.Profile}>
      <ProfileDetails />
      <ProfileRepoList />
    </div>
  </Layout>
);

export default Profile;
