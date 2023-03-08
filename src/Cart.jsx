import React,{useState,useEffect} from 'react'
import { usecontext } from './Context'
import Cartitem from './component/Cartitem';

const Cart = () => {
const [lace, setPlace]= useState("Place order")
const {cartItems,setCartitem}= usecontext();
const cartElement = cartItems.map(item => (<Cartitem key={item.id} item={item} />))
  const Totalprice = cartItems.length * 5.99

  function Place(){
    setPlace("Ordering...")
    setTimeout(() => {
        console.log("Order placed!")
        setPlace("Place Order")

    }, 3000);
  }
  useEffect (()=>{
    Place()
  },[])
  
  
  
  return (
<>
<main className="cart-page">
          <h1>Check out</h1>
            {cartElement}
            <p className="total-cost">Total:{Totalprice}  </p>
            <div className="order-button">
                <button onClick={Place}  >{lace}</button>
            </div>
        </main>

</>

  )
}

export default Cart