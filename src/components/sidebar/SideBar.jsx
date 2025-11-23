
import "./sidebar.css";

import {
    FaChartBar,
    FaTable,
    FaEdit,
    FaIdCard,
    FaListOl,
    FaSignal
} from 'react-icons/fa';

import { Link, useLocation } from "react-router-dom";

function SideBar(){

    const location = useLocation();

    const isActive = (path) =>{

        return location.pathname === path;

    }


    return(
        <div className="side-bar" >
            
            <div className="logo" >
                <h1>JO.</h1>
                <h2>Dashboard</h2>
            </div>

            <div className="items" >
                <Link className="a" to="/" >
                    <li className={isActive('/') ? 'active' : "" } ><FaChartBar className="icons"/> Dashboard</li>
                </Link> 

                <Link className="a"  to="/table" >
                    <li className={isActive('/table') ? 'active' : "" } ><FaTable className="icons" /> Table </li>
                </Link>

                <Link className="a"  to="/form" >
                    <li className={isActive('/form') ? 'active' : "" } ><FaEdit className="icons" /> Edit Info </li>
                </Link>

                <Link className="a"  to="/card" >
                    <li className={isActive('/card') ? 'active' : "" } ><FaIdCard className="icons" /> All Users </li>
                </Link>

                <Link className="a"  to="/modal" >
                    <li className={isActive('/modal') ? 'active' : "" } ><FaListOl className="icons" /> Products List</li>
                </Link> 

                <Link className="a"  to="/stats" >
                    <li className={isActive('/stats') ? 'active' : "" } ><FaSignal className="icons"/> Stats Info</li>
                </Link> 
            </div>


        </div>
    )

}


export default SideBar;
