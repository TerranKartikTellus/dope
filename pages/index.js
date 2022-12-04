import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import {cars} from "/lib/cars"

export default function Home({cars}) {
 const [sideNav,setSideNav] = useState({active: false});
  return (
    <div className="font-Maven w-full h-screen bg-slate-200 overflow-y-hidden">
      
      
      <div className=" fixed top-0 left-0 w-screen h-[50px] flex flex-row bg-slate-200">
        <div className="flex flex-row items-center border-b-[1px] border-r-[1px] border-gray-300 - space-x-3 pl-4 w-full md:w-[278px] pr-4 md:pr-[80px] tracking-tight">
          <svg className="fill-red-500/80 w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z"/></svg>
          <div className="font-black text-lg w-[300px]">AUTO WORLD</div>
          <button onClick={()=>{setSideNav(!sideNav)}} className="b w-full flex flex-row justify-end md:hidden block">
            {
            sideNav ? <img className=" w-6 h-6" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjEgMTcuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE2LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE2LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC00YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xNi41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxNi41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNGMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTYuNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTYuNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1em0wLTRjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE2LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE2LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==" />
            : <svg className="w-5 h-5 fill-red-600/70" clipRule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
            }
          </button>
        
        </div>
        <div className="hidden md:block  border-b-[1px] border-r-[1px] border-gray-300 - space-x-3 px-4  w-8/12 tracking-tight">
          <div className="flex flex-row items-center bg400 my-auto mt-2">

          <button><svg className="w-6 h-6 " clipRule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg></button>
          <input className="capitalize w-full outline-none text-lg bg-transparent" type={"text"}></input>
          <button><svg className="w-5 h-5 fill-red-600/70" clipRule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg></button>
          </div>
        </div>
        
        <div className=" hidden md:block border-b-[1px] border-r-[1px] mt-1 border-gray-300 - space-x-3 px-4 w-2/12 tracking-tight">
          <div className="flex  flex-row items-center justify-between">

          <Link href="/sell"  className="font-black  text-red-600 bg-red-600/30 text-xs px-7 mx-1 py-2 rounded">Sell a car</Link>
          <button className="by-50  rounded-sm p-1"><img className=" w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjEgMTcuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE2LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE2LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC00YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xNi41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxNi41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNGMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTYuNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTYuNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1em0wLTRjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE2LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE2LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==" /></button>
          </div>
        </div>

        
        
      </div>

  <div className="block md:hidden flex flex-row ">
      {sideNav && <div className="b h-screen pt-[50px] w-[300px] border-r-[1px] border-gray-300">
        <DropDown title="Basic Information"   ico={<svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z"/></svg>}></DropDown>
        <DropDown title="Car Cost"            ico={<svg className="w-5 h-5 fill-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clipRule="evenodd"><path d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729 0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z"/></svg>}></DropDown>
        <DropDown title="Search Region"       ico={<svg className="w-5 h-5 fill-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clipRule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>}></DropDown>
        <DropDown title="Vehicle Condition"   ico={<svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 0h-8v24h24v-24h-16zm-2 22h-4v-4h4v4zm0-18h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-4v-14h4v2zm16 18h-14v-4h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v4zm0-6h-14v-14h14v14z"/></svg>}></DropDown>
        <DropDown title="Add characteristics" ico={<svg className="w-5 h-5 fill-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clipRule="evenodd"><path d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333-1.495-3.334-3.333-3.334m0 7.667c-2.39 0-4.333-1.943-4.333-4.333s1.943-4.334 4.333-4.334 4.333 1.944 4.333 4.334c0 2.39-1.943 4.333-4.333 4.333m-1.193 6.667h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046-.365.153-.718.226-1.077.226-.843 0-1.539-.392-2.566-.893l-1.687 1.686c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952l-2.689-2.689c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126"/></svg>}></DropDown>
        <DropDown title="Color"               ico={<svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 1c-4.971 0-10 1.343-10 3v3.073c-.471.452-.984 1.029-1.389 1.714-.417.705-.611 1.426-.611 2.105 0 .958.397 1.833 1.193 2.462.744.588 1.766.916 2.963.916 1.96 0 4.39-.879 6.844-2.919v1.15c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5v-1.501c0-.552.447-1 1-1s1 .448 1 1v3c0 .552.447 1 1 1s1-.448 1-1v-4c0-.552.447-1 1-1s1 .448 1 1v.502l.001 8.744c-.065.273-2.626 1.754-7.972 1.754-5.397 0-7.966-1.481-8.029-1.747v-3.998c-.601-.006-1.396-.119-2-.339v4.336c0 1.995 4 3.748 10.029 3.748 5.94 0 9.971-1.745 9.971-3.747v-15.253c0-1.657-5.029-3-10-3zm-10.528 8.296c.158-.268.34-.512.528-.744v4.145l-.187-.127c-.971-.768-1.099-1.992-.341-3.274zm2.528 3.968v-6.665c3.171 1.595 6.674.288 6.971 3.443-2.73 2.505-5.195 3.292-6.971 3.222zm8.078-7.483c-2.053 0-7.489-.39-7.489-1.391 0-1.011 4.986-1.609 7.489-1.609 2.568 0 7.511.609 7.511 1.609 0 1.011-5.41 1.391-7.511 1.391z"/></svg>}></DropDown>
        <div className="p-2">
          <div className=" text-gray-600 text-sm font-black">Found Cars: <strong>12,313</strong></div>
          <div className="flex flex-row justify-between mt-2">
            <button onClick={()=>{setSideNav(!sideNav)}} className="bg-red-500/70 px-10 py-1 text-gray-100 font-extrabold">Show</button>
            <button><svg className="w-8 h-8 rounded fill-red-600 bg-red-600/30" clipRule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg></button>
         </div>
        </div>
      </div>
      }
      {!sideNav &&
      <div className=" w-full pt-[50px] overflow-y-auto h-screen"><List sm={true} data={cars}></List></div>
      }</div>

      <div className="hidden md:block">
      <div className="flex flex-row  items-start justify-between ">

      <div className="b h-screen pt-[50px] w-[300px] border-r-[1px] border-gray-300">
        <DropDown title="Basic Information"   ico={<svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z"/></svg>}></DropDown>
        <DropDown title="Car Cost"            ico={<svg className="w-5 h-5 fill-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clipRule="evenodd"><path d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729 0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z"/></svg>}></DropDown>
        <DropDown title="Search Region"       ico={<svg className="w-5 h-5 fill-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clipRule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>}></DropDown>
        <DropDown title="Vehicle Condition"   ico={<svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 0h-8v24h24v-24h-16zm-2 22h-4v-4h4v4zm0-18h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-4v-14h4v2zm16 18h-14v-4h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v4zm0-6h-14v-14h14v14z"/></svg>}></DropDown>
        <DropDown title="Add characteristics" ico={<svg className="w-5 h-5 fill-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clipRule="evenodd"><path d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333-1.495-3.334-3.333-3.334m0 7.667c-2.39 0-4.333-1.943-4.333-4.333s1.943-4.334 4.333-4.334 4.333 1.944 4.333 4.334c0 2.39-1.943 4.333-4.333 4.333m-1.193 6.667h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046-.365.153-.718.226-1.077.226-.843 0-1.539-.392-2.566-.893l-1.687 1.686c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952l-2.689-2.689c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126"/></svg>}></DropDown>
        <DropDown title="Color"               ico={<svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 1c-4.971 0-10 1.343-10 3v3.073c-.471.452-.984 1.029-1.389 1.714-.417.705-.611 1.426-.611 2.105 0 .958.397 1.833 1.193 2.462.744.588 1.766.916 2.963.916 1.96 0 4.39-.879 6.844-2.919v1.15c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5v-1.501c0-.552.447-1 1-1s1 .448 1 1v3c0 .552.447 1 1 1s1-.448 1-1v-4c0-.552.447-1 1-1s1 .448 1 1v.502l.001 8.744c-.065.273-2.626 1.754-7.972 1.754-5.397 0-7.966-1.481-8.029-1.747v-3.998c-.601-.006-1.396-.119-2-.339v4.336c0 1.995 4 3.748 10.029 3.748 5.94 0 9.971-1.745 9.971-3.747v-15.253c0-1.657-5.029-3-10-3zm-10.528 8.296c.158-.268.34-.512.528-.744v4.145l-.187-.127c-.971-.768-1.099-1.992-.341-3.274zm2.528 3.968v-6.665c3.171 1.595 6.674.288 6.971 3.443-2.73 2.505-5.195 3.292-6.971 3.222zm8.078-7.483c-2.053 0-7.489-.39-7.489-1.391 0-1.011 4.986-1.609 7.489-1.609 2.568 0 7.511.609 7.511 1.609 0 1.011-5.41 1.391-7.511 1.391z"/></svg>}></DropDown>
        <div className="p-2">
          <div className=" text-gray-600 text-sm font-black">Found Cars: <strong>12,313</strong></div>
          <div className="flex flex-row justify-between mt-2">
            <button className="bg-red-500/70 px-10 py-1 text-gray-100 font-extrabold">Show</button>
            <button><svg className="w-8 h-8 rounded fill-red-600 bg-red-600/30" clipRule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg></button>
         </div>
        </div>
        
      </div>
      <div className="bg-600 w-full pt-[50px] overflow-y-auto h-screen ">
        {cars && <List sm={false} data={cars}></List>}
        {!cars && <div>Loading</div>}
      </div>
      </div>
      </div>
    </div>
    
  )
}

function DropDown({title,ico}){
  return(
    <div className="border-b-[1px] border-r-[1px] border-gray-300">
      <div className="flex flex-row py-3 px-2 items-center justify-around">
        <div className="space-x-2 flex flex-row items-center justify-start">
          <div className="w-[30px] bg-200">{ico && ico}</div>
          <div className="w-[200px] bd-200 font-black text-sm">{title && title}</div>
        </div>
        <div className="bg-">
          <button><svg className="w-5 h-5 " clipRule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg></button>
        </div>
        
      </div>     
    </div>
  );
}
function List({data,sm}){
  
  return(
    <div className="w-full p-4 ">
      {data.length >0 
      ?<div className={sm ? "w-full grid gap-4 overflow-y-auto grid-cols-1" :"w-full grid gap-4 overflow-y-auto grid-cols-3"}>
        {data.map((i,index)=>(
        <div key={index} className="bg-gray-100 rounded p-5">
          <div className="flex flex-row items-center justify-between">
            <div className="">
              <div className="text-xs text-gray-500">{i.uploaded}</div>
              <div className="text-lg font-black">{i.name}</div>
            </div>
            <button className="bg-red-600/20 p-2 rounded"><svg className="fill-red-600/80 w-6 h-6" clipRule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033-2.361 4.792-5.246.719 3.848 3.643-.948 5.255 4.707-2.505 4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z" fill-rule="nonzero"/></svg></button>
          </div>
          <div><img width={150} height={200} alt={i.name} className="w-full contrast-125 rounded my-2 object-cover h-[200px] " src={i.img}></img></div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Mileage: <strong className="text-gray-700">{i.mileage}</strong></div>
              <div className="text-sm text-gray-400">Engine: <strong className="text-gray-700">{i.engine}</strong></div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Location: <strong className="text-gray-700">{i.location}</strong></div>
              <div className="text-sm text-gray-400">Transimission: <strong className="text-gray-700">{i.transmission}</strong></div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-lg font-black">$ {i.cost}</div>
            <button className="bg-red-500/90 px-5 rounded py-1 text-gray-100">More details</button>
          </div>
      </div> 
      ))}
      </div>
      : <div className="text-xs  p-3">No cars</div> }
    </div>
  );
}

export async function getServerSideProps(context) {
  
  let res = await fetch(`https://cars-orcin.vercel.app`+"/api/cars", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let cars = await res.json();

  return {
    props: { cars },
  };
}