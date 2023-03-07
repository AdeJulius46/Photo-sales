import React,{useContext,useState} from 'react'
import { usecontext } from './Context'




const Photo = ({className,img}) => {

    const {toggle,Addcart,cartItems,Removecart} =usecontext();
const [hover,setHover]=useState(false)


function Heart() {
    if(img.isFavorite){
        return <i className="ri-heart-fill favorite" onClick={() => toggle(img.id)}></i>
    }
    else if(hover){
        return  <i className="ri-heart-line favorite"  onClick={() => toggle(img.id)} ></i>
    }
}

function carticon(){
        const incart =cartItems.some((item)=> item.id == img.id)
    if(incart){
        return <i className="ri-shopping-cart-fill cart" onClick={() => Removecart(img.id)} ></i>

            }
    else if(hover){
        return <i className="ri-add-circle-line cart"    onClick={() => Addcart(img)}  ></i> 
 
    }
}

  return (
 <div className={`${className} image-container`}
 onMouseEnter={() => setHover(true)}
 onMouseLeave={() => setHover(false)} 
 
 >
            <img  src={img.url} className="image-grid"/>
            {Heart ()}
            {carticon ()}
        </div> 
  )
}

export default Photo