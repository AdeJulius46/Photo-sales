import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././App.css'

const Cartitem = ({item}) => {
  
  return (
    <>
    <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    
    </>
  )
}

export default Cartitem