import React from 'react'
import "./Header.scss"
interface Props {
    setIsEdit:any,
}

export default function Header({setIsEdit}: Props) {
   const handleSetEdit = () => {
    setIsEdit(true)
    }
    return (
    <>
        <header style={{backgroundColor:"#ff9051",
            backgroundImage:'linear-gradient(180deg,#ff9051 2%,#ff9051, 65%,#181818 100%)'}} className="header">
            <div className="info-container">
                <div onClick={handleSetEdit}  className="info-edit">
                    Edit
                </div>
                <img src="https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a" alt="" className="info-ava" />
                <div className="info-username">Huu Dong</div>
                <div className="info-age">24 yearold</div>
                <div className="info-about">I'm web developer</div>
            </div>
        </header>
    </>
  )
}


