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
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AddEmployeeForm = __webpack_require__(/*! ./cmps/AddEmployeeForm */ 249);
	
	var _AddEmployeeForm2 = _interopRequireDefault(_AddEmployeeForm);
	
	var _EmployeeList = __webpack_require__(/*! ./cmps/EmployeeList */ 250);
	
	var _EmployeeList2 = _interopRequireDefault(_EmployeeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EmployeeApp = function EmployeeApp() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_AddEmployeeForm2.default, null),
			_react2.default.createElement(_EmployeeList2.default, null),
			_react2.default.createElement(
				'p',
				null,
				'we sssff'
			)
		);
	};
	
	exports.default = EmployeeApp;

/***/ },

/***/ 259:
/*!**********************!*\
  !*** ./js/index.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 237);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 452);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 58);
	
	var _redux = __webpack_require__(/*! redux */ 106);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 201);
	
	var _reduxStore = __webpack_require__(/*! ./reduxStore */ 260);
	
	var _reduxStore2 = _interopRequireDefault(_reduxStore);
	
	var _simpleLogger = __webpack_require__(/*! ./middlewares/simpleLogger */ 163);
	
	var _simpleLogger2 = _interopRequireDefault(_simpleLogger);
	
	var _rootReducer = __webpack_require__(/*! ./rootReducer */ 82);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	var _bookActionCreators = __webpack_require__(/*! ./book/bookActionCreators */ 107);
	
	var _BookApp = __webpack_require__(/*! ./book/BookApp */ 244);
	
	var _BookApp2 = _interopRequireDefault(_BookApp);
	
	var _todoApp = __webpack_require__(/*! ./todo/todoApp */ 261);
	
	var _todoApp2 = _interopRequireDefault(_todoApp);
	
	var _GithubApp = __webpack_require__(/*! ./github/GithubApp */ 253);
	
	var _GithubApp2 = _interopRequireDefault(_GithubApp);
	
	var _EmployeeApp = __webpack_require__(/*! ./employee/EmployeeApp */ 248);
	
	var _EmployeeApp2 = _interopRequireDefault(_EmployeeApp);
	
	var _RootCmp = __webpack_require__(/*! ./RootCmp */ 559);
	
	var _RootCmp2 = _interopRequireDefault(_RootCmp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = _reduxStore2.default;
	
	// const App = ({children}) => (
	// 		<div>
	// 	        <h1>My App</h1>
	// 	        <ul>
	// 	          <li><Link to="/todo-app">Todo App</Link></li>
	// 	          <li><Link to="/book-app">Book App</Link></li>
	// 	          <li><Link to="/github-app">Github App</Link></li>
	// 	          <li><Link to="/employee-app">Employee App</Link></li>
	// 	        </ul>
	
	// 	        {children}
	//       </div>
	// 	);
	
	// render(
	// 	<div>
	// 		<Provider store={store}>
	// 			<App/>
	// 		</Provider>
	// 	</div>,
	// 	document.getElementById('react')
	// 	);
	
	// import todoApp from './reducers/allReducers';
	// import App from './components/App';
	var Routes = _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: _reactRouter.hashHistory },
			_react2.default.createElement(
				_reactRouter.Route,
				{ path: '/', component: _RootCmp2.default },
				_react2.default.createElement(_reactRouter.IndexRoute, { component: _BookApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'todo-app', component: _todoApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'book-app', component: _BookApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'github-app', component: _GithubApp2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'employee-app', component: _EmployeeApp2.default })
			)
		)
	);
	
	(0, _reactDom.render)(Routes, document.getElementById('react'));

/***/ },

/***/ 559:
/*!************************!*\
  !*** ./js/RootCmp.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App(_ref) {
		var children = _ref.children;
		return _react2.default.createElement(
			"div",
			null,
			_react2.default.createElement(
				"h1",
				null,
				"My App"
			),
			_react2.default.createElement(
				"ul",
				null,
				_react2.default.createElement(
					"li",
					null,
					_react2.default.createElement(
						Link,
						{ to: "/todo-app" },
						"Todo App"
					)
				),
				_react2.default.createElement(
					"li",
					null,
					_react2.default.createElement(
						Link,
						{ to: "/book-app" },
						"Book App"
					)
				),
				_react2.default.createElement(
					"li",
					null,
					_react2.default.createElement(
						Link,
						{ to: "/github-app" },
						"Github App"
					)
				),
				_react2.default.createElement(
					"li",
					null,
					_react2.default.createElement(
						Link,
						{ to: "/employee-app" },
						"Employee App"
					)
				)
			),
			children
		);
	};
	
	exports.default = App;

/***/ }

})
//# sourceMappingURL=0.b22645c78fe0dc906210.hot-update.js.map