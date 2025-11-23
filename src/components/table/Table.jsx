

import './table.css';

import TableRow from './tablerow/TableRow';

import userImage from "../../assets/profile.jpg"


function Table(){

    return(
        <table className='table' >
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Title</td>
                    <td>Status</td>
                    <td>Role</td>
                    {/* <td>action</td> */}
                </tr>
            </thead>
            <tbody>
                {/* table row  */}
                <TableRow 
                    userImg={userImage}
                    name="Jonathan okana" 
                    email="okanajonathan2@gmail.com"
                    jobTitle="Software Engineer"
                    jobPost="Web Dev"
                    activity="active"
                    role="owner"
                />

                <TableRow 
                    userImg={userImage}
                    name="Jonathan okana" 
                    email="okanajonathan2@gmail.com"
                    jobTitle="Software Engineer"
                    jobPost="Web Dev"
                    activity="active"
                    role="owner"
                />

                <TableRow 
                    userImg={userImage}
                    name="Jonathan okana" 
                    email="okanajonathan2@gmail.com"
                    jobTitle="Software Engineer"
                    jobPost="Web Dev"
                    activity="active"
                    role="owner"
                />

                <TableRow 
                    userImg={userImage}
                    name="Jonathan okana" 
                    email="okanajonathan2@gmail.com"
                    jobTitle="Software Engineer"
                    jobPost="Web Dev"
                    activity="active"
                    role="owner"
                />
            </tbody>
        </table>
    )

}


export default Table;

