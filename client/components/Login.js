import React from 'react';
const styles = require('../styles/Login.scss');

const Login = (props) => {
  return (
    <div className={styles.Login}>
      <div className={styles.LoginTriangleLeft}/>
      <form className={styles.LoginForm}>
        <span>Login</span>
        <hr/>
        <label htmlFor={"email"}>Email</label>
        <input type="email" name={"email"} placeholder={"janedoe@example.com"}/>

        <label htmlFor={"password"}>Password</label>
        <input type="password" name={"password"} placeholder={"*********"}/>
        <span className={styles.LoginFormFPassword}><a href={"#"}>Forgot Password?</a></span>
        <button type="submit">LOGIN</button>
      </form>
      <p>or login with</p>
      <div className={styles.LoginSocial}>
        <a href="#"><img src={"/static/google-icon.svg"} alt="google"/></a>
        <a href="#"><img src={"/static/github-icon.svg"} alt="github"/></a>
      </div>
      <p>Don't have an account? <span><a href="#">Sign up</a></span></p>
      <div className={styles.LoginTriangleRight}/>
    </div>
  )
};

export default Login;
