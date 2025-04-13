const initialState = {
  isRecruiter: false,
  currentUser: null
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SESSION':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}