import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_GREETING') {
    return {
      ...state,
      greeting: state.proposed_greeting
    }
  } else if {
  return state
  }
}

export default rootReducer