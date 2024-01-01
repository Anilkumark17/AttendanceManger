import React from "react";
import '../styles/login.css'


const LoginPage = ({
  email,
  password,
  onchangeEmail,
  onchangePassword,
  onSubmit,
}) => {
  return (
    <div className="admin-login-main">
      <form  className="ad-login-f" onSubmit={onSubmit}>
        <input
          type="email"
          className="ad-login"
          value={email}
          onChange={onchangeEmail}
        />
        <input
          type="password"
          className="ad-login"
          value={password}
          onChange={onchangePassword}
        />
        <input type="submit" className="ad-submit"   
        />
      </form>
    </div>
  );
};

export default LoginPage;
