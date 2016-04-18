webpackHotUpdate(0,{

/***/ 572:
/*!**************************!*\
  !*** ./js/reduxStore.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configStore;
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 558);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _simpleLogger = __webpack_require__(/*! ./middlewares/simpleLogger */ 261);
	
	var _simpleLogger2 = _interopRequireDefault(_simpleLogger);
	
	var _redux = __webpack_require__(/*! redux */ 157);
	
	var _rootReducer = __webpack_require__(/*! ./rootReducer */ 106);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (true) {
	    module.hot.accept();
	}
	
	function configStore(initState) {
	
	    console.log('anoth hot', module.hot);
	    var store = (0, _redux.createStore)(_rootReducer2.default, initState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _simpleLogger2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	        return f;
	    }));
	
	    if (true) {
	        module.hot.accept(/*! ./rootReducer */ 106, function () {
	            var nextReducer = __webpack_require__(/*! ./rootReducer */ 106);
	
	            console.log('reducer is being replacing');
	            store.replaceReducer(nextReducer);
	        });
	    };
	
	    console.log('store is ', store);
	
	    return store;
	};

/***/ }

})
//# sourceMappingURL=0.4f4760a2e809433144cd.hot-update.js.map