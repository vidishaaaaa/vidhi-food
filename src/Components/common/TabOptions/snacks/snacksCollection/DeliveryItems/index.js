import React from 'react'
import   './DeliveryItem.css'

const DeliveryItem = ({item}) => {
  return (
    <div>
      <div className='snacks-item-cover'>
        <img src={item.cover} className='snacks-item-image' alt={item.title}></img>
      </div>
      <div className='snacks-item-title' >{item.title}</div>
    </div>
  )
}

export default DeliveryItem
