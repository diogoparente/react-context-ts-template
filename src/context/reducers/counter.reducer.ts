import { IAppState } from "..";
import { ActionType, IAction } from "../actions/counter.actions";

const counterReducer = (state: IAppState, action: IAction) => {
  switch (action.type) {
    case ActionType.ADD: {
      return {
        counter: state.counter++
      };
    }
    case ActionType.REMOVE: {
      return {
        counter: state.counter--
      };
    }

    case ActionType.GET: {
      return state.counter;
    }

    default:
      return state;
  }
};

export default counterReducer;
