import React from 'react';
import Layout from '../components/Layout';
import ProfileDetails from '../components/ProfileDetails';
import ProfileRepoList from '../components/ProfileRepoList';

const Profile = () => {
  return (
    <Layout>
      <ProfileDetails/>
      <ProfileRepoList/>
    </Layout>
  )
};

export default Profile;
