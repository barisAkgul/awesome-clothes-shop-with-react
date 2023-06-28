import React, { useState } from "react";
import "./style.css";
import { useStore } from "@stores";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, user } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log("Email and password are required");
      return;
    }

    signIn(email, password)
      .then(() => console.log("Giriş başarılı"))
      .catch((error) => {
        console.log("Login Failed", error.message);
      });
  };

  return (
    <>
      <h2 className="login-form-header">Sing In</h2>
      <form className="form-container">
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
            type="submit"
            value="Submit"
            placeholder="Enter your email"
            onClick={handleSubmit}
          />
        </label>
      </form>
    </>
  );
};

export default SignIn;
