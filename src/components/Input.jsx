import React from 'react'

function Input(props) {
  return (
    <div className='inputBar'>
        <i className="fa fa-search"></i>
        <input type='text' placeholder='Search gym name here...' />
        <i onClick={props.getLocation} className='fa fa-map-marker'></i>
        <button>Clear</button>
    </div>
  )
}

export default Input