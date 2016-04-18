webpackHotUpdate(0,{

/***/ 161:
/*!****************************************!*\
  !*** ./js/employee/employeeReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _employeeActions = __webpack_require__(/*! ./employeeActions */ 160);
	
	var _employeeActions2 = _interopRequireDefault(_employeeActions);
	
	var _employeeActionCreators = __webpack_require__(/*! ./employeeActionCreators */ 159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var ADD_EMPLOYEE = _employeeActions2.default.ADD_EMPLOYEE;
	var EMPLOYEE_FORM_CHANGE = _employeeActions2.default.EMPLOYEE_FORM_CHANGE;
	
	
	var nextEmpId = 0;
	
	console.log('hey');
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
	
	    console.log('hhhh');
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

/***/ 263:
/*!**************************!*\
  !*** ./js/reduxStore.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configStore;
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 239);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _simpleLogger = __webpack_require__(/*! ./middlewares/simpleLogger */ 164);
	
	var _simpleLogger2 = _interopRequireDefault(_simpleLogger);
	
	var _redux = __webpack_require__(/*! redux */ 105);
	
	var _rootReducer = __webpack_require__(/*! ./rootReducer */ 107);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	process.env.NODE_ENV = 'dev';
	
	console.log(process.env.NODE_ENV);
	
	if (true) {
	    module.hot.accept();
	}
	
	function configStore(initState) {
	
	    console.log('anoth hot', module.hot);
	    var store = (0, _redux.createStore)(_rootReducer2.default, initState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _simpleLogger2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	        return f;
	    }));
	
	    if (true) {
	        module.hot.accept(/*! ./rootReducer */ 107, function () {
	            var nextReducer = __webpack_require__(/*! ./rootReducer */ 107);
	
	            console.log('reducer is being replacing');
	            store.replaceReducer(nextReducer);
	        });
	    };
	
	    console.log('store is ', store);
	
	    return store;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 2)))

/***/ }

})
//# sourceMappingURL=0.d92348f3cbd47f8c20a5.hot-update.js.map