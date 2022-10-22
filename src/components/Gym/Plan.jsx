/* Imports */
import React from 'react'

/* Plan component with props */
function Plan(props) {
  return (
    <div className='plan'>
      <div className='column'>

        <span className='planNum'>Plan {props.index + 1}</span>
        <span className='name'>{props.plan.plan_name}</span>
        <span dangerouslySetInnerHTML={{ __html: props.plan.description }}></span>
      </div>
      <span className='price'>₹ {props.plan.plan_price}</span>
    </div>
  )
}

export default Plan;