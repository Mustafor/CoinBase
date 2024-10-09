import React from 'react'

function Button({title, type}) {
  return (
    <button className={'button-style rounded-[100px] mx-auto block w-[134px] py-[13px] text-white font-semibold text-[18px] bg-[]'} type={type}>{title}</button>
  )
}

export default Button