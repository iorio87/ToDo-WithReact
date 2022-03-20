import React from 'react';
import './CreateTodoButton.css'

export default function CreateTodoButton(props) {
    const onClickHandle = (msg) => {
        alert(msg)
    }
    return(
        <button 
        className='CreateTodoButton'
        onClick={() => onClickHandle('Abriendo modal...')}
        >+
        </button>
    )
};


