import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
        <li className={`text-2xl font-pop font-samibold ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu