import React from 'react'

interface Props {
    lable: string,
    type: string,
    placeholder: string,
}

export default function Input({lable,type,placeholder}:Props) {

  return (
    <>
        <label htmlFor="">{lable}</label>
        {type === 'textarea'? <textarea className='input-about'></textarea> : <input type={type || 'text'} placeholder={placeholder} />}
        
    </>
  )
}