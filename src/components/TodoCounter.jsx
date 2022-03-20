import React from 'react';
import './TodoCounter.css'

export default function TodoCounter({total, completed}) {
    return (
        <h1 className='TodoCounter'>{`Completaste ${completed} de ${total} ToDos`}</h1>
    )
};
