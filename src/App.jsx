
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Layout from './Layout'
import Images from './Images'
import Cart from './Cart'
function App() {

  return (
    <>
  <Routes>
      <Route exact path='/' element={<Layout />} >
        <Route path ="/" element={<Images />} />
        <Route path ="cart" element={<Cart/>} />
      </Route>

        </Routes>
    </>
      ) 
}

export default App
