webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./store/reducer.ts":
/*!**************************!*\
  !*** ./store/reducer.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state */ "./store/state.ts");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var thingsPageReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createReducer"])(_state__WEBPACK_IMPORTED_MODULE_7__["default"].things_page, function (builder) {
  builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_6__["thingsLoad"], function (state, action) {
    state.loading = true;
    state.loaded = false;
    state.error = null;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_6__["thingsLoadComplete"], function (state, action) {
    state.loading = false;
    state.loaded = true;
    if (action.payload.error) state.error = action.payload.error;else state.things = action.payload.things;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_6__["thingsLoadError"], function (state, action) {
    state.loading = false;
    state.loaded = true;
    state.error = action.payload;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_6__["thingAdd"], function (state, action) {
    state.adding = true;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_6__["thingAddComplete"], function (state, action) {
    state.adding = false;
    state.things.unshift(action.payload.thing);
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_6__["thingAddError"], function (state, action) {
    state.adding = false;
    state.error = action.payload;
  });
}); //Board reducer

var board = function board() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lists: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_6__["addList"]:
      {
        var listId = action.payload.listId;
        return {
          lists: [].concat(Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.lists), [listId])
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["moveList"]:
      {
        var _action$payload = action.payload,
            oldListIndex = _action$payload.oldListIndex,
            newListIndex = _action$payload.newListIndex;
        var newLists = Array.from(state.lists);

        var _newLists$splice = newLists.splice(oldListIndex, 1),
            _newLists$splice2 = Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_newLists$splice, 1),
            removedList = _newLists$splice2[0];

        newLists.splice(newListIndex, 0, removedList);
        return {
          lists: newLists
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["deleteList"]:
      {
        var _listId = action.payload.listId;

        var filterDeleted = function filterDeleted(tmpListId) {
          return tmpListId !== _listId;
        };

        var _newLists = state.lists.filter(filterDeleted);

        return {
          lists: _newLists
        };
      }

    default:
      return state;
  }
}; //ListById reducer


var listsById = function listsById() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_6__["addList"]:
      {
        var _action$payload2 = action.payload,
            listId = _action$payload2.listId,
            listTitle = _action$payload2.listTitle;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, listId, {
          _id: listId,
          title: listTitle,
          cards: []
        }));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["changeListTitle"]:
      {
        var _action$payload3 = action.payload,
            _listId2 = _action$payload3.listId,
            _listTitle = _action$payload3.listTitle;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _listId2, _objectSpread(_objectSpread({}, state[_listId2]), {}, {
          title: _listTitle
        })));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["deleteList"]:
      {
        var _listId3 = action.payload.listId; //const { [listId]: deletedList, ...restOfLists } = state;

        var newState = _objectSpread({}, state);

        delete newState[_listId3];
        return newState;
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["addCard"]:
      {
        var _action$payload4 = action.payload,
            _listId4 = _action$payload4.listId,
            cardId = _action$payload4.cardId;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _listId4, _objectSpread(_objectSpread({}, state[_listId4]), {}, {
          cards: [].concat(Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state[_listId4].cards), [cardId])
        })));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["moveCard"]:
      {
        var _objectSpread6;

        var _action$payload5 = action.payload,
            oldCardIndex = _action$payload5.oldCardIndex,
            newCardIndex = _action$payload5.newCardIndex,
            sourceListId = _action$payload5.sourceListId,
            destListId = _action$payload5.destListId; // Move within the same list

        if (sourceListId === destListId) {
          var newCards = Array.from(state[sourceListId].cards);

          var _newCards$splice = newCards.splice(oldCardIndex, 1),
              _newCards$splice2 = Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_newCards$splice, 1),
              _removedCard = _newCards$splice2[0];

          newCards.splice(newCardIndex, 0, _removedCard);
          return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sourceListId, _objectSpread(_objectSpread({}, state[sourceListId]), {}, {
            cards: newCards
          })));
        } // Move card from one list to another


        var sourceCards = Array.from(state[sourceListId].cards);

        var _sourceCards$splice = sourceCards.splice(oldCardIndex, 1),
            _sourceCards$splice2 = Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_sourceCards$splice, 1),
            removedCard = _sourceCards$splice2[0];

        var destinationCards = Array.from(state[destListId].cards);
        destinationCards.splice(newCardIndex, 0, removedCard);
        return _objectSpread(_objectSpread({}, state), {}, (_objectSpread6 = {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread6, sourceListId, _objectSpread(_objectSpread({}, state[sourceListId]), {}, {
          cards: sourceCards
        })), Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread6, destListId, _objectSpread(_objectSpread({}, state[destListId]), {}, {
          cards: destinationCards
        })), _objectSpread6));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["deleteCard"]:
      {
        var _action$payload6 = action.payload,
            deletedCardId = _action$payload6.cardId,
            _listId5 = _action$payload6.listId;

        var filterDeleted = function filterDeleted(cardId) {
          return cardId !== deletedCardId;
        };

        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _listId5, _objectSpread(_objectSpread({}, state[_listId5]), {}, {
          cards: state[_listId5].cards.filter(filterDeleted)
        })));
      }

    default:
      return state;
  }
}; //Cards By ID reducer


