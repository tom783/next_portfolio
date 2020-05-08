import { handleActions } from "redux-actions";
import { produce } from "immer";
import * as actions from "../actions";

const initialState = {
  viewSlideIdx: 0,
};

export default handleActions(
  {
    [actions.SlideInit]: (state, { payload: maxLength }) => {
      return produce(state, draft => {
        draft.viewSlideIdx = initialState.viewSlideIdx;
      });
    },
    [actions.SlideLeft]: (state, { payload: maxLength }) => {
      return produce(state, draft => {
        if(state.viewSlideIdx -1 < 0){
          draft.viewSlideIdx = maxLength-1;
        }else{
          draft.viewSlideIdx = state.viewSlideIdx -1;
        }
      });
    },
    [actions.SlideRight]: (state, { payload: maxLength }) => {
      return produce(state, draft => {
        if(state.viewSlideIdx +1 >= maxLength){
          draft.viewSlideIdx = 0;
        }else{
          draft.viewSlideIdx = state.viewSlideIdx +1;
        }
      });
    },
  },
  initialState
);
