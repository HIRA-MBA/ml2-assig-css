import React from 'react'
import Image from 'next/image';
import CssStyle from './Header.module.css'

const Header = () => {
  return ( <div className={CssStyle.header}>
    <h1 className={CssStyle.text}>Glam & Glow</h1>
    <Image src="/images/logo.svg" alt='logo' width={180} height={80} />
  </div>
  )
}

export default Header