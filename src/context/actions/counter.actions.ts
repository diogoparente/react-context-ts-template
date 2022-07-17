import { Dispatch } from "react";

export enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  GET = "GET"
}

export type IAction = {
  type: ActionType;
};

const add = (dispatch: Dispatch<IAction>) => dispatch({ type: ActionType.ADD });

const remove = (dispatch: Dispatch<IAction>) =>
  dispatch({ type: ActionType.REMOVE });

const get = (dispatch: Dispatch<IAction>) => dispatch({ type: ActionType.GET });

const counterActions = { add, remove, get };

export default counterActions;
