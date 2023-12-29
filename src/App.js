import React from "react";
import reviews from "./data"
import Testimonial from "./Components/Testimonial";

const App = () => {
  return <div className=" flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-violet-200 gap-5 ">
       
       <div className=" items-center  ">
        <h1 className="  font-bold text-4xl flex justify-center">Our testimonial</h1>
        <div className=" mx-auto w-[15rem] h-1 bg-blue-600"> </div>
         <Testimonial reviews = {reviews}/>
       </div>


    </div>;
}

export default App;
