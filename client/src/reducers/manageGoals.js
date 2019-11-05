// export default function goalsReducer(state = [], action) {
//   switch(action.type){
//     case 'ADD_GOAL':
//       console.log('adding', action.goal )
//       return [...state, action.goal]
//     case 'LOADING_GOALS':
//       console.log("loading goals now")
//       return {...state, loading: [...state.loading, true]}
//     case 'FETCH_GOALS':
//       console.log("fetch goals")
//     //return {loading: false, goals: action.payload}
//     //return [...state, action.payload]
//     default:
//       console.log("hit default case in reducer")
//       return state;
//   }

export default function goalsReducer(state = {
  loading: false,
  goalsData: [] 
  }, action){
  
    switch(action.type){
      case 'CREATE_GOAL':
        console.log('creating', action.payload)
        return {...state, goalsData:[...state.goalsData, action.payload]}            
    //   case 'ADD_GOAL':
    //     console.log('adding', action.goal )
    //     return {...state, goalsData: [...state.goalsData, action.goal]}
      case 'LOADING_GOALS':
        console.log("loading goals now")
        return {...state, loading: true}
      case 'FETCH_GOALS':
        console.log("fetch goals")
        return {loading: false, goalsData: action.payload}
      case 'DELETE_GOAL':
        console.log("In REDUCER: deleting", action.payload)
        return {...state, loading: false, goalsData: state.goalsData.filter(goal => goal.id !== action.payload.id)}
      default:
        console.log("hit default case in reducer")
        return state;
  }
}