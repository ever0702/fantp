webpackHotUpdate(0,{

/***/ 340:
/*!*************************************!*\
  !*** ./js/todo/cmps/TodoSearch.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 32);
	
	var _rxUtils = __webpack_require__(/*! ../../utils/rxUtils */ 125);
	
	var _todoActions = __webpack_require__(/*! ../todoActions */ 81);
	
	var _Autocomplete = __webpack_require__(/*! ../../commonComponents/Autocomplete */ 322);
	
	var _Autocomplete2 = _interopRequireDefault(_Autocomplete);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoSearch = function TodoSearch(props) {
		return _react2.default.createElement(_Autocomplete2.default, _extends({}, props, { options: props.todoAutocompleteOptions }));
	};
	
	// let TodoSearch = ({todoSearchText, onTextChange, todoAutocompleteOptions}) => {
	// 	var sub = new Rx.Subject();
	// 	sub.subscribe(text => onTextChange(text));
	// 	return (
	// 			<Autocomplete options={todoAutocompleteOptions} text={todoSearchText} onTextChange={text=>sub.onNext(text)} />
	// 		)
	// }
	
	TodoSearch = (0, _reactRedux.connect)(function (state) {
		return {
			todoSearchText: state.todoApp.todoSearchText,
			todoAutocompleteOptions: state.todoApp.todoAutocompleteOptions
		};
	}, function (dispatch) {
		return {
			onTextChange: function onTextChange(text) {
				return dispatch((0, _todoActions.searchTodos)(text));
			}
		};
	})(TodoSearch);
	
	var _default = TodoSearch;
	exports.default = _default;
	
	(function () {
		function tagSource(fn, localName) {
			if (typeof fn !== "function") {
				return;
			}
	
			if (fn.hasOwnProperty("__source")) {
				return;
			}
	
			try {
				Object.defineProperty(fn, "__source", {
					enumerable: false,
					configurable: true,
					value: {
						fileName: '/Users/yong/Workspace/ps_workspace/redux_todo_list/js/todo/cmps/TodoSearch.jsx',
						localName: localName
					}
				});
			} catch (err) {}
		}
	
		tagSource(TodoSearch, 'TodoSearch');
		tagSource(_default, 'default');
	})();

/***/ }

})
//# sourceMappingURL=0.cadc3fe156f498f35761.hot-update.js.map