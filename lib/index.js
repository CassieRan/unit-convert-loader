/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loader-utils */ \"loader-utils\");\n/* harmony import */ var loader_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loader_utils__WEBPACK_IMPORTED_MODULE_0__);\n\nvar pxRegex = /url\\([^\\)]+\\)|(\\d*\\.?\\d+)px((\\;?)(\\s*)(\\/\\*(\\s*)([\\s\\S]*)(\\s*)\\*\\/))?/ig;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (source) {\n  var options = Object(loader_utils__WEBPACK_IMPORTED_MODULE_0__[\"getOptions\"])(this);\n  var opts = Object.assign({}, options);\n  var pxReplace = createPxReplace(opts.UIWidth, opts.minPixelValue, opts.unitPrecision, opts.targetUnit, opts.rem);\n  source = source.replace(pxRegex, pxReplace);\n  return \"export default \".concat(source);\n});\n/*\n * return replace function\n */\n\nfunction createPxReplace(UIWidth, minPixelValue, unitPrecision, targetUnit, rem) {\n  return function (m, $1, $2, $3, $4, $5, $6, $7, $8) {\n    if (!$1 || $7 === 'not convert') return m;\n    var pixels = parseFloat($1);\n    if (pixels <= minPixelValue) return m;\n    if (targetUnit === 'vw') return px2vw(pixels, UIWidth).toFixed(unitPrecision) + targetUnit;\n    if (targetUnit === 'rem' && rem) return px2rem(pixels, rem).toFixed(unitPrecision) + targetUnit;\n  };\n}\n/*\n * from px to vw\n */\n\n\nfunction px2vw(px, UIWidth) {\n  return px / UIWidth * 100;\n}\n/*\n * from px to rem\n */\n\n\nfunction px2rem(px, rem) {\n  return px / rem;\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "loader-utils":
/*!*******************************!*\
  !*** external "loader-utils" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = loader-utils;\n\n//# sourceURL=webpack:///external_%22loader-utils%22?");

/***/ })

/******/ });