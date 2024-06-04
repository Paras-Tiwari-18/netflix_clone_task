// import rebel from '../../assets/rebel.mp4';
// import './navbar.css'; // Import CSS file for styling
// import logo1 from '../../assets/logo1.png';
// import profile_img from '../../assets/profile_img.png';
// import rebel_img from '../../assets/rebel_img.png';
// import { IoSearch } from "react-icons/io5";
// import { FaRegBell } from "react-icons/fa6";
// import { IoMdPlay } from "react-icons/io";
// import { IoIosInformationCircle } from "react-icons/io";
// import Cards from '../cards_movie/cards';
// function Navbar() {
//     return (
//         <>
//         <div className="nav">
//             <div className="logo1">
//                 <img src={logo1} alt="image" />
//             </div>
//             <div className="links1">
//                 <a href="#">Home</a>
//                 <a href="#">TV Shows</a>
//                 <a href="#">Movies</a>
//                 <a href="#">News & Popular </a>
//                 <a href="#">My List </a>
//                 <a href="#">Browse by Languages </a>
//             </div>
//             <div className="nav-right">
//             <div className="icon-1">
//             <IoSearch className='i-1'/>
//             </div>
//             <div className="children">
//                 <p>Children</p>
//             </div>
//             <div className="icon-2">
//             <FaRegBell className='i-2' />
//             </div>
//             <div className="profile">
//                 <img src={profile_img} alt="img" className='profile_img' />
//             </div>
//             </div>
//          <div className="video-background">
//              <div className="video-wrap">
//                  <video autoPlay loop muted replay>
//                      <source src={rebel} type="video/mp4" />
//                      Your browser does not support the video tag.
//                 </video>
//              </div>
//              <div className="movie-name">
//                 <img src={rebel_img} alt="img" className='rebel-img'/>

//              </div>
//              <br />
//              <div className="para">
//              The rebels gear up for battle against the ruthless forces of the Motherworld as unbreakable bonds are forged, heroes emerge — and legends are made.
//              </div>
//              <div id="button-container">
             
//              <button id='b1'><IoMdPlay className='ic1'/>Play</button>
             
             
             
//              <button id='b2'><IoIosInformationCircle className='ic2'/>More Info</button>


            

//              </div>
//              <Cards/>
            
               
//          </div>
         
         

            
            

//         </div>
//         </>
       
//     );
// }

// export default Navbar;
import React, { useState } from 'react';
import rebel from '../../assets/rebel.mp4';
import './navbar.css'; // Import CSS file for styling
import logo1 from '../../assets/logo1.png';
import profile_img from '../../assets/profile_img.png';
import rebel_img from '../../assets/rebel_img.png';
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import Cards from '../cards_movie/cards';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="nav">
                <div className="logo1">
                    <img src={logo1} alt="logo" />
                </div>
                <div className={`links1 ${menuOpen ? 'open' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#">TV Shows</a>
                    <a href="#">Movies</a>
                    <a href="#">News & Popular</a>
                    <a href="#">My List</a>
                    <a href="#">Browse by Languages</a>
                </div>
                <div className="nav-right">
                    <div className="icon-1">
                        <IoSearch className='i-1' />
                    </div>
                    <div className="children">
                        <p>Children</p>
                    </div>
                    <div className="icon-2">
                        <FaRegBell className='i-2' />
                    </div>
                    <div className="profile">
                        <img src={profile_img} alt="profile" className='profile_img' />
                    </div>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>
            <div className="video-background">
                <div className="video-wrap">
                    <video autoPlay loop muted>
                        <source src={rebel} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="movie-info">
                    <div className="movie-name">
                        <img src={rebel_img} alt="rebel" className='rebel-img' />
                    </div>
                    <div className="para">
                        The rebels gear up for battle against the ruthless forces of the Motherworld as unbreakable bonds are forged, heroes emerge — and legends are made.
                    </div>
                    <div id="button-container">
                        <button id='b1'><IoMdPlay className='ic1' />Play</button>
                        <button id='b2'><IoIosInformationCircle className='ic2' />More Info</button>
                    </div>
                </div>
            </div>
            <Cards />
        </>
    );
}

export default Navbar;
