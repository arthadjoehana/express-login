import { useContext } from "react";
import { AllContext } from "../../App";
import { Link } from 'react-router-dom'

import './Login.css'

export default function Login() {
  const connectedState = useContext(AllContext)
  const handleSubmit = () => {
		connectedState.setConnected((prevConnected) => {
			if (prevConnected === false) {
				return true;
			} else {
				return false;
			}
		});
	};
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="login-input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="login-input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-button">
          <input type="submit" value="Sign in" />
          </div>
          <div className="login-text">
            Don't have an account ?
            <Link to='/register' className="register-button">Create an account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}