import React from 'react'

function Button({ type, children, extraStyle }) {
    return (
        <button className={'button-style rounded-[100px] mx-auto block w-[134px] py-[13px] text-white font-semibold text-[18px] ${${extraStyle}}'} type={type}>
            {children}
        </button>
    )
}

export default Button
