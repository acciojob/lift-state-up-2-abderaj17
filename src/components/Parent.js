import React, { useState } from 'react'

const Parent = () => {
    const [text, setText] = useState("");

    const handleChange = (e)=>{
        setText = e.target.value;
        text(setText);
    }
    
  return (
    <div>
        <div className='parent'>
         <h1>Parent Component</h1>
           <div className='showText' onChange={handleChange}></div>

           <div className='child'>
           <h2>Child Component</h2>
           <input type='text' id='write' onChange={handleChange} />
        </div>
        </div>
      
    </div>
  )
}

export default Parent