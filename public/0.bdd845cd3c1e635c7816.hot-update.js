webpackHotUpdate(0,{

/***/ 248:
/*!*************************************!*\
  !*** ./js/employee/EmployeeApp.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AddEmployeeForm = __webpack_require__(/*! ./cmps/AddEmployeeForm */ 249);
	
	var _AddEmployeeForm2 = _interopRequireDefault(_AddEmployeeForm);
	
	var _EmployeeList = __webpack_require__(/*! ./cmps/EmployeeList */ 570);
	
	var _EmployeeList2 = _interopRequireDefault(_EmployeeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EmployeeApp = function EmployeeApp() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_AddEmployeeForm2.default, null),
			_react2.default.createElement(_EmployeeList2.default, null),
			_react2.default.createElement(
				'div',
				null,
				'Wdell '
			)
		);
	};
	
	exports.default = EmployeeApp;

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
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 71);
	
	var _EmployeeListItem = __webpack_require__(/*! ./EmployeeListItem */ 571);
	
	var _EmployeeListItem2 = _interopRequireDefault(_EmployeeListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EmpList = function EmpList(_ref) {
		var employees = _ref.employees;
		return _react2.default.createElement(
			'div',
			null,
			employees.map(function (emp) {
				return _react2.default.createElement(_EmployeeListItem2.default, emp);
			})
		);
	};
	
	var EmployeeList = (0, _reactRedux.connect)(function (state) {
		return {
			employees: state.employeeApp.employees
		};
	})(EmpList);
	
	exports.default = EmployeeList;

/***/ },

/***/ 571:
/*!***********************************************!*\
  !*** ./js/employee/cmps/EmployeeListItem.jsx ***!
  \***********************************************/
/***/ function(module, exports) {

	"use strict";

/***/ }

})
//# sourceMappingURL=0.bdd845cd3c1e635c7816.hot-update.js.map