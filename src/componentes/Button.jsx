import React from 'react'

const Button = ({className,btnName}) => {
  return (
    <button className={`text-2xl font-pop font-samibold ${className}`}>{btnName}</button>
  )
}

export default Button