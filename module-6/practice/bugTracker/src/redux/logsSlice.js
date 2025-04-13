const initialState = {
  originalLogs: [],
  filteredLogs: [],
  isLoading: false,
  error: null
};

export default function logReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPLOAD_LOGS':
      return {
        ...state,
        originalLogs: action.payload,
        filteredLogs: action.payload,
        isLoading: false
      };
    case 'FILTER_LOGS':
      return {
        ...state,
        filteredLogs: action.payload
      };
    case 'LOADING_LOGS':
      return {
        ...state,
        isLoading: true
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}