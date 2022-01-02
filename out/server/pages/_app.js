module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+eM2":
/***/ (function(module, exports) {



/***/ }),

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "9L9g":
/***/ (function(module, exports) {



/***/ }),

/***/ "EIIS":
/***/ (function(module, exports) {



/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "MZ4h":
/***/ (function(module, exports) {



/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

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

/***/ "UkJs":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cNie":
/***/ (function(module, exports) {

module.exports = require("tailwindcss/colors");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eKhT");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+eM2");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Board_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9L9g");
/* harmony import */ var _styles_Board_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Board_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_List_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UkJs");
/* harmony import */ var _styles_List_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_List_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("EIIS");
/* harmony import */ var _styles_Card_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_AddList_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oafW");
/* harmony import */ var _styles_AddList_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_AddList_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_ListEditor_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MZ4h");
/* harmony import */ var _styles_ListEditor_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ListEditor_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_EditButtons_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zSoj");
/* harmony import */ var _styles_EditButtons_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_EditButtons_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_CardEditor_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zga4");
/* harmony import */ var _styles_CardEditor_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_CardEditor_css__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import '../styles/tailwind.css'









function MyApp({
  Component,
  pageProps
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Spro's Next.js Boilerplate"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx(Component, pageProps));
}

/* harmony default export */ __webpack_exports__["default"] = (_store_wrapper__WEBPACK_IMPORTED_MODULE_2__[/* reduxWrapper */ "a"].withRedux(MyApp));

/***/ }),

/***/ "eKhT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ reduxWrapper; });

// UNUSED EXPORTS: makeStore

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./store/actions.ts
var actions = __webpack_require__("hS+w");

// CONCATENATED MODULE: ./store/state.ts
const initialState = {
  things_page: {
    loading: false,
    loaded: false,
    adding: false,
    things: null,
    error: null
  }
};
/* harmony default export */ var store_state = (initialState);
// EXTERNAL MODULE: external "lodash.throttle"
var external_lodash_throttle_ = __webpack_require__("ywLQ");
var external_lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(external_lodash_throttle_);

// CONCATENATED MODULE: ./store/reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const thingsPageReducer = Object(toolkit_["createReducer"])(store_state.things_page, builder => {
  builder.addCase(actions["m" /* thingsLoad */], (state, action) => {
    state.loading = true;
    state.loaded = false;
    state.error = null;
  }).addCase(actions["n" /* thingsLoadComplete */], (state, action) => {
    state.loading = false;
    state.loaded = true;
    if (action.payload.error) state.error = action.payload.error;else state.things = action.payload.things;
  }).addCase(actions["o" /* thingsLoadError */], (state, action) => {
    state.loading = false;
    state.loaded = true;
    state.error = action.payload;
  }).addCase(actions["j" /* thingAdd */], (state, action) => {
    state.adding = true;
  }).addCase(actions["k" /* thingAddComplete */], (state, action) => {
    state.adding = false;
    state.things.unshift(action.payload.thing);
  }).addCase(actions["l" /* thingAddError */], (state, action) => {
    state.adding = false;
    state.error = action.payload;
  });
}); //Board reducer

const board = (state = {
  lists: []
}, action) => {
  switch (action.type) {
    case actions["c" /* addList */]:
      {
        const {
          listId
        } = action.payload;
        return {
          lists: [...state.lists, listId]
        };
      }

    case actions["i" /* moveList */]:
      {
        const {
          oldListIndex,
          newListIndex
        } = action.payload;
        const newLists = Array.from(state.lists);
        const [removedList] = newLists.splice(oldListIndex, 1);
        newLists.splice(newListIndex, 0, removedList);
        return {
          lists: newLists
        };
      }

    case actions["g" /* deleteList */]:
      {
        const {
          listId
        } = action.payload;

        const filterDeleted = tmpListId => tmpListId !== listId;

        const newLists = state.lists.filter(filterDeleted);
        return {
          lists: newLists
        };
      }

    default:
      return state;
  }
}; //ListById reducer


const listsById = (state = {}, action) => {
  switch (action.type) {
    case actions["c" /* addList */]:
      {
        const {
          listId,
          listTitle
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          [listId]: {
            _id: listId,
            title: listTitle,
            cards: []
          }
        });
      }

    case actions["e" /* changeListTitle */]:
      {
        const {
          listId,
          listTitle
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          [listId]: _objectSpread(_objectSpread({}, state[listId]), {}, {
            title: listTitle
          })
        });
      }

    case actions["g" /* deleteList */]:
      {
        const {
          listId
        } = action.payload; //const { [listId]: deletedList, ...restOfLists } = state;

        let newState = _objectSpread({}, state);

        delete newState[listId];
        return newState;
      }

    case actions["b" /* addCard */]:
      {
        const {
          listId,
          cardId
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          [listId]: _objectSpread(_objectSpread({}, state[listId]), {}, {
            cards: [...state[listId].cards, cardId]
          })
        });
      }

    case actions["h" /* moveCard */]:
      {
        const {
          oldCardIndex,
          newCardIndex,
          sourceListId,
          destListId
        } = action.payload; // Move within the same list

        if (sourceListId === destListId) {
          const newCards = Array.from(state[sourceListId].cards);
          const [removedCard] = newCards.splice(oldCardIndex, 1);
          newCards.splice(newCardIndex, 0, removedCard);
          return _objectSpread(_objectSpread({}, state), {}, {
            [sourceListId]: _objectSpread(_objectSpread({}, state[sourceListId]), {}, {
              cards: newCards
            })
          });
        } // Move card from one list to another


        const sourceCards = Array.from(state[sourceListId].cards);
        const [removedCard] = sourceCards.splice(oldCardIndex, 1);
        const destinationCards = Array.from(state[destListId].cards);
        destinationCards.splice(newCardIndex, 0, removedCard);
        return _objectSpread(_objectSpread({}, state), {}, {
          [sourceListId]: _objectSpread(_objectSpread({}, state[sourceListId]), {}, {
            cards: sourceCards
          }),
          [destListId]: _objectSpread(_objectSpread({}, state[destListId]), {}, {
            cards: destinationCards
          })
        });
      }

    case actions["f" /* deleteCard */]:
      {
        const {
          cardId: deletedCardId,
          listId
        } = action.payload;

        const filterDeleted = cardId => cardId !== deletedCardId;

        return _objectSpread(_objectSpread({}, state), {}, {
          [listId]: _objectSpread(_objectSpread({}, state[listId]), {}, {
            cards: state[listId].cards.filter(filterDeleted)
          })
        });
      }

    default:
      return state;
  }
}; //Cards By ID reducer


