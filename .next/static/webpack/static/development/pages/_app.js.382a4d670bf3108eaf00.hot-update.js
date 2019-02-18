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




var enhancers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(typeof window !== 'undefined' && "development" !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function (f) {
  return f;
});
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  globalReducer: _reducers__WEBPACK_IMPORTED_MODULE_2__["globalReducer"]
});
var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
var createStoreWithMiddleware = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]);
/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, enhancers);
});

/***/ })

})
//# sourceMappingURL=_app.js.382a4d670bf3108eaf00.hot-update.js.map