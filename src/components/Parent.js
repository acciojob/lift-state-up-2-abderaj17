import React from 'react'

const Parent = () => {
  return (
    <div>
        <div className='parent'>
         <h1>Parent Component</h1>
           <div className='showText'></div>

           <div className='child'>
           <h2>Child Component</h2>
           <input type='text' id='write' />
        </div>
        </div>
      
    </div>
  )
}

export default Parent