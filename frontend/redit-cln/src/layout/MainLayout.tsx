import React, { useState } from 'react'
import Header from '../component/Header/Header'
import Edit from '../component/Edit/Edit'
type Props = {}

export default function MainLayout({}: Props) {
  const [isEdit,setIsEdit] = useState(false)
  return (
  <div className='wrapper'>
    {!isEdit ? <Header setIsEdit={setIsEdit}/> : <Edit/>}
  </div>
  )
}