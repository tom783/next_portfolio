import { createAction } from "redux-actions";

export const SlideInit = "actions/SlideInit";
export const SlideLeft = "actions/SlideLeft";
export const SlideRight = "actions/SlideRight";


export const slideInit = createAction(SlideInit);
export const slideLeft = createAction(SlideLeft);
export const slideRight = createAction(SlideRight);
