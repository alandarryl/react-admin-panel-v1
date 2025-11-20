

import "./Stats.css";

import StatCard from "../statcard/StatCard";

import {
    FaUsers, 
    FaShoppingCart, 
    FaBoxOpen, 
    FaMoneyBillWave
} from 'react-icons/fa';


function Stats(){

    return(
        <div className="values" >

            <StatCard 
                icon={FaUsers}
                color="#7b74ec"
                value="700"
                category="users"
            />

            <StatCard 
                icon={FaShoppingCart}
                color="#5C8AF0"
                value="700"
                category="products sell"
            />

            <StatCard 
                icon={FaBoxOpen}
                color="#E45D99"
                value="700"
                category="shippings"
            />

            <StatCard 
                icon={FaMoneyBillWave}
                color="#74daec"
                value="700"
                category="Money"
            />

        </div>
    )

}

export default Stats;
