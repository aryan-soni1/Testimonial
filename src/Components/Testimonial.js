import React, { useState } from 'react'
import Cards from './Cards'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Testimonial(props) {
    let review=props.reviews

    
const[index,setIndex] = useState(0)

function leftShiftHandle(){
  if(index-1<0){
    setIndex(review.length-1);
  }
  else{
    setIndex(index-1);
  }
}
function RightShiftHandle(){
  if(index+1>=review.length){
    setIndex(0);
  }
  else{
    setIndex(index+1);
  }
}

function SurpriseHandler(){
 let randomIndex =(Math.floor(Math.random()*review.length))
 setIndex( randomIndex);
}

  return (
    <div className=' '>
      <Cards reviews = {review[index]} />

      <div className="flex justify-center gap-3 m-4 pb   place-items-center mx-auto font-bold ">
     <button 
      onClick={leftShiftHandle}
     className="text-violet-500 hover:text-violet-800 cursor-pointer ">
        <FaAngleLeft />
      </button>
      <button 
        onClick={RightShiftHandle}
      className="text-violet-500 hover:text-violet-800 cursor-pointer">
        <FaAngleRight />
      </button>
     </div>

     <div className="flex justify-center gap-3 m-4">
     <button 
     onClick={SurpriseHandler}
     className="bg-blue bg-blue-700 text-white px-4 py-1 rounded-sm cursor-pointer hover:bg-blue-900 ">Surprise me</button>
     
     </div>

     
    </div>
  )
}

export default Testimonial
