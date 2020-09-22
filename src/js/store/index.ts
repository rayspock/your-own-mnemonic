import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../reducers/index";
import {MainMiddleware} from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initializeSagaMiddleware = createSagaMiddleware();

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(MainMiddleware, initializeSagaMiddleware))
);

initializeSagaMiddleware.run(apiSaga);

export default store;