var cardsById = function cardsById() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_6__["addCard"]:
      {
        var _action$payload7 = action.payload,
            cardText = _action$payload7.cardText,
            cardId = _action$payload7.cardId,
            commentCount = _action$payload7.commentCount,
            completedTaskCount = _action$payload7.completedTaskCount,
            taskCount = _action$payload7.taskCount,
            likeCount = _action$payload7.likeCount,
            status = _action$payload7.status;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cardId, {
          text: cardText,
          _id: cardId,
          commentCount: commentCount ? commentCount : null,
          taskCount: taskCount ? taskCount : null,
          completedTaskCount: completedTaskCount ? completedTaskCount : null,
          likeCount: likeCount ? likeCount : null,
          status: status ? status : null
        }));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["changeCardText"]:
      {
        var _action$payload8 = action.payload,
            _cardText = _action$payload8.cardText,
            _cardId = _action$payload8.cardId;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _cardId, _objectSpread(_objectSpread({}, state[_cardId]), {}, {
          text: _cardText
        })));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_6__["deleteCard"]:
      {
        var _cardId2 = action.payload.cardId; //const { [cardId]: deletedCard, ...restOfCards } = state;

        var newState = _objectSpread({}, state);

        delete newState[_cardId2];
        return newState;
      }
    // Find every card from the deleted list and remove it

    case _actions__WEBPACK_IMPORTED_MODULE_6__["deleteList"]:
      {
        var cardIds = action.payload.cards;
        return Object.keys(state).filter(function (cardId) {
          return !cardIds.includes(cardId);
        }).reduce(function (newState, cardId) {
          return _objectSpread(_objectSpread({}, newState), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cardId, state[cardId]));
        }, {});
      }

    default:
      return state;
  }
}; // Combined state
// -----------------------------------------------------------------------------


var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  things_page: thingsPageReducer,
  board: board,
  listsById: listsById,
  cardsById: cardsById
});

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_7__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return combinedReducer(state, action);
  }
}

var saveState = function saveState(state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (_unused) {// ignore write errors
  }
};

var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

var persistedState = loadState();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(combinedReducer, persistedState);
store.subscribe(lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  saveState(store.getState());
}, 1000));
console.log(store.getState(), JSON.stringify(store.getState()));

