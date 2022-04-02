import "../styles/Auth.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container">
      <div className="auth-container">
        <form className="form--auth">
          <h2 className="auth__heading">Login</h2>
          <div className="auth__fields">
            <div className="auth__field">
              <label>Your Email</label>
              <input />
            </div>
            <div className="auth__field">
              <label>Your Password</label>
              <input />
            </div>
          </div>
          <div className="auth__buttons">
            <button>Login</button>
            <Link className="auth__buttons--link" to={"/createaccount"}>
              Create new account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
