
import "./tablepage.css";

import Table from "../../components/table/Table";

function TablePage(){


    return(
        <div className="table-page" >
            <h3 className="i-name" >Interface table</h3>

            {/* // user board  */}

            <div className="board" >
                {/* //table */}
                    <Table />
            </div>


        </div>
    )

}


export default TablePage;

