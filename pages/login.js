import Link from "next/link";

export default function Login({contacts}){
  console.log("Contacts: ",contacts);
  return(
    <div className="bg-lime-500 font-Maven h-screen p-3 ">
      <Link href="/" className="bg-gray-100 flex flex-row items-center justify-center rounded-full w-10 h-10 hover:shadow-xl fixed top-5 left-5">
        <svg className="w-7 h-7 fill-lime-700" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero"/></svg>
      </Link>
      
      <div className="h-full overflow-y-auto">
        {contacts.length > 0 ? 
        <div>
          {contacts.map(i=>(
            <div key={i._id} className="select-none border-b-2 border-black py-10 ">
              <div>
                {i.data.map((e)=>(
                 <div key={e}>{JSON.stringify(e)}
                  <div>Username : {e.name}</div>
                  <div>Password : <strong className="line-through hover:decoration-transparent">{e.pass}</strong></div>
                  <div>{e.contact.map((ind,index)=>(
                    <div key={index} className="">{index+1}. +91 {ind[0]} - {ind[1]}</div>
                  ))}</div>
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