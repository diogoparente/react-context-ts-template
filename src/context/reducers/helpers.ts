const combineReducers =
  (...reducers: Function[]) =>
  (state: any, action: any) =>
    reducers.reduce((newState, reducer) => reducer(newState, action), state);

export { combineReducers };
