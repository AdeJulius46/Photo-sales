import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././App.css'
import { usecontext } from '../Context';

const Cartitem = ({item}) => {

  
  const {Removecart,Addcart}=usecontext();
  return (
    <>
    <div className="cart-item">
            <i className="ri-delete-bin-line"  onClick={()=> Removecart(item.id)} ></i>
            {/* <i className="ri-add-circle-line" onClick={() => Addcart(item.id)}></i> */}
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    
    </>
  )
}

export default Cartitem