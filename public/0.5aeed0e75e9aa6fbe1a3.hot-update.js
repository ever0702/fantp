webpackHotUpdate(0,{

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
	
	console.log('hee');
	
	EmployeeList = (0, _reactRedux.connect)(function (state) {
		return {
			employees: state.employeeApp.employees
		};
	})(EmployeeList);
	
	exports.default = EmployeeList;

/***/ }

})
//# sourceMappingURL=0.5aeed0e75e9aa6fbe1a3.hot-update.js.map