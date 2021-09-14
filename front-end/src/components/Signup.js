import { useContext } from "react";
import { AllContext } from "../../App";
import { Link } from 'react-router-dom'
import './Login.css'

export default function Signup() {
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
          <div className="login-title">
          </div>
          <div className="login-input">
            <input type="text" placeholder="First name" />
          </div>
          <div className="login-input">
            <input type="text" placeholder="Last name" />
          </div>
          <div className="login-input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="login-input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-input">
            <input type="password" placeholder="Confirm password" />
          </div>
          <div className="login-button">
          <input type="submit" value="Create your account" />
          </div>
          <div className="login-text">
            Already have an account ?
            <Link to='/' className="register-button">Log in</Link>
          </div>
        </div>
      </form>
    </div>
  );
}