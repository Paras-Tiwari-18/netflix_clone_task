import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import {getAuth , signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import {app} from "./firebase";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import logo from '../../assets/logo.png';
import './signin.css';
const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();
const SignInPage = () =>
    {
        const navigate = useNavigate();
        const[email,setEmail]=useState('');
        const[password,setPassword]=useState('');
        const [phone, setPhone] = useState("");
        const [user, setUser] = useState(null);
        const [otp, setOtp] = useState("");
        const [usePhoneSignIn, setUsePhoneSignIn] = useState(false);
        const redirectToTitle =()=>
            {
              navigate('/titlecards');
            }
    const SignInUser = ()=>
        {
            signInWithEmailAndPassword(auth,email,password).then((value)=>
                {
                    alert("success")
                    redirectToTitle();
                }).catch((err)=>console.log(err));  
        };
        const signUpWithGoogle = () => {
            signInWithPopup(auth, googleProvider).then((result) => {
                alert("Success");
                redirectToTitle();
    
            })
            .catch((error) => alert(error.message));
        };
        const sendOtp = async () => {
            try {
                const recaptcha = new RecaptchaVerifier(auth,"recaptcha", {});
                const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha);
                setUser(confirmation);
            } catch (err) {
                console.log(err);
            }
        };
        const verifyOtp = async () => {
            try {
                const data = await user.confirm(otp);
                console.log(data);
                alert("OTP verification successful!");
                navigate('/titlecards');
            } catch (err) {
                console.log(err);
            }
        };
        const toggleSignInMethod = () => {
            setUsePhoneSignIn(!usePhoneSignIn);
        };
        return(
            <div className="container">
            <div className="Signin-page">
            <div className="logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="signin-page">
                <h1>Welcome Back!</h1>
                {usePhoneSignIn ? (
                    <div>
                        <PhoneInput
                            country={"in"}
                            value={phone}
                            onChange={(phone) => setPhone("+"+phone)}
                            className="Inpu-3"
                        />
                        <button onClick={sendOtp} className="OTP-Button">Send Otp</button>
                        <div id="recaptcha"></div>
                        <br />
                        <input onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter OTP" className="Inpu-4"/>
                        <br />
                        <button onClick={verifyOtp} className="Verify-otp">Verify Otp</button>
                    </div>
                ) :(
                    <div>
                <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                 type="email" required placeholder="Email here" className="Inpu-1"/>
                 <br />
                <input
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="Password" required placeholder="Password here" className="Inpu-2"/>
                <br />
                <button onClick={SignInUser} className="sign-in-button">Sign In</button>
                <br />
                <p>OR</p>
                <br />
                <button onClick={signUpWithGoogle} className="google-sign-in-button">Sign in with Google</button>
                <br />
                <p>OR</p>
                <br />
                <button onClick={toggleSignInMethod} className="phone-sign-in-button">Use a sign-in code</button>
            </div>

                )}
                </div>
        </div>
            </div>
        );


    };
    export default SignInPage;