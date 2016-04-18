webpackHotUpdate(0,{

/***/ 242:
/*!************************!*\
  !*** ./js/RootCmp.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(/*! ./components/Link */ 560);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (true) {
		module.hot.accept();
	}
	
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
						_Link2.default,
						{ to: '/todo-app' },
						'Todo App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_Link2.default,
						{ to: '/book-app' },
						'Book App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_Link2.default,
						{ to: '/github-app' },
						'Github App'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_Link2.default,
						{ to: '/employee-app' },
						'Employee App'
					)
				)
			),
			children
		);
	};
	
	exports.default = App;

/***/ },

/***/ 560:
/*!********************************!*\
  !*** ./js/components/Link.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Link = function Link(_ref) {
	  var active = _ref.active;
	  var children = _ref.children;
	  var _onClick = _ref.onClick;
	
	  if (active) {
	    return _react2.default.createElement(
	      "span",
	      null,
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    "a",
	    { href: "#",
	      onClick: function onClick(e) {
	        e.preventDefault();
	        _onClick();
	      }
	    },
	    children
	  );
	};
	
	Link.propTypes = {
	  active: _react.PropTypes.bool.isRequired,
	  children: _react.PropTypes.node.isRequired,
	  onClick: _react.PropTypes.func.isRequired
	};
	
	exports.default = Link;

/***/ }

})
//# sourceMappingURL=0.1a15d7fe4ce81352e2b3.hot-update.js.map