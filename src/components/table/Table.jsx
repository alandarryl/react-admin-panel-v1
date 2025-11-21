

import './table.css';

import TableRow from './tablerow/TableRow';


function Table(){

    return(
        <table className='table' >
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Title</td>
                    <td>Status</td>
                    <td>Role</td>
                </tr>
            </thead>
            <tbody>
                {/* table row  */}
                <TableRow/>
            </tbody>
        </table>
    )

}


export default Table;

