import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';

const enhancers = compose(
    typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
        ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
);

const rootReducer = combineReducers({
    global: reducers.globalReducer
});

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

export default initialState =>
    createStoreWithMiddleware(rootReducer, initialState, enhancers)