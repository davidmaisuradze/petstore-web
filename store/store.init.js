import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const rootReducer = combineReducers({});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

export default store;