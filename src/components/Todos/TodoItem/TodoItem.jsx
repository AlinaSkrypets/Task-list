import React from 'react';
import './TodoItem.css';

function TodoItem({item}) {
    return(
        <div><p>{item.text}</p><p>{item.date.dateStr}</p></div>
    )
}

export default TodoItem