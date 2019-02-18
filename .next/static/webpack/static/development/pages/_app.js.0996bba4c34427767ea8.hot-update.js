webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/store.init.js":
/*!*****************************!*\
  !*** ./store/store.init.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");



/*const enhancers = compose(
    typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : f => f
);

const rootReducer = combineReducers({
    global: reducers.globalReducer
});

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

export default initialState =>
    createStoreWithMiddleware(rootReducer, initialState, enhancers)*/

var composeEnhancers = typeof window !== 'undefined' && "development" !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :  false || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  global: _reducers__WEBPACK_IMPORTED_MODULE_2__["globalReducer"]
});
var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=_app.js.0996bba4c34427767ea8.hot-update.js.map