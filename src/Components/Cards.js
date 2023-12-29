import React from "react";
import { CgAirplane } from "react-icons/cg";


function Cards(props) {
  let review = props.reviews;
  return (
    <div className="flex flex-col md:relative w-[50vw]  ml-[5vw] bg-white h-[350px] gap-3 ">


      <div className=" md:relative bg-blue-700">
        <img
          className=" aspect-square absolute w-[140px] h-[140px] rounded-full mt-[-5rem] z-20 ml-8 "
          src={review.image}
          alt=""
        />
      </div>

      <div className="aspect-square absolute w-[140px] h-[140px] rounded-full bg-violet-600 z-15 mt-[-5rem] top-[-6px] ml-10"></div>

      <div className="text-center mt-11">
        <p className="text-3xl font-bold capitalize"> {review.name} </p>
      </div>

      <div className="text-center mt-1">
        <p className="text-md text-violet-300"> {review.job} </p>
      </div>

      <div className=" mx-auto text-violet-500">
        <CgAirplane />
      </div>

      <div className="text-center mt-1">
        <p className="text-md text-violet-500 pl-5 pr-5"> {review.text} </p>
      </div>

      <div  className=" mx-auto text-violet-500">
        <CgAirplane />
      </div>

     
          

    </div>
  );
}

export default Cards;
