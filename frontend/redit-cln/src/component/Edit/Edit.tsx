import React, { useState } from 'react'
import './Edit.scss'
import Input from '../Input/Input'
import { avaUrl } from '../../utils/avatar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/requestApi'
interface Props  {
    setIsEdit:any,
}

export default function Edit({setIsEdit}: Props) {
    const userName = useSelector((state:any)=>state.user) //useSelector để lấy giá trị từ store
    const dispatch = useDispatch() //useDispatch để thực hiện cách hành động vs store

    const [name,setName] = useState(userName.name)
    const [age,setAge] = useState(userName.age)
    const [about,setAbout] = useState(userName.about)
    const [theme,setTheme] = useState(userName.theme)
    const [img,setImg] = useState(userName.ava)


    const handleSubmit = (e:any) => {
        e.preventDefault()
        setIsEdit(false)
        const updateUserState = {
            name:name,
            age:age,
            about:about,
            theme:theme,
            ava:img,
        }
        updateUser(updateUserState,dispatch)
    }
    
    return (
    <>
        <form onSubmit={handleSubmit}>
            <section className="edit-container">
                <button className="close">
                    SAVE
                </button>
                <div className="edit-profile">Edit profile</div>
                <div className="input-container">
                    <Input lable='Display name' type='text' placeholder={userName.name} setData={(e:any)=>{setName(e.target.value)}}></Input>
                    <Input lable='Age' type='text' placeholder={userName.age} setData={(e:any)=>setAge(e.target.value)} ></Input>
                    <Input lable='About'  type='textarea' placeholder={userName.about} setData={(e:any)=>setAbout(e.target.value)} ></Input>
                    <label>Profile picture</label>
                    <div className="input-image-container">
                        {avaUrl.map((item,index) =>{
                            return <>
                                <img key={index} src={item} alt="" onClick={(e:any)=>{setImg(e.target.currentSrc)}} className='input-image' />
                            </>
                        })}
                    </div>
                    <div className="theme-container">
                        <label>Theme</label>
                        <input type="color" className="theme-color" onClick={(e:any)=>{setTheme(e.target.value)}}/>
                    </div>
                </div>
            </section>
        </form>
    </>
  )
}