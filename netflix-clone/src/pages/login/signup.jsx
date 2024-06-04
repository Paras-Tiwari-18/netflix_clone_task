import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "./firebase";
import './signup.css';
import logo from '../../assets/logo.png';

const auth = getAuth(app);


const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const redirectToSignin = () => {
    navigate('/signin');
  };
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((value) => {
                alert("Account successfully created Enjoy Watching Netflix!");
                redirectToSignin();
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="container">
            <div className="Signin-page">
            <div className="logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="signin-page">
                <h1>Sign Up</h1>
                <br />
                    <div >
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            required
                            placeholder="Email"
                            className="Inpu-1"
                        />
                        <br />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            required
                            placeholder="Password"
                            className="Inpu-2"
                        />
                        <br />
                        <button onClick={createUser} className="sign-in-button">Sign Up</button>
                    </div>
            </div>
         </div>
        </div>
            
    );
};
export default SignUpPage;
