import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../pages/login/firebase"; 
import SignInPage from "../../pages/login/signin";
import Navbar from "../navbar/navbar";
const auth = getAuth(app);

function Titlecards() {
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    alert("Leaving too soon");
    signOut(auth);
};
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  if (user === null) {
    return (
      <>
        <SignInPage />
      </>
    );
  } else {
    return (
      <>
       
        <Navbar/>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </>
    );
  }
}

export default Titlecards;
