import React, { useState } from 'react';
import './TodoSearch.css'

export default function TodoSearch({searchValue , setSearchValue}) {
        
    const onChangeHandle = (e) => {        
        setSearchValue(e.target.value)
    }
    return(
        <input className='TodoSearch'
         type="text" 
         placeholder='Buscar ToDo...'
         value={searchValue} 
         onChange={onChangeHandle}
         />
    )
};
