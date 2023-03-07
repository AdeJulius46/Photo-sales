import React from 'react'
import { usecontext } from './Context'
import Cartitem from './component/Cartitem';

const Cart = () => {

const {cartItems}= usecontext();
  const cartElement = cartItems.map(item => (<Cartitem key={item.id} item={item} />))
  return (
<>
<main className="cart-page">
            <h1>Check out</h1>
         {cartElement}
        </main>

</>

  )
}

export default Cart