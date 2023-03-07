
import React, {createContext,useContext,useState,useEffect}from 'react'

  const Context  =createContext()
  export const ContextProvider = ({children}) => {

const [allImage,setAllimage] = useState([])
const [cartItems,setCartitem]= useState([])

useEffect(()=> {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
  .then((response) => response.json())
  .then((data) => setAllimage(data));

},[])

 console.log(cartItems)


function Addcart(newitem){
setCartitem(previtem => [...previtem, newitem])

}

function Removecart(id){
    setCartitem(previtem => previtem.filter(item=> item.id !== id))
}


function toggle(id){
const  update = allImage.map(photo => { if(photo.id == id){
            console.log(!photo.isFavorite)
            console.log(id)
        return {...photo, isFavorite:!photo.isFavorite}
    } 
    return photo
  })
  setAllimage(update)
}

  return (
   <Context.Provider
   value ={{
    allImage,
    toggle,
    Addcart,
    Removecart,
    cartItems

   }}    
   
   >
    {children}
   </Context.Provider>
  ) 

}

 export const usecontext =()=> useContext(Context)