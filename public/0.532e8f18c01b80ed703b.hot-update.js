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
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 238);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _simpleLogger = __webpack_require__(/*! ./middlewares/simpleLogger */ 163);
	
	var _simpleLogger2 = _interopRequireDefault(_simpleLogger);
	
	var _redux = __webpack_require__(/*! redux */ 106);
	
	var _rootReducer = __webpack_require__(/*! ./rootReducer */ 82);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configStore(initState) {
	
	    console.log('anoth hot', module.hot);
	    var store = (0, _redux.createStore)(_rootReducer2.default, initState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _simpleLogger2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	        return f;
	    }));
	
	    return store;
	};
	
	var store = configStore({});
	
	if (true) {
	    console.log('is store really hot?');
	    module.hot.accept(/*! ./rootReducer */ 82, function () {
	        console.log('reload??????????????');
	        var nextReducer = __webpack_require__(/*! ./rootReducer */ 82).default;
	        console.log(nextReducer);
	
	        console.log('reducer is being replacing');
	        store.replaceReducer(nextReducer);
	    });
	};
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=0.532e8f18c01b80ed703b.hot-update.js.map