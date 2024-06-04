import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import logo from '../../assets/logo.png';
import child from '../../assets/child.png';
import { IoLanguage } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";
function Homepage() {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };
  const redirectToSignin =()=>
    {
      navigate('/signin');
    }
  return (
    <div className="main">
      <div className='Main-contentnavbar'>
        <div className="navbarleft">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbarright">
          <button className='b1'>
            <IoLanguage className="language-icon" />
            <select id="dropdown" name="options">
              <option value="option1" className='option'>English</option>
              <option value="option1" className='option'>Hindi</option>
            </select>
          </button>
          <button className='button' onClick={redirectToSignin}>Sign In</button>
        </div>
      </div>
      <div className="content">
        <h1 className='ha'>Laughter.Tears.Thrills.Find it all on Netflix</h1>
        <h3 className='hb'>Endless entertainment starts at just ₹149. Cancel anytime.</h3>
        <h5 className='hc'>Ready to watch? Enter your email or mobile number to create or restart your membership.</h5>
        <div className="buttonsign">
          <button className='button1' onClick={redirectToLogin}>Get Started
            <FaGreaterThan className='icon'/>
          </button>
        </div>
      </div>
      <div className="spacediv"></div>
      <div className="childcontent">
        <div className="leftportion">
          <img src={child} alt="pic" className='childpic'/>
        </div>
        <div className="right">
          <h1 className='h1sizec'>Create profiles for kids</h1>
          <p className='psizec'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
      <div className="spacediv"></div>
      <div className="footer">
        <div className="links">
          <a href="#" className='link-hover'>FAQ</a>
          <a href="#" className='link-hover'>Investor Relations</a>
          <a href="#" className='link-hover'>Privacy</a>
          <a href="#" className='link-hover'>Speed Test</a>
        </div>
        <div className="links">
          <a href="#" className='link-hover'>Help Centre</a>
          <a href="#" className='link-hover'>Jobs</a>
          <a href="#" className='link-hover'>Cookie Preferences</a>
          <a href="#" className='link-hover'>Legal Notices</a>
        </div>
        <div className="links">
          <a href="#" className='link-hover'>Account</a>
          <a href="#" className='link-hover'>Way To Watch</a>
          <a href="#" className='link-hover'>Corporate Information</a>
          <a href="#" className='link-hover'>Only on Netflix</a>
        </div>
      </div>
    </div>
      

  );
}

export default Homepage;
