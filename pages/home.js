import React from 'react';
import withData from '../lib';
import HomePage from '../components/HomePage';


const Home = withData(() => {
  return (
    <HomePage/>
  )
});



export default Home;
