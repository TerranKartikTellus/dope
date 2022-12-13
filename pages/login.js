import Link from "next/link";
import { useState } from "react";
export default function Login({contacts}){
  console.log("Contacts: ",contacts);
  const [dateRange , setRange] = useState(
    {
      "from": "2022-12-05",
      "to": "2022-12-22"
    }
    );
    
    const [filtered ,setfiltered] = useState(contacts.filter(i=>withinRange(i.createdat) && i  ));
  function withinRange(i){
    if(i >= dateRange.from && i <= dateRange.to) 
      return true 
    else 
      return false ;
  }

 const submitFormToDB = async(e) =>{
console.log(contacts);
setfiltered(contacts.filter(i=>withinRange(i.createdat) && i  ))
console.log(filtered);

}
const [msg,setMessage] = useState("");
  return(
    <div className="bg-lime-500 font-Maven h-screen p-3 flex-row flex items-center justify-center ">
      <Link href="/" className="relative bg-gray-100 flex flex-row items-center justify-center rounded-full w-10 h-10 hover:shadow-xl fixed top-5 left-5">
        <svg className="w-7 h-7 fill-lime-700" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero"/></svg>
        <div className="absolute top-12 animate-pulse text-center">{msg}</div>
      </Link>
      <div className="w-1/2 ">
         <div className="text-center mb-4">Login</div>
         <div className="grid grid-cols-2 px-20">

          <div className="text-base">Search From : 
          </div>
            <input defaultValue={"2022-12-05"} onChange={(e)=>{setRange({...dateRange, from: e.target.value}); console.log(dateRange);}} className="bg-transparent outline-none" type={"date"}></input>
          <div className="text-base">To : 
          </div>
            <input defaultValue={"2022-12-22"} onChange={(e)=>{setRange({...dateRange, to: e.target.value}); console.log(dateRange);}} className="bg-transparent outline-none" type={"date"}></input>
          <div className="text-base col-span-2 text-center border-b-2 border-black mt-3"> 
            <button className="" onClick={
              submitFormToDB
            }>Search</button>
            </div>

          </div>
            <div className="text-center w-full mt-10">Click on token of a contact to move to its page</div>
          
      </div>
      <div className="w-1/2 h-full overflow-y-auto">
        {filtered.length > 0 ? 
        <div>
          {filtered.map(i=>(
            <div key={i._id} className="bg-gray-50  my-2 p-2  rounded-lg select-none border-b-2 border-black py-10 mx-20">
              <div>
                <div>Created At: {i.createdat}</div>
                {/* <div className="bg-gray-50 p-3 my-2">Raw Form: <br></br>{JSON.stringify(i)} </div> */}
                {i.data.map((e)=>(
                 <div className="" key={e}>
                    <div className="p-3">

                  <div>Username : {e.name}</div>
                  <div>Password : <strong className="line-through hover:decoration-transparent">{e.pass}</strong></div>
                  
                  <div>{e.contact.map((ind,index)=>(
                    <Link onClick={()=>{
                      setMessage('Loaging Please Wait')
                    }} href={`/${ind[1]}`} key={index} className="hover:bg-black hover:text-white p-1">{index+1}. {ind[1]} - +91 {ind[0]} - {e.name} <br></br></Link>
                    ))}
                    </div>
                    </div>
                 </div>
                 ))
                }</div>
            
            </div>
            
          ))}
        </div> : <div>No Data Found</div>}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  
  // let res = await fetch(`https://cars-orcin.vercel.app`+"/api/cars", {
  let res = await fetch(`https://cars-orcin.vercel.app`+"/api/contacts", {
  method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let contacts = await res.json();

  return {
    props: { contacts },
  };
}