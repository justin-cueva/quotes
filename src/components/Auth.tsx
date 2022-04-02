import { useState, useRef } from "react";

import "../styles/Auth.css";
import { useTheme, Theme } from "../hooks/Theme";

const Auth = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState<string>("LOGIN");
  const { theme } = useTheme();

  const clearFields = () => {
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
  };

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("creating account .....");
    console.log(emailRef.current?.value);
    console.log(passwordRef.current?.value);
    clearFields();
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("logging in ....");
    console.log(emailRef.current?.value);
    console.log(passwordRef.current?.value);
    clearFields();
  };

  const logout = () => {};

  const bg = theme === Theme.Light ? "bg-grey-100" : "bg-grey-900";
  const col = theme === Theme.Light ? "col-grey-900" : "col-grey-100";

  return (
    <div className="container">
      <div className={`auth-container ${bg}`}>
        <form
          className="form--auth"
          onSubmit={(e) => {
            formState === "LOGIN" ? login(e) : register(e);
          }}
        >
          <h2 className={`auth__heading ${col}`}>
            {formState === "LOGIN" ? "Login" : "Sign Up"}
          </h2>
          <div className="auth__fields">
            <div className="auth__field">
              <label className={col} htmlFor="email">
                Your Email
              </label>
              <input
                ref={emailRef}
                autoComplete="off"
                name="email"
                type={"email"}
              />
            </div>
            <div className="auth__field">
              <label className={col} htmlFor="password">
                Your Password
              </label>
              <input
                ref={passwordRef}
                autoComplete="off"
                name="password"
                type={"password"}
              />
            </div>
          </div>
          <div className="auth__buttons">
            <button
              type="submit"
              className="btn--submit bg-grey-medium col-grey-900"
            >
              {formState === "LOGIN" ? "Login" : "Create Account"}
            </button>
            <button
              onClick={() => {
                clearFields();
                setFormState((prev) => {
                  return prev === "LOGIN" ? "CREATE" : "LOGIN";
                });
              }}
              type="button"
              className={`btn--change-form-state ${col}`}
            >
              {formState === "LOGIN"
                ? "Create new account"
                : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
