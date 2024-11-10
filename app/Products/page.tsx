import React from 'react'
import Image from 'next/image'
import CssStyle from "./products.module.css"
import Header from "@/components/Header/Header"
import NavBAr from '@/components/Navbar/Navbar'



const Products = () => {
  return (<div >
    <Header></Header>
    <NavBAr></NavBAr>
    
<h2>Our Products</h2>

<div className={CssStyle.card}>
  <Image src="./images/bridal.svg" alt="bridal set" width={100} height={100}/>
  <h1>Jewelry</h1>
  <p className={CssStyle.price}>Rs.3000</p>
  <p>Bridal Set.</p>
  <p><button>Add to Cart</button></p>
</div>
<div className={CssStyle.card}>
  <Image src="./images/stoneset.svg" alt="bridal set" width={100} height={100}/>
  <h1>Necklace</h1>
  <p className={CssStyle.price}>Rs.1000</p>
  <p>Stone studded set.</p>
  <p><button>Add to Cart</button></p>
</div>
<div className={CssStyle.card}>
  <Image src="./images/nailpaints.svg" alt="bridal set" width={100} height={100}/>
  <h1>Nail Paints</h1>
  <p className={CssStyle.price}>Rs.100 each</p>
  <p>Nail Paints for gorgeous nails</p>
  <p><button>Add to Cart</button></p>
</div>
</div>


  )
}

export default Products
