// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import React, { useState } from "react";
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import {app} from "./firebase";
// import { getAuth } from "firebase/auth";
// const auth =getAuth(app);

// function Phonesignin()
// {
//     const [phone,setPhone]=useState("")
//     const [user,setUser]=useState(null)
//     const [otp,setOtp]=useState("")
//     const sendOtp=async()=>{
//         try{
//             const recaptcha =new RecaptchaVerifier(auth,"recaptcha",{})
//             const confirmation=await signInWithPhoneNumber(auth,phone,recaptcha)
//             setUser(confirmation)

//         }
//         catch(err){
//             console.log(err)
//         }
       
//     }
//     const verifyOtp=async()=>
//         {
//             try{
//                 const data =await user.confirm(otp)
//                 console.log(data)
//             }
//             catch(err)
//             {
//                 console.log(err)

//             }
           

//         }
//     return(<div>
//             <div>
//             <PhoneInput
//             country={"us"}
//             value={phone}
//             onChange={(phone)=>setPhone("+"+phone)}
//             />
//             <button onClick={sendOtp}>Send Otp</button>
//             <div id="recaptcha"></div>
//             <br />
//             <input onChange={(e)=>setOtp(e.target.value)} type="text" placeholder="enter" />
//             <br/>
//             <button onClick={verifyOtp}>verify</button>

//             </div>
            

//         </div>
//     );
// }
// export default Phonesignin;
// // function Login ()
// // {
// //     return(<div>paras</div>);


// // }
// // export default Login;