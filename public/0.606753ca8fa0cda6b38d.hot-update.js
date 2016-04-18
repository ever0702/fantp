webpackHotUpdate(0,{

/***/ 259:
/*!***************************!*\
  !*** ./js/rootReducer.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 156);
	
	var _bookAppReducer = __webpack_require__(/*! ./book/bookAppReducer */ 247);
	
	var _bookAppReducer2 = _interopRequireDefault(_bookAppReducer);
	
	var _githubReducer = __webpack_require__(/*! ./github/githubReducer */ 256);
	
	var _githubReducer2 = _interopRequireDefault(_githubReducer);
	
	var _employeeReducer = __webpack_require__(/*! ./employee/employeeReducer */ 250);
	
	var _employeeReducer2 = _interopRequireDefault(_employeeReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (true) {
	    module.hot.accept();
	}
	
	var rootReducer = (0, _redux.combineReducers)({
	    bookApp: _bookAppReducer2.default,
	    githubApp: _githubReducer2.default,
	    employeeApp: _employeeReducer2.default
	});
	
	exports.default = rootReducer;

/***/ },

/***/ 570:
/*!*******************************************!*\
  !*** ./js/employee/cmps/EmployeeList.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 71);
	
	var _EmployeeListItem = __webpack_require__(/*! ./EmployeeListItem */ 571);
	
	var _EmployeeListItem2 = _interopRequireDefault(_EmployeeListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EmployeeList = function EmployeeList(_ref) {
		var employees = _ref.employees;
		return _react2.default.createElement(
			'div',
			null,
			employees.map(function (emp) {
				return _react2.default.createElement(_EmployeeListItem2.default, _extends({ key: emp.id }, emp));
			})
		);
	};
	
	EmployeeList = (0, _reactRedux.connect)(function (state) {
		return {
			employees: state.employeeApp.employees
		};
	})(EmployeeList);
	
	exports.default = EmployeeList;

/***/ }

})
//# sourceMappingURL=0.606753ca8fa0cda6b38d.hot-update.js.map