import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return(
        <div className="useroutput">
            <h1>UserOutput</h1>
            <p>My username is: {props.username}</p>
            <p>My hobbies are flying and singing.</p>
        </div>
    )
}

export default UserOutput;