module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b4DJ");


/***/ }),

/***/ "T/d+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ things_namespaceObject; });

// NAMESPACE OBJECT: ./backend/things.ts
var things_namespaceObject = {};
__webpack_require__.r(things_namespaceObject);
__webpack_require__.d(things_namespaceObject, "getThings", function() { return getThings; });
__webpack_require__.d(things_namespaceObject, "addThing", function() { return addThing; });

// EXTERNAL MODULE: ./lib/helpers.ts
var helpers = __webpack_require__("jf9U");

// CONCATENATED MODULE: ./backend/things.ts

const ERROR_RATE = 0.2;
let things = [{
  word: "quisling",
  pronounciation: "KWIZ-ling",
  definition: "one who commits treason"
}, {
  word: "gadabout",
  pronounciation: "GAD-uh-bout",
  definition: "a person who goes from place to place in social activity"
}, {
  word: "nostrum",
  pronounciation: "NAHSS-trum",
  definition: "a usually questionable remedy or scheme"
}, {
  word: "jeopardy",
  pronounciation: "JEP-er-dee",
  definition: "exposure to or imminence of death, loss, or injury"
}, {
  word: "obeisance",
  pronounciation: "oh-BEE-sunss",
  definition: "acknowledgment of another's superiority or importance"
}, {
  word: "optimization",
  pronounciation: "ahp-tuh-muh-ZAY-shun",
  definition: "optimizationplay"
}, {
  word: "insouciance",
  pronounciation: "in-SOO-see-unss",
  definition: "lighthearted unconcern"
}, {
  word: "gulosity",
  pronounciation: "goo-LAH-suh-tee",
  definition: "excessive appetite"
}, {
  word: "modicum",
  pronounciation: "MAH-dih-kum",
  definition: "a small portion"
}, {
  word: "rapport",
  pronounciation: "ra-POR",
  definition: "a friendly, harmonious relationship"
}, {
  word: "mimesis",
  pronounciation: "muh-MEE-sis",
  definition: "imitation, mimicry"
}];
async function getThings(n = 5) {
  if (Math.random() < ERROR_RATE) throw new Error("Some life-threatening error has occured");
  return {
    success: true,
    things: Object(helpers["c" /* randomSample */])(things, n)
  };
}
async function addThing(thing) {
  things.push(thing);
  return {
    success: true,
    thing
  };
}
// CONCATENATED MODULE: ./backend/index.ts



/***/ }),

/***/ "b4DJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T/d+");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jf9U");

 // TODO: Catch-all route with routes defined similar to lib/api

async function handler(req, res) {
  try {
    if (req.method == 'GET') {
      res.json(await _backend__WEBPACK_IMPORTED_MODULE_0__[/* things */ "a"].getThings());
    } else if (req.method == 'POST') {
      res.json(await _backend__WEBPACK_IMPORTED_MODULE_0__[/* things */ "a"].addThing(req.body));
    }
  } catch (error) {
    res.status(500).json({
      error: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__[/* errorToJson */ "b"])(error)
    });
  }
}

/***/ }),

/***/ "jf9U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delay; });
/* unused harmony export randomChoice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return randomSample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorToJson; });
async function delay(n) {
  return new Promise(resolve => {
    setTimeout(resolve, n);
  });
}
function randomChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}
function randomSample(items, n) {
  if (items.length == 0 || n <= 0) {
    return [];
  }

  let sample = [];

  while (sample.length < Math.min(n, items.length)) {
    const item = randomChoice(items);

    if (sample.indexOf(item) == -1) {
      sample.push(item);
    }
  }

  return sample;
}
function errorToJson(error) {
  return {
    message: error.message,
    stack: error.stack
  };
}

/***/ })

/******/ });