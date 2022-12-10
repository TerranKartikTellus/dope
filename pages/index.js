import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home({contacts}) {
const [loading,setloading] = useState("Login");

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen bg flex flex-row items-center justify-start">
        <Link className="w-1/2 hover:bg-green-600 bg-green-500 h-full flex flex-row items-center justify-center text-2xl text-white font-Maven font-bold" href={"/user"} >User <br/> </Link>
        <Link onClick={()=>{setloading("Loading")}} href="/login" className="w-1/2 text-center city-90 bg-green-700 h-full flex flex-col items-center justify-center text-2xl text-white font-Maven ">
          {loading}
         

          
        </Link>  
      </div>
    </div>
  );
}
