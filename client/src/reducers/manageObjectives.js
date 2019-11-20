export default function objectivesReducer(state = {
  loading: false,
  objectivesData: []}, 
  action){
  switch(action.type){
    case 'FETCH_OBJECTIVES':
      console.log("Fetching objectives", action.payload)
      return {...state, objectivesData: action.payload.objectives}
    case 'LOADING_OBJECTIVES':
      console.log("loading goals now")
      return {...state, loading: true}
    case 'CREATE_OBJECTIVE':
      console.log('CREATE Objectives', action.payload )
      return {...state, objectivesData:[...state.objectivesData, action.payload.objective]}
    case 'DELETE_OBJECTIVE':
      console.log("Deleting Objective", action.payload)
      return {...state, loading: false, objectivesData: state.objectivesData.filter(objective => objective.id !== action.payload.id )}
  default:
    console.log("hit default case in objective reducer")
    return state;
  }
}