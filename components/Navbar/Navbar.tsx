import React from 'react'
import Link from 'next/link'
import cssStyle from "./Navbar.module.css"

const NavBAr = () => {
  return (
    
      
      <div className={cssStyle.navbar}>
       <ul>
       <li><Link href="/">Home</Link></li>
<li><Link href="/Products">Products</Link></li>
<li><Link href="/Contacts">Contact</Link></li>

</ul>

    
    </div>
  )
}

export default NavBAr