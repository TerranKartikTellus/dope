import { useEffect, useState } from "react";

export default function Drop(){
  const array = [
    ['red'   ,'text-red-600'   ,'bg-red-600/30'  ,'text-red-600'       ],
    ['green' ,'text-green-600' ,'bg-green-600/30 '  ,'text-green-600' ],
    ['blue'  ,'text-blue-600'  ,'bg-blue-600/30  '  ,'text-blue-600'    ],
    ['yellow','text-yellow-600','bg-yellow-600/30'  ,'text-yellow-600' ],
    ['teal'  ,'text-teal-600'  ,'bg-teal-600/30 ','text-teal-600'      ],
    ['slate'  ,'text-slate-600'  ,'bg-slate-600/30 ','text-slate-600'      ],
    ['purple'  ,'text-purple-600'  ,'bg-purple-600/30 ','text-purple-600'      ],
    ['orange'  ,'text-orange-600'  ,'bg-orange-600/30 ','text-orange-600'      ],
    ['cyan'  ,'text-cyan-600'  ,'bg-cyan-600/30 ','text-cyan-600'      ], 
    ['emerald'  ,'text-emerald-600'  ,'bg-emerald-600/30 ','text-emerald-600'      ], 
    ['lime'  ,'text-lime-600'  ,'bg-lime-600/30 ','text-lime-600'      ], 
  ]
  
  const [array1,setarray1] = useState(array);
  const [select,setselect] = useState([]);
  const [hide,sethide] = useState(false);

  useEffect(()=>{

  },[array1,select])

 async function deleteAll(){
   await  setselect([]);
   await  setarray1(array)     
 }
  return(
    <div className="h-screen bg- text-gray-900 bg-gradient-to-br from-emerald-600 via-teal-500 to-violet-400 flex   flex-col item-center justify-center">
      <div className="w-2/6 relative overflow-y-hidden  bg-gray-100 h-[55px]  mx-auto rounded-lg mb-3">
        <div className="bar   flex flex-row items-center justify-start space-x-3  overflow-x-auto rounded-md  mx-auto mb-5 py-3 pl-3 pr-16">

        {select && select.map((i,index)=>(
          <button onClick={async ()=>{
            let temp = select.filter(function(item){
              return item!==i
            })
            await setselect(temp)
            temp=null
            // let temp1 = array.filter(function(item){
              //   return item==i
              // })
            await setarray1([...array1,i])
            // temp1=null
          }} key={i} className={"hover:line-through bg w-fit flex flex-row items-center justify-start p-1 capitalize rounded-sm font-bold "+` ${i[2]} ${i[3]}`}>
            {i[0]}
          </button>
        ))}
        <div className="text-transparent w-[120px]">.</div>
        </div>
        <div>
            <div className="bg-gray-100 flex flex-row items-center justify-center space-x-2 w-[69px] px-1 h-full absolute top-0 right-0">

        <button className="" onClick={deleteAll}>
          <img className="hover:opacity-80 w-10 h-10" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIuMDAyIDIuMDA1YzUuNTE4IDAgOS45OTggNC40OCA5Ljk5OCA5Ljk5NyAwIDUuNTE4LTQuNDggOS45OTgtOS45OTggOS45OTgtNS41MTcgMC05Ljk5Ny00LjQ4LTkuOTk3LTkuOTk4IDAtNS41MTcgNC40OC05Ljk5NyA5Ljk5Ny05Ljk5N3ptMCA4LjkzMy0yLjcyMS0yLjcyMmMtLjE0Ni0uMTQ2LS4zMzktLjIxOS0uNTMxLS4yMTktLjQwNCAwLS43NS4zMjQtLjc1Ljc0OSAwIC4xOTMuMDczLjM4NC4yMTkuNTMxbDIuNzIyIDIuNzIyLTIuNzI4IDIuNzI4Yy0uMTQ3LjE0Ny0uMjIuMzQtLjIyLjUzMSAwIC40MjcuMzUuNzUuNzUxLjc1LjE5MiAwIC4zODQtLjA3My41My0uMjE5bDIuNzI4LTIuNzI4IDIuNzI5IDIuNzI4Yy4xNDYuMTQ2LjMzOC4yMTkuNTMuMjE5LjQwMSAwIC43NS0uMzIzLjc1LS43NSAwLS4xOTEtLjA3My0uMzg0LS4yMi0uNTMxbC0yLjcyNy0yLjcyOCAyLjcxNy0yLjcxN2MuMTQ2LS4xNDcuMjE5LS4zMzguMjE5LS41MzEgMC0uNDI1LS4zNDYtLjc1LS43NS0uNzUtLjE5MiAwLS4zODUuMDczLS41MzEuMjJ6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="></img>
        </button>
            <p>|</p>
        
        <button className="" onClick={()=>{
          sethide(!hide);
        }}>
        <img className="hover:opacity-80 w-10 h-10" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTEuOTk4IDJjNS41MTcgMCA5Ljk5NyA0LjQ4IDkuOTk3IDkuOTk4IDAgNS41MTctNC40OCA5Ljk5Ny05Ljk5NyA5Ljk5Ny01LjUxOCAwLTkuOTk4LTQuNDgtOS45OTgtOS45OTcgMC01LjUxOCA0LjQ4LTkuOTk4IDkuOTk4LTkuOTk4em00Ljg0MyA4LjIxMWMuMTA4LS4xNDEuMTU3LS4zLjE1Ny0uNDU2IDAtLjM4OS0uMzA2LS43NTUtLjc0OS0uNzU1aC04LjUwMWMtLjQ0NSAwLS43NS4zNjctLjc1Ljc1NSAwIC4xNTcuMDUuMzE2LjE1OS40NTcgMS4yMDMgMS41NTQgMy4yNTIgNC4xOTkgNC4yNTggNS40OTguMTQyLjE4NC4zNi4yOS41OTIuMjkuMjMgMCAuNDQ5LS4xMDcuNTkxLS4yOTF6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="></img>
        </button>
        </div>
        </div>
      

      </div>
      { hide && array1 && <div className="shadow-lg  bg-gray-100/70 p-3 rounded mx-auto w-2/6">
        {array1.length>0 ? array1.map(
          (i,index)=>(
            <div key={i} className={`capitalize p-1 font-medium underline hover:underline-offset-2 transition-all duration-500 ease-in-out `+` ${i[1]}`}>
              <button  className="disabled:line-through disabled:opacity-80  capitalize"
               onClick={()=>{
                
                  setselect([...select,i])
                
                let temp = array1.filter(function(item){
                  return item!==i
                })
                setarray1(temp)
                temp=null
              }}>{i[0]}</button> 
              
            </div>
          )
        ): <p className="text-center">Empty</p>}
      </div>}
        { !hide && <div className="text-center text-4xl">Lets Play with colors</div>}
    </div>
  );
}