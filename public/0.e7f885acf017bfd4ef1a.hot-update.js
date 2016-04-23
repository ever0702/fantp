webpackHotUpdate(0,{

/***/ 789:
/*!*****************************************!*\
  !*** ./js/decorators/trackDecorator.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var Track = function Track(target, name, descriptor) {
		var _this = this,
		    _arguments = arguments;
	
		var original = descriptor.value;
		var startTime = new Date();
	
		descriptor.value = function () {
			console.log('@Track  ' + name + ' started ');
	
			original.apply(_this, _arguments);
	
			var ellapsed = new Date() - startTime + ' ms';
			console.log('@Track End  ' + name + ' Elapsed time ' + ellapsed + ' ');
		};
	
		Object.defineProperty(target, name, descriptor);
	};
	
	var _default = Track;
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
						fileName: '/Users/yong/Workspace/ps_workspace/redux_todo_list/js/decorators/trackDecorator.js',
						localName: localName
					}
				});
			} catch (err) {}
		}
	
		tagSource(Track, 'Track');
		tagSource(_default, 'default');
	})();

/***/ }

})
//# sourceMappingURL=0.e7f885acf017bfd4ef1a.hot-update.js.map