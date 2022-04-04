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
import { login as setLogin } from "../actions";
import "../styles/Auth.css";
import { useTheme, Theme } from "../hooks/Theme";

const connector = connect(null, { setLogin });
type PropsFromRedux = ConnectedProps<typeof connector>;

const Auth = ({ setLogin }: PropsFromRedux) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formState, setFormState] = useState<string>("LOGIN");
  const { theme } = useTheme();

  const clearFields = () => {
    if (email) setEmail("");
    if (password) setPassword("");
  };

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    clearFields();
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user.uid);
      setLogin(user.user.uid);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    clearFields();
  };

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

export default connector(Auth);
