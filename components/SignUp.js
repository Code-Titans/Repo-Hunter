import React from 'react';
import styles from '../styles/SignUp.scss';

const SignUp = () => (
  <div className={styles.SignUp}>
    <div
      className={styles.SignUpForm}
    >
      <a
        href={`https://github.com/login/oauth/authorize?response_type=code&scope=read%3Auser&state=hAbye264gHSHJB&client_id=${process.env.ACCESS_TOKEN}`}
        className={styles.SignUpFormSocial}
      >
        <span>Sign in</span>
        <img src="/static/img/github-icon.svg" alt="github" />
      </a>
    </div>
  </div>
);


export default SignUp;
