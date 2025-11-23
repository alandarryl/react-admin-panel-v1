
import './statpage.css';

import Stats from '../../components/stats/Stats';

import ChartjsExample from '../../components/Chart/ChartJs';

import RechartsExample from '../../components/Chart/Rechart';

function StatPage(){


    return(
        <div className='stat-page' >
            <h3 className='i-name' >Interface stats</h3>

            <Stats />

            <ChartjsExample />

            <RechartsExample/>

        </div>
    )

}


export default StatPage;

