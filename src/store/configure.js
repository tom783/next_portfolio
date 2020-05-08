import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const configure = () => {
  const store = createStore(modules);
  // const store = createStore(modules, applyMiddleware(sagaMiddleware));
  // sagaMiddleware.run(rootSaga);
  return store;
};

export default configure;
