import React from 'react'

const Task = (props) => {
    return(
        <>
            <div className='p-1'>
                <p className='border border-gray-400 rounded-md p-2 hover:bg-gray-500 hover:text-white'>{props.title} - {props.completed ? <span className='text-green-600 line-through'>"Concluída"</span> : <span className='text-red-700'>"Pendente"</span>}</p>
            </div>
        </>
    )
}

export default Task;