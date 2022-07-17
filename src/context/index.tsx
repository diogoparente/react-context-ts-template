import React, { PropsWithChildren } from "react";
import { IAction } from "./actions/counter.actions";
import counterReducer from "./reducers/counter.reducer";
import { combineReducers } from "./reducers/helpers";

export interface IAppState {
  counter: number;
}

export const initialState: IAppState = {
  counter: 0
};

export interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<IAction>;
}

const AppContext = React.createContext<IAppContext>({
  state: initialState,
  dispatch: () => {}
});

const mainReducer = combineReducers(counterReducer);

const AppContextProvider: React.FC<PropsWithChildren> = props => {
  const [state, dispatch] = React.useReducer(
    mainReducer,
    initialState as IAppState
  );

  const value = { state, dispatch };
  return <AppContext.Provider value={value} {...props} />;
};

export { AppContext, AppContextProvider };
