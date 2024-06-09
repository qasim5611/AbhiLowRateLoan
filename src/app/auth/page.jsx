"use client";
// pages/auth/signin.js

import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    await signIn("credentials", { username, password });
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input name="username" type="text" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
