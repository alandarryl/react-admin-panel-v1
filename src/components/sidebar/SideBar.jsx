
import "./sidebar.css";

import {
    FaChartBar,  // Remplace FaPieChart (pour Dashboard)
    FaTable,
    FaEdit,      // Remplace FaPencil (pour Form)
    FaIdCard,
    FaListOl,
    FaSignal     // Remplace FaLineChart (pour Stats)
} from 'react-icons/fa';


function SideBar(){


    return(
        <div className="side-bar" >
            
            <div className="logo" >
                <h1>JO.</h1>
                <h2>Dashboard</h2>
            </div>

            <div className="items" >
                <li><FaChartBar className="icons" /> <a href="#" >Dashboard</a> </li>
                <li><FaTable className="icons" /> <a href="#" >Table</a> </li>
                <li className="active" ><FaEdit className="icons" /> <a href="#" >Form</a> </li>
                <li><FaIdCard className="icons" /> <a href="#" >Card</a> </li>
                <li><FaListOl className="icons" /> <a href="#" >Modal</a> </li>
                <li><FaSignal className="icons"/> <a href="#" >Stats</a> </li>
            </div>


        </div>
    )

}


export default SideBar;
