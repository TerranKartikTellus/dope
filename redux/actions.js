import * as actionType from "./actionTypes";


export const addBug = (description) => ({
  type: actionType.addBug,
  payload: {
    description: description
  }
})

export const removeBug = (id) => ({
   type: actionType.removeBug,
   payload: {
      id: id
   }
})

export const resolvedBug = (id) => ({
  type: actionType.resolvedBug,
  payload: {
    id: id
  }
})