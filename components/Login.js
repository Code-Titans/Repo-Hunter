import React from 'react';
import styles from '../styles/Login.scss';

const Login = () => (
  <div className={styles.Login}>
    <div
      className={styles.LoginForm}
    >
      <a
        href={`https://github.com/login/oauth/authorize?response_type=code&scope=read%3Auser&state=hAbye264gHSHJB&client_id=${process.env.ACCESS_TOKEN}`}
        className={styles.LoginFormSocial}
      >
        <span>Sign up with</span>
        <img src="/static/img/github-icon.svg" alt="github" />
      </a>
    </div>
  </div>
);


export default Login;
