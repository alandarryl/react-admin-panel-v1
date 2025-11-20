

import "./statcard.css";


function StatCard( {icon: Icon, color, value, category} ){

    return(
        <div className="val-box" >
            <Icon className="icons" color={color} />
            <div>
                <h3>{value}</h3>
                <span> {category} </span>
            </div>
        </div>
    )

}

export default StatCard;
