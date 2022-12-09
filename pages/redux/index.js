import store from "../../redux/store";
import { addBug, removeBug ,resolvedBug } from "../../redux/actions";
export default function reduxHome(){
  console.log(store);  


  return(
    <div className="bg-lime-600 w-full h-screen flex flex-row items-center justify-center">
      <button onClick={ ()=>{ store.dispatch(addBug("Bug1"));  console.log("New Store State",store.getState());} }>Add Bug</button>
      <button onClick={ ()=>{ store.dispatch(removeBug(2))  ;  console.log("New Store State",store.getState());} }>Remove Bug</button>
      <button onClick={ ()=>{ store.dispatch(resolvedBug(1))  ;  console.log("New Store State",store.getState());} }>Resolved Bug</button>
    </div>
  );
}