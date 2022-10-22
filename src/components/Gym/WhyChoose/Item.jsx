import React from 'react'

function Item(props) {
  return (
    <div className='item'>
        <img src={props.img} alt='' />
    </div>
  )
}

export default Item