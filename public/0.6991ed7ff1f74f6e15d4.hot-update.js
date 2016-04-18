webpackHotUpdate(0,{

/***/ 106:
/*!***************************!*\
  !*** ./js/rootReducer.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 157);
	
	var _bookAppReducer = __webpack_require__(/*! ./book/bookAppReducer */ 248);
	
	var _bookAppReducer2 = _interopRequireDefault(_bookAppReducer);
	
	var _githubReducer = __webpack_require__(/*! ./github/githubReducer */ 259);
	
	var _githubReducer2 = _interopRequireDefault(_githubReducer);
	
	var _employeeReducer = __webpack_require__(/*! ./employee/employeeReducer */ 253);
	
	var _employeeReducer2 = _interopRequireDefault(_employeeReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// if(module.hot) {
	//     module.hot.accept();
	// }
	
	console.log('i m ok');
	var rootReducer = (0, _redux.combineReducers)({
	    bookApp: _bookAppReducer2.default,
	    githubApp: _githubReducer2.default,
	    employeeApp: _employeeReducer2.default
	});
	
	exports.default = rootReducer;

/***/ }

})
//# sourceMappingURL=0.6991ed7ff1f74f6e15d4.hot-update.js.map