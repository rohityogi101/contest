import React, { useState } from "react";

import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setcPass] = useState("");
  const [error, setError] = useState("");
  const [emailerr, setEmailErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleValidation = () => {
    setSuccess("");
    if (name === "" || email === "" || password === "" || cPass === "") {
      setError("Error : All fields are mandatory");
      return;
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      setEmailErr("");
    } else {
      setEmailErr("Error : Invalid email address!");
    }

    if (password !== cPass) {
      setError("Error : Password and Confirm password are not same");
      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setcPass("");
    setEmailErr("");
    setError("");
    setSuccess("Signed Up Successfully !");
  };

  return (
    <>
      <div id="box">
        <header>
          <h1>Signup</h1>
        </header>
        <main>
          <div className="form">
            <input type="text" value={name} name="username" id="username" onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
            <hr />
            <input type="email" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <p className="error">{emailerr}</p>
            <hr />
            <input type="password" value={password} name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <p className="error"></p>
            <hr />
            <input type="password" value={cPass} name="confirmPassword" id="confirmPassword" onChange={(e) => setcPass(e.target.value)} placeholder="Confirm Password" required />
            <p className="error"></p>
            <hr />
            <p id="error">
              <span className="error">{error}</span>
              <span className="success">{success}</span>
            </p>
            <button type="submit" onClick={handleValidation}>
              Signup
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Signup;