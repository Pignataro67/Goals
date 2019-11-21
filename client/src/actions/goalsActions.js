const goalsURL = "/api/goals";
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function fetchGoals(){
  return (dispatch) => {
    dispatch({type: "LOADING_GOALS"})
      return fetch(goalsURL)
        .then(response => response.json())
        .then(goals => dispatch({type: 'FETCH_GOALS', payload: goals}))
  }
}

export function fetchGoal(id){
  return (dispatch) => {
    dispatch({type: "LOADING_GOALS"})
      return fetch(`${goalsURL}/${id}`)
        .then(response => response.json())
        .then(goal => dispatch({type: "FETCH_GOAL", payload: goal}))
  }
}

export const addGoal = ( goalInput ) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(goalInput)
  }
    
  return dispatch => {
    fetch(`${ goalsURL }`, data)
      .then(response => response.json())
      .then(goal => dispatch({
        type: 'CREATE_GOAL',
        payload: goal
      }))
      .catch(err => err)
  }
}

export const deleteGoal = (goal_id) =>{
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  
  return dispatch => {
    fetch(`${goalsURL}/${goal_id}`, data)
      .then(response => response.json())
      .then(goal => dispatch({
        type: 'DELETE_GOAL',
        payload: goal
      }))
      .catch(err => err)
  }
}