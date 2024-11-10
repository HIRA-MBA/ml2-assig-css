import React from 'react'
import Header from "@/components/Header/Header"
import NavBAr from '@/components/Navbar/Navbar'
import cssStyle from './contact.module.css'

const ContactUs = () => {
  return (
    <div>
        <Header></Header>
        <NavBAr></NavBAr>
      <div className={cssStyle.container}> 
      <h1>Contact Us</h1>
      <p>You can contact us</p>
      <ul>
         <li>whats app:0335-1234567</li>
         <li >Email:"hirashamimqureshi.gmail.com</li>

      </ul>
      </div>
    </div>
  )
}

export default ContactUs