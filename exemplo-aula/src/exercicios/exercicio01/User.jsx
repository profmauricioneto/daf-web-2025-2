import React, { Fragment } from 'react';

const User = (props) => {
    return(
        <div className='border-2 border-gray-400 rounded-sm p-2 bg-white hover:bg-blue-300'>
            <p>{props.name} - {props.age}</p>
        </div>
    );
}

export default User;