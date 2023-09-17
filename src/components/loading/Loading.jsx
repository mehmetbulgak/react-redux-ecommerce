import React from 'react'
import "./Loading.css"

const Loading = () => {
  return (
    <div className='lds-ring-container'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading