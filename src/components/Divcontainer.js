import React, { useState} from 'react'
import {LeftOutlined} from '@ant-design/icons'
import './styles/divcontainer.css'

const Divcontainer = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='divcontainer'>
            <div className={!show ? 'login-two' : 'login-view'}>
                <div className='spinner'><input className="user-two" type="text" name="uname" placeholder="Adcropper" required />
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
                <div className='pass-two'>
                    <input className="password-two" type="password" name="pass" placeholder="Password" required />
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
                <div className='giris'>Giriş Yap</div>
                <div onClick={e => setShow(true)} className='kayıt'>Kayıt ol</div>
            </div>
            {show && <div className='sign-in'>
                <div onClick={e => setShow(false)} className='back'>
                    <LeftOutlined />
                </div>
                <div className='spinner'><input className="user-three" type="text" name="uname" placeholder="Name-Surname" required />
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
                <div className='spinner'><input className="user-three" type="text" name="uname" placeholder="E-Mail" required />
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
                <div className='spinner'>
                    <input className="password-three" type="password" name="pass" placeholder="Password" required />
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
                <div className='spinner'>
                    <input className="password-three password-again" type="password" name="pass" placeholder="Password Again" required />
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
                <div className='giris'>Kayıt</div>
            </div>}
        </div>
    )
}

export default Divcontainer