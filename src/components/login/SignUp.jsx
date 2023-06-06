import React, { useState } from "react";
import "./style.css";
import { useStore } from "@stores";

//Context

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password && !name) return;
    try {
      await signUp(name, email, password);
      console.log("Sign up Success");
    } catch (e) {
      console.log(console.log("Sign up Failed", err.message));
    }
  };

  return (
    <div>
      <h2 className="login-form-header">Sign Up</h2>
      <form className="form-container">
        <label>
          <div className="input-name">Name</div>
          <input
            className="form-text-input"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <div className="input-name">E-mail</div>
          <input
            className="form-text-input"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <div className="input-name">Password</div>
          <input
            className="form-text-input"
            type="password"
            placeholder="Enter your password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            className="submit-button"
            type="button"
            value="Submit"
            placeholder="Enter your email"
            onClick={handleSubmit}
          />
        </label>
      </form>
    </div>
  );
};

export default SignUp;
