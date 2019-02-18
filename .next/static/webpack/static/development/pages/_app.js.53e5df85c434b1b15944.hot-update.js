webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/actionTypes.js":
/*!******************************!*\
  !*** ./store/actionTypes.js ***!
  \******************************/
/*! exports provided: UPDATE_LOADER_AND_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOADER_AND_ERROR", function() { return UPDATE_LOADER_AND_ERROR; });
// global
var UPDATE_LOADER_AND_ERROR = 'UPDATE_LOADER_AND_ERROR';

/***/ }),

/***/ "./store/reducers/global.reducers.js":
/*!*******************************************!*\
  !*** ./store/reducers/global.reducers.js ***!
  \*******************************************/
/*! exports provided: globalReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalReducer", function() { return globalReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./store/actionTypes.js");


var initialState = {
  showLoader: false,
  error: null
};

var updateLoaderAndError = function updateLoaderAndError(state, action) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    showLoader: action.showLoader,
    error: error
  });
};

var globalReducer = function globalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LOADER_AND_ERROR"]:
      return updateLoaderAndError(state, action);

    default:
      return state;
  }

  ;
};

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: globalReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.reducers */ "./store/reducers/global.reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalReducer", function() { return _global_reducers__WEBPACK_IMPORTED_MODULE_0__["globalReducer"]; });



/***/ }),

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



var enhancers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(typeof window !== 'undefined' && "development" !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.devToolsExtension() : function (f) {
  return f;
});
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  global: _reducers__WEBPACK_IMPORTED_MODULE_2__["globalReducer"]
});
var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
var createStoreWithMiddleware = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]);
/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, enhancers);
});

/***/ })

})
//# sourceMappingURL=_app.js.53e5df85c434b1b15944.hot-update.js.map