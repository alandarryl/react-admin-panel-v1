

import "./tablerow.css";

import userImage from "../../../assets/profile.jpg";

function TableRow({userImg, name, email, jobTitle, jobPost, activity, role}){

    return(
        <tr>

            <td className="people" >
                <img src={userImg} />
                <div className="people-detail" >
                    <h5> {name} </h5>
                    <p>{email} </p>
                </div>
            </td>

            <td className="people-position" >
                <h5>{jobTitle} </h5>
                <p>{jobPost} </p>
            </td>

            <td className="activity" >
                <p>{activity} </p>
            </td>

            <td className="role" >
                <p>{role} </p>
            </td>

            <td className="edit" > <a>Edit</a> </td>

        </tr>
    )

}

export default TableRow;