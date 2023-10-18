import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const LineItems = ({item,handleCheck,deleteList}) => {
  return (
    <li className='item' key={item.id}>
    <input type="checkbox" checked={item.checked} onChange={()=> handleCheck(item.id)}/>
    <label style={item.checked?{textDecoration:'line-through'}:null}
    onDoubleClick={()=> handleCheck(item.id)}>{item.item}</label>
    <FaTrashAlt 
      role='button'
      tabIndex='0'
      onClick={()=>deleteList(item.id)}
    />
  </li>
  )
}

export default LineItems