import React from 'react'

/* Item component */
function Item(props) {
  return (
    <div className='item'>
        <img src={props.img} alt='' />
    </div>
  )
}

export default Item