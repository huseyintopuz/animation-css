import React from 'react'
import CyclingBoy from '../components/CyclingBoy'
import Button from '../components/Button'
import Searchbox from '../components/Searchbox'
import Login from '../components/Login'
import Steps from '../components/Steps'
import SocialMediaIcon from '../components/SocialMediaIcon'
import Checkbox from '../components/Checkbox'
import Calendar from '../components/Calendar'
import Combobox from '../components/Combobox'
import Divcontainer from './Divcontainer'
import '../components/styles/layout.css'

const Layout = () => {
  return (
    <div className='layout'>
      <CyclingBoy />
      <div className="group">
        <Button />
        <Searchbox />
        <Login />
      </div>
      <Steps />
      <SocialMediaIcon />
      <Checkbox />
      <Calendar />
      <Combobox />
      <Divcontainer />
    </div>
  )
}

export default Layout