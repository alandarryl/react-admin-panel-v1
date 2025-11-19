
import "./sidebar.css";


function SideBar(){


    return(
        <div className="side-bar" >
            
            <div className="logo" >
                <h1>JO.</h1>
                <h2>Dashboard</h2>
            </div>

            <div className="items" >
                <li><i className="fa fa-pie-chart" ></i> <a href="#" >Dashboard</a> </li>
                <li><i className="fa fa-table" ></i> <a href="#" >Table</a> </li>
                <li className="active" ><i className="fa fa-pencil" ></i> <a href="#" >Form</a> </li>
                <li><i className="fa fa-id-card" ></i> <a href="#" >Card</a> </li>
                <li><i className="fa fa-list-ol" ></i> <a href="#" >Modal</a> </li>
                <li><i className="fa fa-line-chart" ></i> <a href="#" >Stats</a> </li>
            </div>


        </div>
    )

}


export default SideBar;
