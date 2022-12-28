import React, { useState } from 'react'
import Header from '../component/Header/Header'
import Edit from '../component/Edit/Edit'

export default function MainLayout() {
  const [isEdit,setIsEdit] = useState(false)
  return (
  <div className='wrapper'>
    {!isEdit ? <Header setIsEdit={setIsEdit}/> : <Edit setIsEdit={setIsEdit}/>}
  </div>
  )
}