import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleAdd}) => {

  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleAdd}>
        <label htmlFor="AddItem">Add Items</label>
        <input type="text" id="addItem" autoFocus placeholder='Add Items' required 
         value={newItem}
         onChange={(e)=>setNewItem(e.target.value)}
         ref={inputRef}   
        />
        <button type='submit'
          onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem