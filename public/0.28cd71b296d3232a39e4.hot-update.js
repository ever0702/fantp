webpackHotUpdate(0,{

/***/ 251:
/*!*************************************!*\
  !*** ./js/employee/EmployeeApp.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AddEmployeeForm = __webpack_require__(/*! ./cmps/AddEmployeeForm */ 252);
	
	var _AddEmployeeForm2 = _interopRequireDefault(_AddEmployeeForm);
	
	var _EmployeeList = __webpack_require__(/*! ./cmps/EmployeeList */ 253);
	
	var _EmployeeList2 = _interopRequireDefault(_EmployeeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EmployeeApp = function (_Component) {
		_inherits(EmployeeApp, _Component);
	
		function EmployeeApp() {
			_classCallCheck(this, EmployeeApp);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(EmployeeApp).apply(this, arguments));
		}
	
		_createClass(EmployeeApp, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_AddEmployeeForm2.default, null),
					_react2.default.createElement(_EmployeeList2.default, null),
					_react2.default.createElement(
						'p',
						null,
						'we are---ci---------sss'
					)
				);
			}
		}]);
	
		return EmployeeApp;
	}(_react.Component);

	// const EmployeeApp = () => (
	// 		<div>
	// 			<AddEmployeeForm />
	// 			<EmployeeList />
	// 			<p>we are---ci---------sss</p>
	// 		</div>
	// 	);

	// export default EmployeeApp;


	exports.default = EmployeeApp;

/***/ }

})
//# sourceMappingURL=0.28cd71b296d3232a39e4.hot-update.js.map