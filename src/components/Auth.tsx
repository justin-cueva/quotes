import { useState } from "react";

import "../styles/Auth.css";
import { useTheme, Theme } from "../hooks/Theme";

const Auth = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState<string>("LOGIN");

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("logging in ....");
  };

  const createAccountHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("creating account .....");
  };

  const bg = theme === Theme.Light ? "bg-grey-100" : "bg-grey-900";
  const col = theme === Theme.Light ? "col-grey-900" : "col-grey-100";

  return (
    <div className="container">
      <div className={`auth-container ${bg}`}>
        <form
          className="form--auth"
          onSubmit={(e) => {
            formState === "LOGIN" ? loginHandler(e) : createAccountHandler(e);
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
              <input autoComplete="off" name="email" type={"email"} />
            </div>
            <div className="auth__field">
              <label className={col} htmlFor="password">
                Your Password
              </label>
              <input autoComplete="off" name="password" type={"password"} />
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
