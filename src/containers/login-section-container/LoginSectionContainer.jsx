"use client";

import React, { useState } from "react";
import SignIn from "@components/login/SignIn";
import SignUp from "@components/login/SignUp";

const LoginSectionContainer = () => {
  const [haveAcconunt, setHaveAccount] = useState(true);

  return (
    <>
      {haveAcconunt ? <SignIn /> : <SignUp />}
      <div
        onClick={() => {
          setHaveAccount(!haveAcconunt);
        }}
        style={{ cursor: "pointer", display: "inline-block" }}
      >
        {haveAcconunt ? <p>Don't have a account </p> : <p>I have a account</p>}
      </div>
    </>
  );
};

export default LoginSectionContainer;
