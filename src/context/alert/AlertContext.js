import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: {},
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set an alert
  const setAlert = (msg, style) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        alert: { msg, style },
      },
    });

    setTimeout(
      () =>
        dispatch({
          type: 'REMOVE_ALERT',
          payload: {
            alert: {},
          },
        }),
      3000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
