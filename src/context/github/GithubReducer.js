const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        usersData: action.payload.usersData,
        isLoading: action.payload.isLoading,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        usersData: action.payload.usersData,
      };
    case 'GET_USER_DATA_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        isLoading: action.payload.isLoading,
        repos: action.payload.repos,
      };

    default:
      return state;
  }
};

export default githubReducer;
