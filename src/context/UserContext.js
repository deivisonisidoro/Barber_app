import React, {createContext, useReducer} from 'react';
import {initialState, UserReducer} from '../reducers/UserReducers';
export const UserContext = createContext();

export default ({children })=>{
  const [state, dispach]= useReducer(UserReducer, initialState);
  return(
    <UserContext.Provider value={{state, dispach}}>
      {children}
    </UserContext.Provider>
  );
}