if (!store.getState().board.lists.length || store.getState().board.lists.length === 0) {
  console.log("SEED"); //seed(store);
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlci50cyJdLCJuYW1lcyI6WyJ0aGluZ3NQYWdlUmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJ0aGluZ3NfcGFnZSIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiYWN0aW9ucyIsInN0YXRlIiwiYWN0aW9uIiwibG9hZGluZyIsImxvYWRlZCIsImVycm9yIiwicGF5bG9hZCIsInRoaW5ncyIsImFkZGluZyIsInVuc2hpZnQiLCJ0aGluZyIsImJvYXJkIiwibGlzdHMiLCJ0eXBlIiwibGlzdElkIiwib2xkTGlzdEluZGV4IiwibmV3TGlzdEluZGV4IiwibmV3TGlzdHMiLCJBcnJheSIsImZyb20iLCJzcGxpY2UiLCJyZW1vdmVkTGlzdCIsImZpbHRlckRlbGV0ZWQiLCJ0bXBMaXN0SWQiLCJmaWx0ZXIiLCJsaXN0c0J5SWQiLCJsaXN0VGl0bGUiLCJfaWQiLCJ0aXRsZSIsImNhcmRzIiwibmV3U3RhdGUiLCJjYXJkSWQiLCJvbGRDYXJkSW5kZXgiLCJuZXdDYXJkSW5kZXgiLCJzb3VyY2VMaXN0SWQiLCJkZXN0TGlzdElkIiwibmV3Q2FyZHMiLCJyZW1vdmVkQ2FyZCIsInNvdXJjZUNhcmRzIiwiZGVzdGluYXRpb25DYXJkcyIsImRlbGV0ZWRDYXJkSWQiLCJjYXJkc0J5SWQiLCJjYXJkVGV4dCIsImNvbW1lbnRDb3VudCIsImNvbXBsZXRlZFRhc2tDb3VudCIsInRhc2tDb3VudCIsImxpa2VDb3VudCIsInN0YXR1cyIsInRleHQiLCJjYXJkSWRzIiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwicmVkdWNlIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdFJlZHVjZXIiLCJIWURSQVRFIiwic2F2ZVN0YXRlIiwic2VyaWFsaXplZFN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2FkU3RhdGUiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwicGFyc2UiLCJlcnIiLCJwZXJzaXN0ZWRTdGF0ZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzdWJzY3JpYmUiLCJ0aHJvdHRsZSIsImdldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBLElBQU1BLGlCQUFpQixHQUFHQyxzRUFBYSxDQUFDQyw4Q0FBWSxDQUFDQyxXQUFkLEVBQTJCLFVBQUNDLE9BQUQsRUFBYTtBQUM5RUEsU0FBTyxDQUNMQyxPQURGLENBQ1VDLG1EQURWLEVBQzhCLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMvQ0QsU0FBSyxDQUFDRSxPQUFOLEdBQWdCLElBQWhCO0FBQ0FGLFNBQUssQ0FBQ0csTUFBTixHQUFlLEtBQWY7QUFDQUgsU0FBSyxDQUFDSSxLQUFOLEdBQWMsSUFBZDtBQUNBLEdBTEYsRUFNRU4sT0FORixDQU1VQywyREFOVixFQU1zQyxVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDdkRELFNBQUssQ0FBQ0UsT0FBTixHQUFnQixLQUFoQjtBQUNBRixTQUFLLENBQUNHLE1BQU4sR0FBZSxJQUFmO0FBQ0EsUUFBSUYsTUFBTSxDQUFDSSxPQUFQLENBQWVELEtBQW5CLEVBQTBCSixLQUFLLENBQUNJLEtBQU4sR0FBY0gsTUFBTSxDQUFDSSxPQUFQLENBQWVELEtBQTdCLENBQTFCLEtBQ0tKLEtBQUssQ0FBQ00sTUFBTixHQUFlTCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsTUFBOUI7QUFDTCxHQVhGLEVBWUVSLE9BWkYsQ0FZVUMsd0RBWlYsRUFZbUMsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3BERCxTQUFLLENBQUNFLE9BQU4sR0FBZ0IsS0FBaEI7QUFDQUYsU0FBSyxDQUFDRyxNQUFOLEdBQWUsSUFBZjtBQUNBSCxTQUFLLENBQUNJLEtBQU4sR0FB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LGNBQWxCLENBQXpCO0FBRUFDLEtBQUssQ0FBQ0UsU0FBTixDQUNDQyxzREFBUSxDQUFDLFlBQU07QUFDZGYsV0FBUyxDQUFDWSxLQUFLLENBQUNJLFFBQU4sRUFBRCxDQUFUO0FBQ0EsQ0FGTyxFQUVMLElBRkssQ0FEVDtBQU1BQyxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBSyxDQUFDSSxRQUFOLEVBQVosRUFBOEJkLElBQUksQ0FBQ0MsU0FBTCxDQUFlUyxLQUFLLENBQUNJLFFBQU4sRUFBZixDQUE5Qjs7QUFFQSxJQUNDLENBQUNKLEtBQUssQ0FBQ0ksUUFBTixHQUFpQi9ELEtBQWpCLENBQXVCQyxLQUF2QixDQUE2QmlFLE1BQTlCLElBQ0FQLEtBQUssQ0FBQ0ksUUFBTixHQUFpQi9ELEtBQWpCLENBQXVCQyxLQUF2QixDQUE2QmlFLE1BQTdCLEtBQXdDLENBRnpDLEVBR0U7QUFDREYsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQURDLENBRUQ7QUFDQTs7QUFFY3BCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzFjZTc2ZmQzMjg1MDg4ZTYxZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwibG9kYXNoLnRocm90dGxlXCI7XG5pbXBvcnQgc2VlZCBmcm9tIFwiLi9zZWVkXCI7XG5cbmNvbnN0IHRoaW5nc1BhZ2VSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUudGhpbmdzX3BhZ2UsIChidWlsZGVyKSA9PiB7XG5cdGJ1aWxkZXJcblx0XHQuYWRkQ2FzZShhY3Rpb25zLnRoaW5nc0xvYWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXRlLmxvYWRlZCA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pXG5cdFx0LmFkZENhc2UoYWN0aW9ucy50aGluZ3NMb2FkQ29tcGxldGUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5sb2FkZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGFjdGlvbi5wYXlsb2FkLmVycm9yKSBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yO1xuXHRcdFx0ZWxzZSBzdGF0ZS50aGluZ3MgPSBhY3Rpb24ucGF5bG9hZC50aGluZ3M7XG5cdFx0fSlcblx0XHQuYWRkQ2FzZShhY3Rpb25zLnRoaW5nc0xvYWRFcnJvciwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdHN0YXRlLmxvYWRlZCA9IHRydWU7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdH0pXG5cblx0XHQuYWRkQ2FzZShhY3Rpb25zLnRoaW5nQWRkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUuYWRkaW5nID0gdHJ1ZTtcblx0XHR9KVxuXHRcdC5hZGRDYXNlKGFjdGlvbnMudGhpbmdBZGRDb21wbGV0ZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLmFkZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUudGhpbmdzLnVuc2hpZnQoYWN0aW9uLnBheWxvYWQudGhpbmcpO1xuXHRcdH0pXG5cdFx0LmFkZENhc2UoYWN0aW9ucy50aGluZ0FkZEVycm9yLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUuYWRkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdH0pO1xufSk7XG5cbi8vQm9hcmQgcmVkdWNlclxuY29uc3QgYm9hcmQgPSAoc3RhdGUgPSB7IGxpc3RzOiBbXSB9LCBhY3Rpb246IGFueSkgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBhY3Rpb25zLmFkZExpc3Q6IHtcblx0XHRcdGNvbnN0IHsgbGlzdElkIH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7IGxpc3RzOiBbLi4uc3RhdGUubGlzdHMsIGxpc3RJZF0gfTtcblx0XHR9XG5cdFx0Y2FzZSBhY3Rpb25zLm1vdmVMaXN0OiB7XG5cdFx0XHRjb25zdCB7IG9sZExpc3RJbmRleCwgbmV3TGlzdEluZGV4IH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdGNvbnN0IG5ld0xpc3RzID0gQXJyYXkuZnJvbShzdGF0ZS5saXN0cyk7XG5cdFx0XHRjb25zdCBbcmVtb3ZlZExpc3RdID0gbmV3TGlzdHMuc3BsaWNlKG9sZExpc3RJbmRleCwgMSk7XG5cdFx0XHRuZXdMaXN0cy5zcGxpY2UobmV3TGlzdEluZGV4LCAwLCByZW1vdmVkTGlzdCk7XG5cdFx0XHRyZXR1cm4geyBsaXN0czogbmV3TGlzdHMgfTtcblx0XHR9XG5cdFx0Y2FzZSBhY3Rpb25zLmRlbGV0ZUxpc3Q6IHtcblx0XHRcdGNvbnN0IHsgbGlzdElkIH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdGNvbnN0IGZpbHRlckRlbGV0ZWQgPSAodG1wTGlzdElkKSA9PiB0bXBMaXN0SWQgIT09IGxpc3RJZDtcblx0XHRcdGNvbnN0IG5ld0xpc3RzID0gc3RhdGUubGlzdHMuZmlsdGVyKGZpbHRlckRlbGV0ZWQpO1xuXHRcdFx0cmV0dXJuIHsgbGlzdHM6IG5ld0xpc3RzIH07XG5cdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn07XG5cbi8vTGlzdEJ5SWQgcmVkdWNlclxuXG5jb25zdCBsaXN0c0J5SWQgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIGFjdGlvbnMuYWRkTGlzdDoge1xuXHRcdFx0Y29uc3QgeyBsaXN0SWQsIGxpc3RUaXRsZSB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0W2xpc3RJZF06IHsgX2lkOiBsaXN0SWQsIHRpdGxlOiBsaXN0VGl0bGUsIGNhcmRzOiBbXSB9LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0Y2FzZSBhY3Rpb25zLmNoYW5nZUxpc3RUaXRsZToge1xuXHRcdFx0Y29uc3QgeyBsaXN0SWQsIGxpc3RUaXRsZSB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0W2xpc3RJZF06IHsgLi4uc3RhdGVbbGlzdElkXSwgdGl0bGU6IGxpc3RUaXRsZSB9LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0Y2FzZSBhY3Rpb25zLmRlbGV0ZUxpc3Q6IHtcblx0XHRcdGNvbnN0IHsgbGlzdElkIH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdC8vY29uc3QgeyBbbGlzdElkXTogZGVsZXRlZExpc3QsIC4uLnJlc3RPZkxpc3RzIH0gPSBzdGF0ZTtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcblx0XHRcdGRlbGV0ZSBuZXdTdGF0ZVtsaXN0SWRdO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMuYWRkQ2FyZDoge1xuXHRcdFx0Y29uc3QgeyBsaXN0SWQsIGNhcmRJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0W2xpc3RJZF06IHtcblx0XHRcdFx0XHQuLi5zdGF0ZVtsaXN0SWRdLFxuXHRcdFx0XHRcdGNhcmRzOiBbLi4uc3RhdGVbbGlzdElkXS5jYXJkcywgY2FyZElkXSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdGNhc2UgYWN0aW9ucy5tb3ZlQ2FyZDoge1xuXHRcdFx0Y29uc3QgeyBvbGRDYXJkSW5kZXgsIG5ld0NhcmRJbmRleCwgc291cmNlTGlzdElkLCBkZXN0TGlzdElkIH0gPVxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZDtcblx0XHRcdC8vIE1vdmUgd2l0aGluIHRoZSBzYW1lIGxpc3Rcblx0XHRcdGlmIChzb3VyY2VMaXN0SWQgPT09IGRlc3RMaXN0SWQpIHtcblx0XHRcdFx0Y29uc3QgbmV3Q2FyZHMgPSBBcnJheS5mcm9tKHN0YXRlW3NvdXJjZUxpc3RJZF0uY2FyZHMpO1xuXHRcdFx0XHRjb25zdCBbcmVtb3ZlZENhcmRdID0gbmV3Q2FyZHMuc3BsaWNlKG9sZENhcmRJbmRleCwgMSk7XG5cdFx0XHRcdG5ld0NhcmRzLnNwbGljZShuZXdDYXJkSW5kZXgsIDAsIHJlbW92ZWRDYXJkKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRbc291cmNlTGlzdElkXTogeyAuLi5zdGF0ZVtzb3VyY2VMaXN0SWRdLCBjYXJkczogbmV3Q2FyZHMgfSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIE1vdmUgY2FyZCBmcm9tIG9uZSBsaXN0IHRvIGFub3RoZXJcblx0XHRcdGNvbnN0IHNvdXJjZUNhcmRzID0gQXJyYXkuZnJvbShzdGF0ZVtzb3VyY2VMaXN0SWRdLmNhcmRzKTtcblx0XHRcdGNvbnN0IFtyZW1vdmVkQ2FyZF0gPSBzb3VyY2VDYXJkcy5zcGxpY2Uob2xkQ2FyZEluZGV4LCAxKTtcblx0XHRcdGNvbnN0IGRlc3RpbmF0aW9uQ2FyZHMgPSBBcnJheS5mcm9tKHN0YXRlW2Rlc3RMaXN0SWRdLmNhcmRzKTtcblx0XHRcdGRlc3RpbmF0aW9uQ2FyZHMuc3BsaWNlKG5ld0NhcmRJbmRleCwgMCwgcmVtb3ZlZENhcmQpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFtzb3VyY2VMaXN0SWRdOiB7IC4uLnN0YXRlW3NvdXJjZUxpc3RJZF0sIGNhcmRzOiBzb3VyY2VDYXJkcyB9LFxuXHRcdFx0XHRbZGVzdExpc3RJZF06IHsgLi4uc3RhdGVbZGVzdExpc3RJZF0sIGNhcmRzOiBkZXN0aW5hdGlvbkNhcmRzIH0sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMuZGVsZXRlQ2FyZDoge1xuXHRcdFx0Y29uc3QgeyBjYXJkSWQ6IGRlbGV0ZWRDYXJkSWQsIGxpc3RJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRjb25zdCBmaWx0ZXJEZWxldGVkID0gKGNhcmRJZCkgPT4gY2FyZElkICE9PSBkZWxldGVkQ2FyZElkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFtsaXN0SWRdOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGVbbGlzdElkXSxcblx0XHRcdFx0XHRjYXJkczogc3RhdGVbbGlzdElkXS5jYXJkcy5maWx0ZXIoZmlsdGVyRGVsZXRlZCksXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuXG4vL0NhcmRzIEJ5IElEIHJlZHVjZXJcblxuY29uc3QgY2FyZHNCeUlkID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBhY3Rpb25zLmFkZENhcmQ6IHtcblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0Y2FyZFRleHQsXG5cdFx0XHRcdGNhcmRJZCxcblx0XHRcdFx0Y29tbWVudENvdW50LFxuXHRcdFx0XHRjb21wbGV0ZWRUYXNrQ291bnQsXG5cdFx0XHRcdHRhc2tDb3VudCxcblx0XHRcdFx0bGlrZUNvdW50LFxuXHRcdFx0XHRzdGF0dXMsXG5cdFx0XHR9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0W2NhcmRJZF06IHtcblx0XHRcdFx0XHR0ZXh0OiBjYXJkVGV4dCxcblx0XHRcdFx0XHRfaWQ6IGNhcmRJZCxcblx0XHRcdFx0XHRjb21tZW50Q291bnQ6IGNvbW1lbnRDb3VudCA/IGNvbW1lbnRDb3VudCA6IG51bGwsXG5cdFx0XHRcdFx0dGFza0NvdW50OiB0YXNrQ291bnQgPyB0YXNrQ291bnQgOiBudWxsLFxuXHRcdFx0XHRcdGNvbXBsZXRlZFRhc2tDb3VudDogY29tcGxldGVkVGFza0NvdW50XG5cdFx0XHRcdFx0XHQ/IGNvbXBsZXRlZFRhc2tDb3VudFxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGxpa2VDb3VudDogbGlrZUNvdW50ID8gbGlrZUNvdW50IDogbnVsbCxcblx0XHRcdFx0XHRzdGF0dXM6IHN0YXR1cyA/IHN0YXR1cyA6IG51bGwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMuY2hhbmdlQ2FyZFRleHQ6IHtcblx0XHRcdGNvbnN0IHsgY2FyZFRleHQsIGNhcmRJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgW2NhcmRJZF06IHsgLi4uc3RhdGVbY2FyZElkXSwgdGV4dDogY2FyZFRleHQgfSB9O1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMuZGVsZXRlQ2FyZDoge1xuXHRcdFx0Y29uc3QgeyBjYXJkSWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0Ly9jb25zdCB7IFtjYXJkSWRdOiBkZWxldGVkQ2FyZCwgLi4ucmVzdE9mQ2FyZHMgfSA9IHN0YXRlO1xuXHRcdFx0bGV0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xuXHRcdFx0ZGVsZXRlIG5ld1N0YXRlW2NhcmRJZF07XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cdFx0fVxuXHRcdC8vIEZpbmQgZXZlcnkgY2FyZCBmcm9tIHRoZSBkZWxldGVkIGxpc3QgYW5kIHJlbW92ZSBpdFxuXHRcdGNhc2UgYWN0aW9ucy5kZWxldGVMaXN0OiB7XG5cdFx0XHRjb25zdCB7IGNhcmRzOiBjYXJkSWRzIH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZSlcblx0XHRcdFx0LmZpbHRlcigoY2FyZElkKSA9PiAhY2FyZElkcy5pbmNsdWRlcyhjYXJkSWQpKVxuXHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdChuZXdTdGF0ZSwgY2FyZElkKSA9PiAoe1xuXHRcdFx0XHRcdFx0Li4ubmV3U3RhdGUsXG5cdFx0XHRcdFx0XHRbY2FyZElkXTogc3RhdGVbY2FyZElkXSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR7fVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuXG4vLyBDb21iaW5lZCBzdGF0ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcblx0dGhpbmdzX3BhZ2U6IHRoaW5nc1BhZ2VSZWR1Y2VyLFxuXHRib2FyZCxcblx0bGlzdHNCeUlkLFxuXHRjYXJkc0J5SWQsXG59KTtcblxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGU6IGFueSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEhZRFJBVEU6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblx0fVxufVxuXG5jb25zdCBzYXZlU3RhdGUgPSAoc3RhdGUpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBKU09OLnN0cmluZ2lmeShzdGF0ZSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBzZXJpYWxpemVkU3RhdGUpO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBpZ25vcmUgd3JpdGUgZXJyb3JzXG5cdH1cbn07XG5cbmNvbnN0IGxvYWRTdGF0ZSA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpO1xuXHRcdGlmIChzZXJpYWxpemVkU3RhdGUgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRTdGF0ZSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbmNvbnN0IHBlcnNpc3RlZFN0YXRlID0gbG9hZFN0YXRlKCk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVkUmVkdWNlciwgcGVyc2lzdGVkU3RhdGUpO1xuXG5zdG9yZS5zdWJzY3JpYmUoXG5cdHRocm90dGxlKCgpID0+IHtcblx0XHRzYXZlU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKSk7XG5cdH0sIDEwMDApXG4pO1xuXG5jb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLCBKU09OLnN0cmluZ2lmeShzdG9yZS5nZXRTdGF0ZSgpKSk7XG5cbmlmIChcblx0IXN0b3JlLmdldFN0YXRlKCkuYm9hcmQubGlzdHMubGVuZ3RoIHx8XG5cdHN0b3JlLmdldFN0YXRlKCkuYm9hcmQubGlzdHMubGVuZ3RoID09PSAwXG4pIHtcblx0Y29uc29sZS5sb2coXCJTRUVEXCIpO1xuXHQvL3NlZWQoc3RvcmUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=