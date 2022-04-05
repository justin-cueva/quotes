import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
  signInWithEmailAndPassword,
  // signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase-config";
import login from "../actions/login";
import "../styles/Auth.css";
import { useTheme, Theme } from "../hooks/Theme";

const Auth = ({ login }: PropsFromRedux) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formState, setFormState] = useState<string>("LOGIN");
  const [error, setError] = useState<any>();
  const { theme } = useTheme();

  const clearFields = () => {
    if (email) setEmail("");
    if (password) setPassword("");
  };

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user = await createUserWithEmailAndPassword(auth, email, password);
      login(user.user.uid);
      clearFields();
      setError("");
      navigate("/");
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user = await signInWithEmailAndPassword(auth, email, password);
      login(user.user.uid);
      clearFields();
      setError("");
      navigate("/");
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  const bg = theme === Theme.Light ? "bg-grey-100" : "bg-grey-900";
  const col = theme === Theme.Light ? "col-grey-900" : "col-grey-100";

  return (
    <div className="container">
      <div className={`auth-container ${bg}`}>
        <form
          className="form--auth"
          onSubmit={(e) => {
            formState === "LOGIN" ? loginHandler(e) : register(e);
          }}
        >
          <h2 className={`auth__heading ${col}`}>
            {formState === "LOGIN" ? "Login" : "Sign Up"}
          </h2>
          {error && <span className="error">{error}</span>}
          <div className="auth__fields">
            <div className="auth__field">
              <label className={col} htmlFor="email">
                Your Email
              </label>
              <input
                value={email}
                autoComplete="off"
                name="email"
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth__field">
              <label className={col} htmlFor="password">
                Your Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

const connector = connect(null, { login });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Auth);
