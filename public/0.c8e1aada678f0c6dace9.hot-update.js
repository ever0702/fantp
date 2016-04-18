webpackHotUpdate(0,{

/***/ 263:
/*!**************************!*\
  !*** ./js/reduxStore.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 239);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _simpleLogger = __webpack_require__(/*! ./middlewares/simpleLogger */ 164);
	
	var _simpleLogger2 = _interopRequireDefault(_simpleLogger);
	
	var _redux = __webpack_require__(/*! redux */ 105);
	
	var _rootReducer = __webpack_require__(/*! ./rootReducer */ 107);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (true) {
	    module.hot.accept();
	}
	
	console.log('storess change');
	
	function configStore(initState) {
	
	    console.log('anoth hot', module.hot);
	    var store = (0, _redux.createStore)(_rootReducer2.default, initState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _simpleLogger2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	        return f;
	    }));
	
	    console.log('store is ', store);
	
	    return store;
	};
	
	var store = configStore({});
	
	if (true) {
	    module.hot.accept(/*! ./rootReducer */ 107, function () {
	        console.log('reload??????????????');
	        var nextReducer = __webpack_require__(/*! ./rootReducer */ 107).default;
	        console.log(nextReducer);
	
	        console.log('reducer is being replacing');
	        store.replaceReducer(nextReducer);
	    });
	};
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=0.c8e1aada678f0c6dace9.hot-update.js.map