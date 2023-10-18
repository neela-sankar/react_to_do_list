import React from 'react';
import LineItems from './LineItems';

const Itemlist = ({items,deleteList,handleCheck}) => {
  return (
    <ul>
        {items.map((item) =>(
          <LineItems 
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            deleteList={deleteList}
          />
        ))}
      </ul>
  )
}

export default Itemlist