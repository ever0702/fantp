webpackHotUpdate(0,{

/***/ 250:
/*!****************************************!*\
  !*** ./js/employee/employeeReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _employeeActions = __webpack_require__(/*! ./employeeActions */ 159);
	
	var _employeeActions2 = _interopRequireDefault(_employeeActions);
	
	var _employeeActionCreators = __webpack_require__(/*! ./employeeActionCreators */ 158);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var ADD_EMPLOYEE = _employeeActions2.default.ADD_EMPLOYEE;
	var EMPLOYEE_FORM_CHANGE = _employeeActions2.default.EMPLOYEE_FORM_CHANGE;
	
	
	var nextEmpId = 0;
	
	var defaultState = {
	    addEmployeeForm: {
	        firstName: 'Yo',
	        age: 14
	    },
	
	    employees: []
	};
	
	var reducer = function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case ADD_EMPLOYEE:
	            return _extends({}, state, {
	                employees: [].concat(_toConsumableArray(state.employees), [_extends({
	                    id: nextEmpId++
	                }, action.form)]),
	                addEmployeeForm: defaultState.addEmployeeForm
	            });
	        case EMPLOYEE_FORM_CHANGE:
	            return _extends({}, state, {
	                addEmployeeForm: _extends({}, action.form)
	            });
	        default:
	            return state;
	    }
	};
	
	exports.default = reducer;

/***/ },

/***/ 257:
/*!**********************!*\
  !*** ./js/index.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 556);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 457);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 71);
	
	var _redux = __webpack_require__(/*! redux */ 156);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 200);
	
	var _simpleLogger = __webpack_require__(/*! ./middlewares/simpleLogger */ 258);
	
	var _simpleLogger2 = _interopRequireDefault(_simpleLogger);
	
	var _rootReducer = __webpack_require__(/*! ./rootReducer */ 259);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	var _bookActionCreators = __webpack_require__(/*! ./book/bookActionCreators */ 105);
	
	var _BookApp = __webpack_require__(/*! ./book/BookApp */ 244);
	
	var _BookApp2 = _interopRequireDefault(_BookApp);
	
	var _todoApp = __webpack_require__(/*! ./todo/todoApp */ 260);
	
	var _todoApp2 = _interopRequireDefault(_todoApp);
	
	var _GithubApp = __webpack_require__(/*! ./github/GithubApp */ 251);
	
	var _GithubApp2 = _interopRequireDefault(_GithubApp);
	
	var _EmployeeApp = __webpack_require__(/*! ./employee/EmployeeApp */ 248);
	
	var _EmployeeApp2 = _interopRequireDefault(_EmployeeApp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import todoApp from './reducers/allReducers';
	// import App from './components/App';
	
	
	var store = (0, _redux.createStore)(_rootReducer2.default, {}, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _simpleLogger2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
		return f;
	}));
	
	// if (module.hot) {
	//   // Enable Webpack hot module replacement for reducers
	//   module.hot.accept('./rootReducer', () => {
	//     const nextRootReducer = require('./rootReducer');
	//     store.replaceReducer(nextRootReducer);
	//   });
	// }
	
	var App = function App(_ref) {
		var children = _ref.children;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h1',
				null,
				'My App'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/todo-app' },
						'Todo App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/book-app' },
						'Book App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/github-app' },
						'Github App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/employee-app' },
						'Employee App'
					)
				)
			),
			children
		);
	};
	
	// render(
	// 	<div>
	// 		<Provider store={store}>
	// 			<App/>
	// 		</Provider>
	// 	</div>,
	// 	document.getElementById('react')
	// 	);
	
	var Routes = _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: _reactRouter.hashHistory },
			_react2.default.createElement(
				_reactRouter.Route,
				{ path: '/', component: App },
				_react2.default.createElement(_reactRouter.IndexRoute, { component: _BookApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'todo-app', component: _todoApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'book-app', component: _BookApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'github-app', component: _GithubApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'employee-app', component: _EmployeeApp2.default })
			)
		)
	);
	
	(0, _reactDom.render)(Routes, document.getElementById('react'));

/***/ }

})
//# sourceMappingURL=0.23abe9abe9063f7278ba.hot-update.js.map