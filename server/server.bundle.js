/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	__webpack_require__(3);

	__webpack_require__(1);

	var _path = __webpack_require__(5);

	var _path2 = _interopRequireDefault(_path);

	__webpack_require__(6);

	var _express = __webpack_require__(7);

	var _express2 = _interopRequireDefault(_express);

	var _app = __webpack_require__(8);

	var _socket = __webpack_require__(39);

	var _socket2 = _interopRequireDefault(_socket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	var app = (0, _express2.default)();

	(0, _app.configServer)(app);

	_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	    var server, io;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	            switch (_context.prev = _context.next) {
	                case 0:
	                    _context.next = 2;
	                    return (0, _app.connectToDB)();

	                case 2:
	                    server = app.listen(_app.port, function () {
	                        return console.log('Listening on Port ', _app.port);
	                    });
	                    io = _socket2.default.listen(server);


	                    (0, _app.configServerRoutes)(app, io);

	                    app.get('/*', function (req, res) {
	                        res.sendFile(_path2.default.join('../public', 'index.html'), { root: __dirname });
	                    });

	                case 6:
	                case 'end':
	                    return _context.stop();
	            }
	        }
	    }, _callee, undefined);
	}))();

	console.log('This is the production server file');

	console.log(_app.config.database);
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint max-len: 0 */
	// TODO: eventually deprecate this console.trace("use the `babel-register` package instead of `babel-core/register`");
	module.exports = __webpack_require__(4);


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("babel-register");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var containStr = function containStr(obj, str) {
		var sensitive = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

		if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
			if (sensitive) {
				return String(obj).indexOf(String(str)) > -1;
			} else {}
		}
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = Object.values(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var v = _step.value;

				if (String(v).indexOf(str) > -1) {
					return true;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return false;
	};

	if (!Object.prototype.filterPipe) {

		Object.defineProperty(Object.prototype, 'filterPipe', {
			enumerable: false,
			writable: false,
			value: function value(toCompare) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				var self = this;
				var isFunction = typeof toCompare === 'function';
				var isArray = Array.isArray(self);

				if (isFunction) {
					if (isArray) {
						return self.filter(function (item) {
							return toCompare.apply(null, [item].concat(args));
						});
					} else {
						return toCompare.apply(null, [self].concat(args));
					}
				} else {
					var val = String(toCompare);

					if (isArray) {
						return self.filter(function (item) {
							return containStr(item, toCompare);
						});
					} else {
						return containStr(this, toCompare) ? this : null;
					}
				}
			}
		});
	}

	if (!Object.prototype.sortPipe) {
		Object.defineProperty(Object.prototype, 'sortPipe', {
			enumerable: false,
			writable: false,
			value: function value(toCompare) {
				var order = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];


				if (!Array.isArray(this)) return this;

				if (toCompare === undefined) {
					order = true;
				} else if (typeof toCompare == 'boolean') {
					order = toCompare;
					toCompare = null;
				}

				return this.sort(function (s1, s2) {
					if ((typeof s1 === 'undefined' ? 'undefined' : _typeof(s1)) === 'object') {
						if (s1[toCompare] == s2[toCompare]) return 0;
						return s1[toCompare] > s2[toCompare] === order ? 1 : -1;
					} else {
						if (s1 === s2) return 0;
						return s1 > s2 === order ? 1 : -1;
					}
				});
			}
		});
	}

	if (!Object.prototype.gatherProps) {
		Object.defineProperty(Object.prototype, 'gatherProps', {
			enumerable: false,
			writable: false,
			value: function value() {
				if (_typeof(this) != 'object') return this;
				var result = {};
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var key = _step2.value;

						result[key] = this[key];
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				return result;
			}
		});
	}

	if (!Object.prototype.sliceProps) {
		Object.defineProperty(Object.prototype, 'sliceProps', {
			enumerable: false,
			writable: false,
			value: function value() {
				if (_typeof(this) != 'object') return this;
				var result = Object.assign(this);
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = arguments[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var key = _step3.value;

						delete result[key];
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				return result;
			}
		});
	}

	if (!Object.prototype.overrideProps) {
		Object.defineProperty(Object.prototype, 'overrideProps', {
			enumerable: false,
			writable: false,
			value: function value(target) {
				if (_typeof(this) != 'object') return this;

				var result = _extends({}, this);

				for (var key in this) {
					if (target[key]) result[key] = target[key];
				}

				return result;
			}
		});
	}
	// if (!Object.prototype.mergeProps) {
	// 	Object.defineProperty(Object.prototype, 'mergeProps', {
	// 		enumerable: false,
	// 		writable: false,
	// 		value: function(target) {
	// 			if (typeof this != 'object') return this;

	// 			let result = {...this};

	// 			for(let key in target) {
	// 				result[key] = target[key];
	// 			}
	// 			return result;
	// 		}
	// 	})
	// }

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.port = exports.configServerRoutes = exports.configServer = exports.connectToDB = exports.config = undefined;

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _express = __webpack_require__(7);

	var _express2 = _interopRequireDefault(_express);

	var _expressSession = __webpack_require__(10);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _path = __webpack_require__(5);

	var _path2 = _interopRequireDefault(_path);

	var _bodyParser = __webpack_require__(11);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _checkToken = __webpack_require__(12);

	var _checkToken2 = _interopRequireDefault(_checkToken);

	var _auth = __webpack_require__(18);

	var _auth2 = _interopRequireDefault(_auth);

	var _todo = __webpack_require__(29);

	var _todo2 = _interopRequireDefault(_todo);

	var _stepNode = __webpack_require__(32);

	var _stepNode2 = _interopRequireDefault(_stepNode);

	var _plan = __webpack_require__(35);

	var _plan2 = _interopRequireDefault(_plan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log("CURRENT NODE_ENV", process.env.NODE_ENV);

	var port = 3500;

	var config = {
	    secret: 'TheBestIsYetToBe',
	    tokenExpiresInMinutes: 20,
	    database: 'mongodb://localhost:27017/relay_graph'
	    // database: 'mongodb://root:1234@ds015780.mlab.com:15780/relay_graph'
	};

	if (process.env.NODE_ENV != 'dev') {
	    config.database = 'mongodb://root:1234@ds023912.mlab.com:23912/fantp_dev';
	    // port = 80;
	}

	var connectToDB = function connectToDB() {
	    return _mongoose2.default.connect(config.database);
	};

	var configServer = function configServer(app) {
	    app.use(function (req, res, next) {
	        res.header("Access-Control-Allow-Origin", "*");
	        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	        next();
	    });

	    app.use(_express2.default.static('public'));

	    app.use(_bodyParser2.default.urlencoded({
	        extended: false
	    }));
	    app.use(_bodyParser2.default.json());
	};

	var configServerRoutes = function configServerRoutes(app, io) {

	    app.use((0, _expressSession2.default)({
	        secret: 'TheBestIsYetToBe',
	        resave: false,
	        saveUninitialized: false
	    }));

	    app.use('/', (0, _auth2.default)(io));
	    app.use('/todos', (0, _todo2.default)(io));
	    app.use('/stepNodes', (0, _stepNode2.default)(io));
	    app.use('/plans', (0, _plan2.default)(io));
	};

	exports.config = config;
	exports.connectToDB = connectToDB;
	exports.configServer = configServer;
	exports.configServerRoutes = configServerRoutes;
	exports.port = port;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _token = __webpack_require__(13);

	var _httpCodes = __webpack_require__(16);

	var _httpCodes2 = _interopRequireDefault(_httpCodes);

	var _messageGenerator = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkToken = function checkToken(req, res, next) {

		console.log(JSON.stringify(req.body));

		var token = req.body.token || req.query.token || req.headers['x-access-token'];
		if (!token) {
			return res.status(_httpCodes2.default.UNAUTHORIZED).json({
				success: false,
				message: 'No Token Provided'
			});
		}

		(0, _token.verifyToken)(token).then(function (decoded) {
			console.log('decoded is ,', JSON.stringify(decoded));
			req.userId = decoded._id;
			req.user = decoded;
			next();
		}).catch(function (err) {
			return res.status(_httpCodes2.default.UNAUTHORIZED).send((0, _messageGenerator.failWithMessage)('Token not valid'));
		});
	};

	exports.default = checkToken;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.verifyToken = exports.signToken = undefined;

	var _jsonwebtoken = __webpack_require__(14);

	var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

	var _app = __webpack_require__(8);

	var _moment = __webpack_require__(15);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultSignOptions = {
		expiresInMinutes: 200
	};

	var signToken = function signToken(payload, options) {
		var exp = new Date();
		exp.setMinutes(exp.getMinutes() + _app.config.tokenExpiresInMinutes);

		console.log(exp);
		payload.exp = exp.getTime();
		console.log(payload);

		var token = _jsonwebtoken2.default.sign(payload, _app.config.secret, options);
		return Promise.resolve(token);
	};

	var verifyToken = function verifyToken(token) {
		return new Promise(function (resolve, reject) {
			_jsonwebtoken2.default.verify(token, _app.config.secret, function (err, decoded) {
				if (err) {
					console.log(JSON.stringify(err), 'TOEKN verify failed');
					return reject(err);
				}
				console.log(JSON.stringify(decoded));
				resolve(decoded);
			});
		});
	};

	exports.signToken = signToken;
	exports.verifyToken = verifyToken;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("jsonwebtoken");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var HttpCodes = {
		BAD_REQUEST: 400,
		UNAUTHORIZED: 401,
		NOT_FOUND: 404,
		SERVER_ERROR: 500
	};

	exports.default = HttpCodes;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var failWithMessage = function failWithMessage(message) {
		return {
			success: false,
			message: message
		};
	};

	var successWithData = function successWithData(data) {
		return {
			success: true,
			data: data
		};
	};

	exports.failWithMessage = failWithMessage;
	exports.successWithData = successWithData;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _express = __webpack_require__(7);

	var _user = __webpack_require__(19);

	var _user2 = _interopRequireDefault(_user);

	var _auth = __webpack_require__(22);

	var _auth2 = _interopRequireDefault(_auth);

	var _messageGenerator = __webpack_require__(17);

	var _webResponse = __webpack_require__(24);

	var _profile = __webpack_require__(23);

	var _profile2 = _interopRequireDefault(_profile);

	var _routerException = __webpack_require__(25);

	var _routerException2 = _interopRequireDefault(_routerException);

	var _routerExceptionHandler = __webpack_require__(26);

	var _routerExceptionHandler2 = _interopRequireDefault(_routerExceptionHandler);

	var _token = __webpack_require__(13);

	var _accountUtils = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// @routerExceptionHandler

	var AuthHandler = function () {
	    function AuthHandler(io) {
	        _classCallCheck(this, AuthHandler);

	        this.io = io;
	    }

	    _createClass(AuthHandler, [{
	        key: 'signin',
	        value: function signin(req, res) {
	            var _req$body = req.body;
	            var email = _req$body.email;
	            var password = _req$body.password;


	            _auth2.default.signin({ email: email, password: password }).then(function (user) {
	                return (0, _token.signToken)(_extends({}, user)).then(function (token) {
	                    return res.send(_extends({ success: true, token: token }, user));
	                }, function (err) {
	                    return res.send((0, _messageGenerator.failWithMessage)('Fail to generate Token'));
	                });
	            }, function (err) {
	                return res.send((0, _messageGenerator.failWithMessage)(err));
	            });
	        }
	    }, {
	        key: 'signup',
	        value: function signup(req, res) {
	            var _req$body2 = req.body;
	            var username = _req$body2.username;
	            var password = _req$body2.password;
	            var email = _req$body2.email;
	            var gender = _req$body2.gender;


	            var emailValidateResult = (0, _accountUtils.validateEmail)(email);
	            if (!emailValidateResult.success) return res.send((0, _messageGenerator.failWithMessage)(emailValidateResult.message));
	            var passwordValidateResult = (0, _accountUtils.validatePassword)(password);
	            if (!passwordValidateResult.success) return res.send((0, _messageGenerator.failWithMessage)(passwordValidateResult.message));

	            return _auth2.default.signup({ username: username, password: password, email: email, gender: gender }).then(function (user) {
	                return (0, _token.signToken)(_extends({}, user)).then(function (token) {
	                    return res.send(_extends({ success: true, token: token }, user));
	                }, function (err) {
	                    return res.send((0, _messageGenerator.failWithMessage)('Fail to generate Token'));
	                });
	            }, function (err) {
	                return res.send((0, _messageGenerator.failWithMessage)(err + ' WTF'));
	            });
	        }
	    }, {
	        key: 'checkUserUnique',
	        value: function checkUserUnique(req, res) {
	            var _req$query = req.query;
	            var username = _req$query.username;
	            var email = _req$query.email;

	            console.log(username, email);
	            var query = {};
	            if (username) query.username = username;
	            if (email) query.email = email;

	            console.log('query is ', JSON.stringify(query));

	            _auth2.default.checkUserUnique(query).then(function (unique) {
	                return res.send({ unique: unique });
	            });
	        }
	    }]);

	    return AuthHandler;
	}();

	var authRouter = function authRouter(io) {
	    var authHandler = new AuthHandler(io);

	    var router = (0, _express.Router)();

	    router.post('/signin', authHandler.signin);

	    router.post('/signup', authHandler.signup);

	    router.get('/check-user-unique', authHandler.checkUserUnique);

	    return router;
	};

	exports.default = authRouter;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _base = __webpack_require__(20);

	var _base2 = _interopRequireDefault(_base);

	var _user = __webpack_require__(21);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserService = function (_BaseService) {
		_inherits(UserService, _BaseService);

		function UserService() {
			_classCallCheck(this, UserService);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(UserService).call(this, _user2.default));
		}

		return UserService;
	}(_base2.default);

	var userService = new UserService();

	exports.default = userService;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseService = function () {
	    function BaseService(model) {
	        _classCallCheck(this, BaseService);

	        this.model = model;
	    }

	    _createClass(BaseService, [{
	        key: "findAll",
	        value: function findAll() {
	            return this.model.find({}).exec();
	        }
	    }, {
	        key: "findById",
	        value: function findById(_id) {
	            return this.model.findById(_id).exec();
	        }
	    }, {
	        key: "find",
	        value: function find(query) {
	            return this.model.find(query).exec();
	        }
	    }, {
	        key: "findOne",
	        value: function findOne(query) {
	            return this.model.findOne(query).exec();
	        }
	    }, {
	        key: "createOne",
	        value: function createOne(data) {
	            return this.model.create(data);
	        }
	    }, {
	        key: "updateOne",
	        value: function updateOne(_id, config) {
	            return this.model.update({ _id: _id }, config).exec();
	        }
	    }, {
	        key: "removeById",
	        value: function removeById(_id) {
	            return this.model.findByIdAndRemove(_id);
	        }
	    }]);

	    return BaseService;
	}();

	exports.default = BaseService;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UserSchema = new _mongoose2.default.Schema({
		email: {
			type: String,
			trim: true
		},
		password: {
			type: String,
			trim: true
		},
		username: {
			type: String,
			trim: true
		},
		createTime: {
			type: Date,
			default: Date.now
		}
	});

	var User = _mongoose2.default.model('User', UserSchema);

	exports.default = User;

	// ,
	// 	gender: {
	// 		type: String,
	// 		enum: ['M', 'F'],
	// 		trim: true
	// 	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _user = __webpack_require__(19);

	var _user2 = _interopRequireDefault(_user);

	var _messageGenerator = __webpack_require__(17);

	var _profile = __webpack_require__(23);

	var _profile2 = _interopRequireDefault(_profile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AuthService = function () {
	    function AuthService() {
	        _classCallCheck(this, AuthService);
	    }

	    _createClass(AuthService, [{
	        key: 'signin',


	        // @profile
	        value: function signin(_ref) {
	            var inputEmail = _ref.email;
	            var inputPassword = _ref.password;

	            return _user2.default.findOne({ email: inputEmail }).then(function (user) {
	                if (!user) {
	                    return Promise.reject('邮箱不存在');
	                }
	                if (user.password != inputPassword) {
	                    return Promise.reject('密码不匹配');
	                }
	                var username = user.username;
	                var email = user.email;
	                var _id = user._id;

	                return { username: username, email: email, _id: _id };
	            });
	        }

	        // @profile

	    }, {
	        key: 'signup',
	        value: function signup(_ref2) {
	            var username = _ref2.username;
	            var password = _ref2.password;
	            var email = _ref2.email;
	            var gender = _ref2.gender;


	            // throw new Error('just for fun');
	            return this.checkUserUnique({ email: email }).then(function (unique) {
	                console.log('unique', unique);
	                if (!unique) return Promise.reject('该邮箱已被注册');
	                console.log(username, password, email, gender);
	                return _user2.default.createOne({ username: username, password: password, email: email, gender: gender });
	            }).then(function (_ref3) {
	                var username = _ref3.username;
	                var _id = _ref3._id;
	                return { username: username, _id: _id };
	            });
	        }

	        // @profile

	    }, {
	        key: 'checkUserUnique',
	        value: function checkUserUnique(query) {
	            console.log(query, 'receive');
	            return _user2.default.findOne(query).then(function (user) {
	                return user == null;
	            });
	        }
	    }]);

	    return AuthService;
	}();

	var authService = new AuthService();

	exports.default = authService;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	var profile = function profile(target, name, descriptor) {
	    var originalFn = descriptor.value;

	    var asyncCall = function asyncCall(originalFn) {
	        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            var time, result;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            time = new Date();
	                            _context.prev = 1;

	                            console.log('args', args);
	                            _context.next = 5;
	                            return originalFn.apply(target, args);

	                        case 5:
	                            result = _context.sent;

	                            console.log('****** Fulfilled EXECUTE [' + name + '] Elapsed Time ' + (new Date() - time) + ' ms');
	                            return _context.abrupt('return', result);

	                        case 10:
	                            _context.prev = 10;
	                            _context.t0 = _context['catch'](1);

	                            console.log('****** REJECTED EXECUTE [' + name + '] Elapsed Time ' + (new Date() - time) + ' ms');
	                            throw _context.t0;

	                        case 14:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, _callee, undefined, [[1, 10]]);
	        }));
	    };

	    descriptor.value = asyncCall(descriptor.value);

	    Object.defineProperty(target, name, descriptor);
	};

	exports.default = profile;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.serviceError = exports.unauthorized = exports.badRequest = undefined;

	var _httpCodes = __webpack_require__(16);

	var _httpCodes2 = _interopRequireDefault(_httpCodes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BAD_REQUEST = _httpCodes2.default.BAD_REQUEST;
	var UNAUTHORIZED = _httpCodes2.default.UNAUTHORIZED;
	var SERVER_ERROR = _httpCodes2.default.SERVER_ERROR;


	var badRequest = function badRequest(res, body) {
		return res.status(BAD_REQUEST).send(body);
	};

	var unauthorized = function unauthorized(res, body) {
		return res.status(UNAUTHORIZED).send(body);
	};

	var serviceError = function serviceError(res, body) {
		return res.status(SERVER_ERROR).send(body);
	};

	exports.badRequest = badRequest;
	exports.unauthorized = unauthorized;
	exports.serviceError = serviceError;

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	var routerExcp = function routerExcp(targer, name, descriptor) {

	    var original = descriptor.value;

	    descriptor.value = function () {
	        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
	            var result;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.prev = 0;
	                            _context.next = 3;
	                            return original.call(undefined, req, res, next);

	                        case 3:
	                            result = _context.sent;
	                            _context.next = 9;
	                            break;

	                        case 6:
	                            _context.prev = 6;
	                            _context.t0 = _context['catch'](0);

	                            res.status(500).send({ msaage: _context.t0.message || 'Service Error' });

	                        case 9:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, _callee, undefined, [[0, 6]]);
	        }));

	        return function (_x, _x2, _x3) {
	            return ref.apply(this, arguments);
	        };
	    }();
	};

	exports.default = routerExcp;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	var routerExceptionHandler = function routerExceptionHandler(target, name, descriptor) {

		var proto = target.prototype;

		var asyncCall = function asyncCall(originalFn) {
			return function () {
				var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
					return regeneratorRuntime.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									_context.prev = 0;
									_context.next = 3;
									return originalFn.call(target, req, res, next);

								case 3:
									return _context.abrupt('return', _context.sent);

								case 6:
									_context.prev = 6;
									_context.t0 = _context['catch'](0);

									console.log(JSON.stringify(_context.t0));
									res.status(500).send({
										msaage: _context.t0 || 'Service Error'
										// msaage: err.message || 'Service Error'
									});

								case 10:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, undefined, [[0, 6]]);
				}));

				return function (_x, _x2, _x3) {
					return ref.apply(this, arguments);
				};
			}();
		};

		if (descriptor) {
			descriptor.value = asyncCall(descriptor.value);
			return;
		}

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = Object.getOwnPropertyNames(proto)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var key = _step.value;


				if (typeof proto[key] == 'function' && key != 'constructor') {
					var desc = Object.getOwnPropertyDescriptor(proto, key);

					desc.value = asyncCall(desc.value);
					Object.defineProperty(proto, key, desc);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	};

	exports.default = routerExceptionHandler;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.validatePassword = exports.validateEmail = undefined;

	var _actionResultUtils = __webpack_require__(28);

	var validateEmail = function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(email)) {
			return (0, _actionResultUtils.successWithData)();
		} else {
			return (0, _actionResultUtils.failWithMessage)('请输入一个正确的邮箱');
		}
	};

	var validatePassword = function validatePassword(password) {
		if (!password) {
			return (0, _actionResultUtils.failWithMessage)('请输入密码');
		}
		if (password.length < 6) {
			return (0, _actionResultUtils.failWithMessage)('密码至少6位');
		}
		return (0, _actionResultUtils.successWithData)();
	};

	exports.validateEmail = validateEmail;
	exports.validatePassword = validatePassword;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var failWithMessage = function failWithMessage(message) {
		return {
			success: false,
			message: message
		};
	};

	var successWithData = function successWithData(data) {
		return {
			success: true,
			data: data
		};
	};

	exports.failWithMessage = failWithMessage;
	exports.successWithData = successWithData;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _express = __webpack_require__(7);

	var _todo = __webpack_require__(30);

	var _todo2 = _interopRequireDefault(_todo);

	var _checkToken = __webpack_require__(12);

	var _checkToken2 = _interopRequireDefault(_checkToken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var todoRouter = function todoRouter(io) {

	    var router = (0, _express.Router)();

	    router.use(_checkToken2.default);

	    router.route('/').get(function (req, res) {
	        var search = req.query.search;
	        _todo2.default.findAll().then(function (todos) {
	            if (search) res.send(todos.filter(function (td) {
	                return td.text.indexOf(search) > -1;
	            }));else res.send(todos);
	        });
	    }).post(function (req, res) {
	        console.log('Create todo service');

	        var text = req.body.text;


	        _todo2.default.createOne({ text: text, completed: false }).then(function (todo) {
	            return res.send(todo);
	        });
	    });

	    router.route('/search').get(function (req, res) {
	        var text = req.params.search.text;


	        res.send([text, text + '1123']);
	    });

	    router.route('/:id').delete(function (req, res) {
	        console.log('delete todo fired', req.params.id);

	        var id = req.params.id;


	        _todo2.default.removeById(id).then(function (todo) {
	            return res.send(todo);
	        });
	    }).put(function (req, res) {
	        console.log(req.body);
	        var completed = req.body.completed;
	        var id = req.params.id;


	        _todo2.default.updateOne(id, { completed: completed }).then(function (todo) {
	            return res.send(todo);
	        });
	    });

	    return router;
	};

	exports.default = todoRouter;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _base = __webpack_require__(20);

	var _base2 = _interopRequireDefault(_base);

	var _todo = __webpack_require__(31);

	var _todo2 = _interopRequireDefault(_todo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoService = function (_BaseService) {
		_inherits(TodoService, _BaseService);

		function TodoService() {
			_classCallCheck(this, TodoService);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoService).call(this, _todo2.default));
		}

		return TodoService;
	}(_base2.default);

	var todoSerice = new TodoService();

	exports.default = todoSerice;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoSchema = new _mongoose2.default.Schema({
		text: {
			type: String,
			trim: true
		},
		completed: Boolean,
		createTime: {
			type: Date,
			default: Date.now
		}
	});

	var Todo = _mongoose2.default.model('Todo', TodoSchema);

	exports.default = Todo;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _express = __webpack_require__(7);

	var _stepNode = __webpack_require__(33);

	var _stepNode2 = _interopRequireDefault(_stepNode);

	var _messageGenerator = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stepNodeRouter = function stepNodeRouter(io) {

		var router = (0, _express.Router)();
		router.route('/').get(function (req, res) {
			_stepNode2.default.findAll().then(function (steps) {
				return res.send(steps.map(function (sp) {
					return {
						_id: sp._id,
						label: sp.label,
						order: sp.order,
						subTitle: sp.subTitle,
						parentStep: sp.parent,
						childSteps: steps.filter(function (s) {
							return String(s.parent) == String(sp._id);
						}).map(function (s) {
							return s._id;
						})
					};
				}));
			});
		}).post(function (req, res) {
			var _req$body = req.body;
			var order = _req$body.order;
			var label = _req$body.label;
			var subTitle = _req$body.subTitle;
			var parent = _req$body.parent;


			if (parent != null) {
				_stepNode2.default.findById(parent).then(function (parentNode) {
					console.log(parentNode);
				});
			}
			_stepNode2.default.createOne({
				order: order, label: label, subTitle: subTitle, parent: parent
			}).then(function (stepNode) {
				return res.send(stepNode);
			}).catch(function (err) {
				return console.log(err);
			});
		});

		return router;
	};

	exports.default = stepNodeRouter;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _base = __webpack_require__(20);

	var _base2 = _interopRequireDefault(_base);

	var _stepNode = __webpack_require__(34);

	var _stepNode2 = _interopRequireDefault(_stepNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StepNodeService = function (_BaseService) {
		_inherits(StepNodeService, _BaseService);

		function StepNodeService() {
			_classCallCheck(this, StepNodeService);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(StepNodeService).call(this, _stepNode2.default));
		}

		return StepNodeService;
	}(_base2.default);

	var stepNodeService = new StepNodeService();

	exports.default = stepNodeService;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StepNodeSchema = new _mongoose2.default.Schema({
		order: Number,
		label: {
			type: String,
			trim: true
		},
		parent: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'StepNode'
		},
		subTitle: {
			type: String,
			trim: true
		},
		createTime: {
			type: Date,
			default: Date.now
		}
	});

	var StepNode = _mongoose2.default.model('StepNode', StepNodeSchema);

	exports.default = StepNode;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _express = __webpack_require__(7);

	var _plan = __webpack_require__(36);

	var _plan2 = _interopRequireDefault(_plan);

	var _checkToken = __webpack_require__(12);

	var _checkToken2 = _interopRequireDefault(_checkToken);

	var _objectUtils = __webpack_require__(38);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var planRouter = function planRouter(io) {

		var router = (0, _express.Router)();

		router.use(_checkToken2.default);

		router.route('/').get(function (req, res) {
			var userId = req.userId;

			_plan2.default.find({ user: userId }).then(function (plans) {
				return res.send(plans);
			}).catch(function (err) {
				return console.log(err);
			});
		}).post(function (req, res) {
			var userId = req.userId;
			var _req$body = req.body;
			var peopleCount = _req$body.peopleCount;
			var daysCount = _req$body.daysCount;
			var averageAge = _req$body.averageAge;
			var activeNodes = _req$body.activeNodes;

			_plan2.default.createOne({ peopleCount: peopleCount, daysCount: daysCount, averageAge: averageAge, activeNodes: activeNodes, user: userId }).then(function (plan) {
				return res.send(plan);
			}).catch(function (err) {
				return console.log(err);
			});
		});

		router.route('/:planId').get(function (req, res) {
			var userId = req.userId;
			var planId = req.params.planId;

			_plan2.default.findById(planId).then(function (plan) {
				return res.send(plan);
			}).catch(function (err) {
				return console.log(err);
			});
		}).put(function (req, res) {
			var userId = req.userId;
			var planId = req.params.planId;
			var _req$body2 = req.body;
			var activeNodes = _req$body2.activeNodes;
			var daysCount = _req$body2.daysCount;
			var peopleCount = _req$body2.peopleCount;
			var averageAge = _req$body2.averageAge;

			console.log(JSON.stringify(req.body));

			_plan2.default.findById(planId).then(function (plan) {
				console.log(JSON.stringify(plan));
				if (!plan) {
					return Promise.reject('Plan Not found');
				}
				plan = plan.toObject();
				plan = plan.overrideProps(req.body);
				console.log('updatedPlan', JSON.stringify(plan));
				return _plan2.default.updateOne(planId, plan);
			}).then(function (result) {
				return res.send(result);
			}).catch(function (err) {
				console.log(err);res.status(500).send(err);
			});
		});

		return router;
	};

	exports.default = planRouter;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _base = __webpack_require__(20);

	var _base2 = _interopRequireDefault(_base);

	var _plan = __webpack_require__(37);

	var _plan2 = _interopRequireDefault(_plan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlanService = function (_BaseService) {
		_inherits(PlanService, _BaseService);

		function PlanService() {
			_classCallCheck(this, PlanService);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(PlanService).call(this, _plan2.default));
		}

		return PlanService;
	}(_base2.default);

	var planService = new PlanService();

	exports.default = planService;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PlanSchema = new _mongoose2.default.Schema({
		user: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'User'
		},
		peopleCount: Number,
		daysCount: Number,
		averageAge: Number,
		// paths: [[{type: mongoose.Schema.Types.ObjectId, ref: 'StepNode'}]],
		activeNodes: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'StepNode' }],
		createTime: {
			type: Date,
			default: Date.now
		}
	});

	var PlanModel = _mongoose2.default.model('Plan', PlanSchema);

	exports.default = PlanModel;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var updateObj = function updateObj(source, target) {
		if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) != 'object') return source;
		for (var k in source) {
			if (target[k]) {
				source[k] = target[k];
			}
		}

		return source;
	};

	exports.updateObj = updateObj;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ }
/******/ ]);