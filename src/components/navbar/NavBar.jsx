
import {
    FaSearch,
    FaBars,
    FaBell
} from 'react-icons/fa';

import "./navbar.css";

import userImage from "../../assets/profile.jpg";

function NavBar(){

    return(
        <div className="navigation" >

            <div className="n1" >

                <div className="" >
                    <FaBars className='menu-btn' />
                </div>

                <div className='search' >
                    <FaSearch className='search-icon' />
                    <input type='text' placeholder='search ...' />
                </div>

            </div>

            <div className='profile' >
                <FaBell className='bell-icon' />
                <img src={userImage} alt='profile image' />
            </div>

        </div>
    )

}


export default NavBar;
