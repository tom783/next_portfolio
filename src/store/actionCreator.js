import { bindActionCreators } from "redux";
import store from "./index";
import * as actions from "./actions";

const { dispatch } = store;

export const Actions = bindActionCreators(actions, dispatch);
