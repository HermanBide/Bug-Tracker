import React from "react";

function Register() {
  return (
    <div>
      <div className="form">
        <h3>Sign in</h3>
        <div>
          <input>First Name</input>
          <input>Last Name</input>
          <input>Email</input>
          <input>Password</input>
          <button>Register</button>
          <span>Forgot password?</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