const cardsById = (state = {}, action) => {
  switch (action.type) {
    case actions["b" /* addCard */]:
      {
        const {
          cardText,
          cardId,
          commentCount,
          completedTaskCount,
          taskCount,
          likeCount,
          status
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          [cardId]: {
            text: cardText,
            _id: cardId,
            commentCount: commentCount ? commentCount : null,
            taskCount: taskCount ? taskCount : null,
            completedTaskCount: completedTaskCount ? completedTaskCount : null,
            likeCount: likeCount ? likeCount : null,
            status: status ? status : null
          }
        });
      }

    case actions["d" /* changeCardText */]:
      {
        const {
          cardText,
          cardId
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          [cardId]: _objectSpread(_objectSpread({}, state[cardId]), {}, {
            text: cardText
          })
        });
      }

    case actions["f" /* deleteCard */]:
      {
        const {
          cardId
        } = action.payload; //const { [cardId]: deletedCard, ...restOfCards } = state;

        let newState = _objectSpread({}, state);

        delete newState[cardId];
        return newState;
      }
    // Find every card from the deleted list and remove it

    case actions["g" /* deleteList */]:
      {
        const {
          cards: cardIds
        } = action.payload;
        return Object.keys(state).filter(cardId => !cardIds.includes(cardId)).reduce((newState, cardId) => _objectSpread(_objectSpread({}, newState), {}, {
          [cardId]: state[cardId]
        }), {});
      }

    default:
      return state;
  }
}; // Combined state
// -----------------------------------------------------------------------------


const combinedReducer = Object(external_redux_["combineReducers"])({
  things_page: thingsPageReducer,
  board,
  listsById,
  cardsById
});

function rootReducer(state = store_state, action) {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return combinedReducer(state, action);
  }
}

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {// ignore write errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();
const reducer_store = Object(external_redux_["createStore"])(combinedReducer, persistedState);
reducer_store.subscribe(external_lodash_throttle_default()(() => {
  saveState(reducer_store.getState());
}, 1000));
console.log(reducer_store.getState(), JSON.stringify(reducer_store.getState()));

if (!reducer_store.getState().board.lists.length || reducer_store.getState().board.lists.length === 0) {
  console.log("SEED"); //seed(store);
}

/* harmony default export */ var reducer = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./lib/helpers.ts
var helpers = __webpack_require__("jf9U");

// EXTERNAL MODULE: ./backend/index.ts + 1 modules
var backend = __webpack_require__("T/d+");

// CONCATENATED MODULE: ./lib/api.ts
var _backend$things;



const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
const FAKE_DELAY = 2000;

async function apiFetch(method, path, body = null) {
  if (FAKE_DELAY) await Object(helpers["a" /* delay */])(FAKE_DELAY);
  const res = await fetch(API_BASE_URL + path, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body && JSON.stringify(body)
  });

  try {
    const res_body = await res.json();
    return res_body;
  } catch (err) {
    throw err;
  }
}

