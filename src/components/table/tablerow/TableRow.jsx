

import "./tablerow.css";

import userImage from "../../../assets/profile.jpg";

function TableRow(){

    return(
        <tr>

            <td className="people" >
                <img src={userImage} />
                <div className="people-detail" >
                    <h5>Jonathan OKANA</h5>
                    <p>okanajonathan2@gmail.com</p>
                </div>
            </td>

            <td className="people-position" >
                <h5>Software Engineer</h5>
                <p>Web dev</p>
            </td>

            <td className="activity" >
                <p>Active</p>
            </td>

            <td className="role" >
                <p>owner</p>
            </td>

            <td className="edit" >Edit</td>

        </tr>
    )

}

export default TableRow;