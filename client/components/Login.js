import React from 'react';
const styles = require('../styles/Login.scss');

const Login = (props) => {
  return (
    <div className={styles.Login}>
      <form className={styles.LoginForm}>
        <span>Sign Up</span>
        <label htmlFor={"email"}>Email</label>
        <input type="email" name={"email"}/>

        <label htmlFor={"password"}>Password</label>
        <input type="password" name={"password"}/>
        <span><a href={"#"}>Forgot Password?</a></span>
        <button>CREATE LOGIN</button>
      </form>
    </div>
  )
};

export default Login;
