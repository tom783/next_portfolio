import { handleActions } from "redux-actions";
import { produce } from "immer";
import * as actions from "../actions";

const initialState = {
  test: {
    string: "t"
  }
};

export default handleActions(
  {
    [actions.TEST]: (state, { payload: query }) => {
      return produce(state, draft => {
        console.log("TEST");
        draft.test.string = "test";
      });
    }
  },
  initialState
);
