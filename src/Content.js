import React from 'react'
import Itemlist from './Itemlist'

const Content = ({items,handleCheck,deleteList}) => {


  return (
    <main>
      {(items.length) ? (
        <Itemlist
          items={items}
          handleCheck={handleCheck}
          deleteList={deleteList}
          />
      ) : (
        <p>Your list is empty</p>
      )
}
    </main>
  )     
}

export default Content