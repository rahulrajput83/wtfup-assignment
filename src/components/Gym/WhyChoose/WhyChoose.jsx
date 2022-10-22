/* Imports */
import React from 'react'
import './choose.css'
import Item from './Item';

/* WhyChoose Component */
function WhyChoose() {
  return (
    <div className='choose'>
      {/* Renders Item component */}
      <Item img='https://d1e9q0asw0l2kk.cloudfront.net/terms_upload/QZLzztCo9Bv8w-1658256801212landscape+banner.jpg' />
      <Item img='https://d1e9q0asw0l2kk.cloudfront.net/terms_upload/1KCck9dUBDHVi-1656669740566WTF.png' />
      <Item img='https://d1e9q0asw0l2kk.cloudfront.net/terms_upload/UiHJRrVXA56IG-1656669685409WTF.png' />
      <Item img='https://d1e9q0asw0l2kk.cloudfront.net/terms_upload/wsEuaKW5cL9uk-1656655982426WTF.png' />
    </div>
  )
}

export default WhyChoose;