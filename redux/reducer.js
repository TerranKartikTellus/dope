import * as actionType from "./actionTypes";

let lastId = 0;
export default function reducer(state=[],action){
  switch(action.type){
    case actionType.addBug: 
      return [
        ...state,
        { id: ++lastId, 
          description: action.payload.description, 
          bugResolved: false
        }
      ]
    case actionType.removeBug: 
      return state.filter(
        i=> i.id != action.payload.id
        )
    case actionType.resolvedBug: 
      return state.map(i=>( 
        i.id==action.payload.id 
          ? {...i,bugResolved: true} 
          : i ) 
        )
    default: return state;
  }
}