import { useState } from "react";
import "../styles/Auth.css";

const Auth = () => {
  const [formState, setFormState] = useState<string>("LOGIN");

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("logging in ....");
  };

  const createAccountHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("creating account .....");
  };

  return (
    <div className="container">
      <div className="auth-container">
        <form
          className="form--auth"
          onSubmit={(e) => {
            formState === "LOGIN" ? loginHandler(e) : createAccountHandler(e);
          }}
        >
          <h2 className="auth__heading">
            {formState === "LOGIN" ? "Login" : "Sign Up"}
          </h2>
          <div className="auth__fields">
            <div className="auth__field">
              <label htmlFor="email">Your Email</label>
              <input autoComplete="off" name="email" type={"email"} />
            </div>
            <div className="auth__field">
              <label htmlFor="password">Your Password</label>
              <input autoComplete="off" name="password" type={"password"} />
            </div>
          </div>
          <div className="auth__buttons">
            <button type="submit" className="btn--submit">
              {formState === "LOGIN" ? "Login" : "Create Account"}
            </button>
            <button
              onClick={() => {
                setFormState((prev) => {
                  return prev === "LOGIN" ? "CREATE" : "LOGIN";
                });
              }}
              type="button"
              className="btn--change-form-state col-grey-900"
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
