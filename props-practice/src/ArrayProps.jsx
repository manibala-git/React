import React from 'react'

export const ArrayProps = (props) => {
    const {items} = props;
  return (
    <div>
        <ul>
        {items.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
    </div>
  )
}
