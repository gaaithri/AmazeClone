import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();
// wrap App and provide the data layer
// the StateProvider function => type useContext
export const StateProvider = ({ reducer, initialState, children }) =>

    (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );

// to pull the information from the data layer . this is now accessible to all the componenets 
export const useStateValue = () => useContext(StateContext);
// validate 
const { state, dispatch } = useStateValue;