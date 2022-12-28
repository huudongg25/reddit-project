import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import "./Header.scss"
interface Props {
    setIsEdit:any,
}

export default function Header({setIsEdit}: Props) {
   const handleSetEdit = () => {
    setIsEdit(true)
    }

    const userName = useSelector((state:any)=>state.user) //useSelector để lấy giá trị từ store
    

    return (
    <>
        <header style={{backgroundColor:`${userName.theme}`,
            backgroundImage:`linear-gradient(180deg,${userName.theme} 2%,${userName.theme}, 65%,#181818 100%)`}} className="header">
            <div className="info-container">
                <div onClick={handleSetEdit}  className="info-edit">
                    Edit
                </div>
                <img src={userName.ava} alt="" className="info-ava" />
                <div className="info-username">{userName.name}</div>
                <div className="info-age">{userName.age} years old</div>
                <div className="info-about">" {userName.about} "</div>
            </div>
        </header>
    </>
  )
}


