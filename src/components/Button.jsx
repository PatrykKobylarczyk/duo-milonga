import React from 'react'

const Button = ({content, handleClick}) => {
  return (
    <button className='button text-xs' onClick={handleClick}>
      {content}
    </button>
  )
}

export default Button
