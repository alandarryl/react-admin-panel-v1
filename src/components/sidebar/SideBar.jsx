
import "./sidebar.css";

import {
    FaChartBar,
    FaTable,
    FaEdit,
    FaIdCard,
    FaListOl,
    FaSignal
} from 'react-icons/fa';

import { Link } from "react-router-dom";

function SideBar(){


    return(
        <div className="side-bar" >
            
            <div className="logo" >
                <h1>JO.</h1>
                <h2>Dashboard</h2>
            </div>

            <div className="items" >
                <Link className="a" to="/" ><li><FaChartBar className="icons"/> Dashboard</li></Link> 
                <Link className="a"  to="/table" ><li className="active" ><FaTable className="icons" /> Table </li></Link>
                <Link className="a"  to="/form" ><li><FaEdit className="icons" /> Form </li></Link>
                <Link className="a"  to="/card" ><li><FaIdCard className="icons" /> Card </li></Link>
                <Link className="a"  to="/modal" ><li><FaListOl className="icons" /> Modal</li></Link> 
                <Link className="a"  to="/stats" ><li><FaSignal className="icons"/> Stats</li></Link> 
            </div>


        </div>
    )

}


export default SideBar;
