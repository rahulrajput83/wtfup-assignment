import React, { useState } from 'react'

/* City names */
const cityName = ["New Delhi", "Ghaziabad", "Greater Noida", "Noida", "Delhi"]

/* Filter Component */
function Filter(props) {
  const [city, setCity] = useState('Select City');
  const [show, setShow] = useState(false)

  /* handlCity triggers when city selected */
  const handleCity = (item) => {
    setCity(item)
    props.setCity(item)
    setShow(!show)
  }
  /* Return */
  return (
    <div className='filter'>
      <div className='row'>
        <span>Filters</span>
        {/* onClick trigger handleReset from props */}
        {props.city ? <button onClick={props.handleReset}>Reset</button> : null}
      </div>
      <span>Location</span>
      <div className='location'>
        <i className="fa fa-search"></i>
        <input type='text' placeholder='Enter location' />
      </div>
      <span>Price</span>
      <div className='price'>
        <input type='text' placeholder='Min' />
        <input type='text' placeholder='Max' />
      </div>
      <span>Cities</span>
      <div className='cities'>
        <div onClick={() => setShow(!show)} className='inputCity'>
          <span>{city}</span>
          <i className='fa fa-angle-down' />
        </div>
        {show ?
          <div className='cityName'>
            {cityName.map((item, index) => {
              return (
                /* onClick triggers handleCity */
                <span onClick={() => handleCity(item)} key={`city-${index}`}>{item}</span>
              )
            })}
          </div> : null
        }
      </div>
    </div>
  )
}

export default Filter;