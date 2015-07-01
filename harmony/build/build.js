/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * Registration of polymer event-dispatcher custom element.
	 * ECMAScript 6 - using BabelJS traspiler.
	 */
	'use strict';
	
	Polymer('event-dispatcher', {
	    attached: function attached() {
	        var _this = this;
	
	        this.callback = function (event) {
	            try {
	                // Allow content injection from where the dispatcher is used on DOM
	                if (_this.detail != undefined) {
	                    event.detail = _this.detail;
	                }
	                // Call handler
	                _this.handler.bind(_this.handlerObservable_.object_)(event);
	            } catch (exception) {
	                console.log(exception);
	            } finally {
	                if (_this.keepAlive === undefined) {
	                    event.stopImmediatePropagation();
	                }
	            }
	        };
	        this.parentNode.addEventListener(this.event, this.callback);
	    },
	    detached: function detached() {
	        this.parentNode.removeEventListener(this.event, this.callback);
	    }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map