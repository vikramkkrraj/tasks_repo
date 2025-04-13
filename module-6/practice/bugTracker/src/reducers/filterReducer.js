export const initialFilterState = {
    severity: '',
    developerId: '',
    timeRange: { start: '', end: '' },
  };
  
  export function filterReducer(state, action) {
    switch (action.type) {
      case 'SET_SEVERITY':
        return { ...state, severity: action.payload };
      case 'SET_DEVELOPER':
        return { ...state, developerId: action.payload };
      case 'SET_TIME_RANGE':
        return { ...state, timeRange: action.payload };
      case 'RESET_FILTERS':
        return initialFilterState;
      default:
        return state;
    }
  }
  