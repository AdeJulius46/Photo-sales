import React from 'react'
import { usecontext } from './Context'
import Photo from './photo'
import {getClass} from './utils'
const Images = () => {
const {allImage}= usecontext();


console.log(allImage)
const picture = allImage.map((img,i) =>{
  return   <Photo key= {img.id}  img={img}  className={getClass(i)}/>
})


  return (
    <main className="photos">
    {picture}
</main>
  )
}

export default Images