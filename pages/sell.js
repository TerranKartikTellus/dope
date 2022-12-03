export default function Sell(){

  let submitForm = async (e) => {
  // setLoading(true);
  e.preventDefault();
  console.log('sent1');
  let res = await fetch("/api/addCar", {
    method: "POST",
    body: JSON.stringify(
      {
    name:          document.getElementById('n').value,
    uploaded:      document.getElementById('d').value,
    location:      document.getElementById('l').value,
    mileage:       document.getElementById('m').value,
    engine:        document.getElementById('e').value,
    transmission:  document.getElementById('t').value,
    cost:          document.getElementById('c').value,
    img:           document.getElementById('i').value
  }
    ),
  });
  res = await res.json();
  console.log('add res:',res);
  if(res.msg=="Insertion Completed"){
    document.location.href="/";
  }
  // setPostsState([...postsState, res]);
  // setTitle("");
  // setContent("");
  // setLoading(false);
};
  return(
    <div className="bg-gray-300 h-screen flex flex-col items-center justify-center">
      <div className="text-3xl">Sell Car</div>
      <div className="flex flex-col items-center justify-center w-full">
        <input className="bg-transparent border-b-2 text-black placeholder-black/50 font-bold outline-0 w-5/6 p-1 m-1 capitalize" id="n" placeholder="Name"></input>
        <input className="bg-transparent border-b-2 text-black placeholder-black/50 font-bold outline-0 w-5/6 p-1 m-1 capitalize" id="d" placeholder="Date"></input>
        <input className="bg-transparent border-b-2 text-black placeholder-black/50 font-bold outline-0 w-5/6 p-1 m-1 capitalize" id="l" placeholder="Location"></input>
        <input className="bg-transparent border-b-2 text-black placeholder-black/50 font-bold outline-0 w-5/6 p-1 m-1 capitalize" id="m" placeholder="Mileage"></input>
        <input className="bg-transparent border-b-2 text-black placeholder-black/50 font-bold outline-0 w-5/6 p-1 m-1 capitalize" id="e" placeholder="Engine"></input>
        <input className="bg-transparent border-b-2 text-black placeholder-black/50 font-bold outline-0 w-5/6 p-1 m-1 capitalize" id="t" placeholder="Transmission"></input>
        <input className="bg-transparent border-b-2 text-black placeholder-black/50 font-bold outline-0 w-5/6 p-1 m-1 capitalize" id="c" placeholder="Cost" type={"number"}></input>
        <input className="bg-transparent border-b-2 text-black placeholder-black/50 font-bold outline-0 w-5/6 p-1 m-1 " id="i" placeholder="Image Link" ></input>
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  )
}