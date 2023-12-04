import React from 'react'
import '../css/button.css'

const Button = ({title}) => {
  return (
    <div>
        <div className="btnCustom">{title}</div>
    </div>
  )
}

export default Button