function apiIsomorphic({
  route,
  backend
}) {
  return async function (body = null) {
    if (false) {} else {
      return await backend(body !== null && body !== void 0 ? body : undefined);
    }
  };
}
const things = {
  getThings: apiIsomorphic({
    route: ['get', '/things'],
    backend: (_backend$things = backend["a" /* things */]) === null || _backend$things === void 0 ? void 0 : _backend$things.getThings
  }),
  addThing: async body => await apiFetch('post', '/things', body)
};
// EXTERNAL MODULE: ./lib/log.ts
var log = __webpack_require__("rHuN");

// CONCATENATED MODULE: ./store/saga.ts





function* logActions(action) {
  log["a" /* default */].info('action', action);
  yield;
}

function* thingsSaga() {
  try {
    const response = yield Object(effects_["call"])(things.getThings);
    yield Object(effects_["put"])(actions["n" /* thingsLoadComplete */](response));
  } catch (error) {
    yield Object(effects_["put"])(actions["o" /* thingsLoadError */](error));
  }
}

function* thingAddSaga(action) {
  try {
    const response = yield Object(effects_["call"])(things.addThing, action.payload);
    yield Object(effects_["put"])(actions["k" /* thingAddComplete */](response));
  } catch (error) {
    yield Object(effects_["put"])(actions["l" /* thingAddError */](error));
  }
}

function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])('*', logActions), Object(effects_["takeLatest"])(actions["m" /* thingsLoad */].type, thingsSaga), Object(effects_["takeLatest"])(actions["j" /* thingAdd */].type, thingAddSaga)]);
}

/* harmony default export */ var saga = (rootSaga);
// CONCATENATED MODULE: ./store/wrapper.ts






const USE_DEV_TOOLS = false;
const makeStore = context => {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(toolkit_["configureStore"])({
    reducer: reducer,
    preloadedState: store_state,
    middleware: [sagaMiddleware],
    devTools: USE_DEV_TOOLS
  });
  store.sagaTask = sagaMiddleware.run(saga);
  return store;
};
const reduxWrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore);

/***/ }),

/***/ "hS+w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return thingsLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return thingsLoadComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return thingsLoadError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return thingAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return thingAddComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return thingAddError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addList; });
/* unused harmony export addListComplete */
/* unused harmony export addListError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return moveList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return moveCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deleteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return changeListTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return changeCardText; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1fKG");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]; });

/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JMOJ");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);





const prepareError = error => {
  if (error instanceof Error) {
    return {
      payload: {
        message: error.message,
        stack: error.stack
      }
    };
  } else if (typeof error == "string") {
    return {
      payload: {
        message: error
      }
    };
  } else {
    return {
      payload: error
    };
  }
}; // Things load
// -----------------------------------------------------------------------------


const thingsLoad = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("THINGS_LOAD");
const thingsLoadComplete = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("THINGS_LOAD_COMPLETE");
const thingsLoadError = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("THINGS_LOAD_ERROR", prepareError); // Thing add
// -----------------------------------------------------------------------------

const thingAdd = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("THING_ADD");
const thingAddComplete = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("THING_ADD_COMPLETE");
const thingAddError = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("THING_ADD_ERROR", prepareError);
const addList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("ADD_LIST");
const addListComplete = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("ADD_LIST_COMPLETE");
const addListError = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("ADD_LIST_ERROR", prepareError);
const moveList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("MOVE_LIST");
const moveCard = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("MOVE_CARD");
const deleteList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("DELETE_LIST");
const deleteCard = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("DELETE_CARD");
const changeListTitle = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("CHANGE_LIST_TITLE");
const addCard = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("ADD_CARD");
const changeCardText = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("CHANGE_CARD_TEXT");

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

/***/ }),

/***/ "oafW":
/***/ (function(module, exports) {



/***/ }),

/***/ "rHuN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tailwindcss_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cNie");
/* harmony import */ var tailwindcss_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_0__);


const color = (color, amount) => tailwindcss_colors__WEBPACK_IMPORTED_MODULE_0__[color][amount.toString()];

/* harmony default export */ __webpack_exports__["a"] = ({
  log: (tag, ...args) => {
    console.log(`%c[${tag}]`, `color: ${color('gray', 400)}`, ...args);
  },
  info: (tag, ...args) => {
    console.log(`%c[${tag}]`, `color: ${color('blue', 400)}`, ...args);
  },
  error: (tag, ...args) => {
    console.log(`%c[${tag}]`, `color: ${color('red', 400)}`, ...args);
  },
  warning: (tag, ...args) => {
    console.log(`%c[${tag}]`, `color: ${color('yellow', 400)}`, ...args);
  }
});

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ywLQ":
/***/ (function(module, exports) {

module.exports = require("lodash.throttle");

/***/ }),

/***/ "zSoj":
/***/ (function(module, exports) {



/***/ }),

/***/ "zga4":
/***/ (function(module, exports) {



/***/ })

/******/ });