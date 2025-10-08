import React from 'react';

const Post = (props) => {
    return (
        <>
            <div className='border border-gray-700 rounded-md bg-blue-300 text-black p-4 m-2'>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
                <p>User ID Message: {props.userId}</p>
            </div>
        </>
    )
}

export default Post;