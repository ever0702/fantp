webpackHotUpdate(0,{

/***/ 253:
/*!*******************************************!*\
  !*** ./js/employee/cmps/EmployeeList.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 58);
	
	var _EmployeeListItem = __webpack_require__(/*! ./EmployeeListItem */ 254);
	
	var _EmployeeListItem2 = _interopRequireDefault(_EmployeeListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EmployeeList = function EmployeeList(_ref) {
		var employees = _ref.employees;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'This is the list'
			),
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
//# sourceMappingURL=0.9d7d8454b3420e13e94a.hot-update.js.map