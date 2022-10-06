const AlertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        alert: action.payload.alert,
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: action.payload.alert,
      };
    default:
      return state;
  }
};

export default AlertReducer;
