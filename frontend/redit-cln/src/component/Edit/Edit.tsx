import React from 'react'
import './Edit.scss'
import Input from '../Input/Input'
import { avaUrl } from '../../utils/avatar'
type Props = {}

export default function Edit({}: Props) {
  return (
    <>
        <form>
            <section className="edit-container">
                <button className="close">
                    SAVE
                </button>
                <div className="edit-profile">Edit profile</div>
                <div className="input-container">
                    <Input lable='Display name' type='text' placeholder="Huu Dong" ></Input>
                    <Input lable='Age' type='text' placeholder="24" ></Input>
                    <Input lable='About' type='textarea' placeholder="Huu Dong" ></Input>
                    <label>Profile picture</label>
                    <div className="input-image-container">
                        {avaUrl.map((item,index) =>{
                            return <>
                                <img key={index} src={item} alt="" className='input-image' />
                            </>
                        })}
                    </div>
                    <div className="theme-container">
                        <label>Theme</label>
                        <input type="color" className="theme-color" />
                    </div>
                </div>
            </section>
        </form>
    </>
  )
}