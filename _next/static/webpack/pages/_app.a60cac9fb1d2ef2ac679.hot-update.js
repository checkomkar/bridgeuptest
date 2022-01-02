webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducer.ts":
/*!**************************!*\
  !*** ./store/reducer.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state */ "./store/state.ts");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_9__);





function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var thingsPageReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__["createReducer"])(_state__WEBPACK_IMPORTED_MODULE_8__["default"].things_page, function (builder) {
  builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_7__["thingsLoad"], function (state, action) {
    state.loading = true;
    state.loaded = false;
    state.error = null;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_7__["thingsLoadComplete"], function (state, action) {
    state.loading = false;
    state.loaded = true;
    if (action.payload.error) state.error = action.payload.error;else state.things = action.payload.things;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_7__["thingsLoadError"], function (state, action) {
    state.loading = false;
    state.loaded = true;
    state.error = action.payload;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_7__["thingAdd"], function (state, action) {
    state.adding = true;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_7__["thingAddComplete"], function (state, action) {
    state.adding = false;
    state.things.unshift(action.payload.thing);
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_7__["thingAddError"], function (state, action) {
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
    case _actions__WEBPACK_IMPORTED_MODULE_7__["addList"]:
      {
        var listId = action.payload.listId;
        return {
          lists: [].concat(Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(state.lists), [listId])
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["moveList"]:
      {
        var _action$payload = action.payload,
            oldListIndex = _action$payload.oldListIndex,
            newListIndex = _action$payload.newListIndex;
        var newLists = Array.from(state.lists);

        var _newLists$splice = newLists.splice(oldListIndex, 1),
            _newLists$splice2 = Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_newLists$splice, 1),
            removedList = _newLists$splice2[0];

        newLists.splice(newListIndex, 0, removedList);
        return {
          lists: newLists
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["deleteList"]:
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
    case _actions__WEBPACK_IMPORTED_MODULE_7__["addList"]:
      {
        var _action$payload2 = action.payload,
            listId = _action$payload2.listId,
            listTitle = _action$payload2.listTitle;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, listId, {
          _id: listId,
          title: listTitle,
          cards: []
        }));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["changeListTitle"]:
      {
        var _action$payload3 = action.payload,
            _listId2 = _action$payload3.listId,
            _listTitle = _action$payload3.listTitle;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _listId2, _objectSpread(_objectSpread({}, state[_listId2]), {}, {
          title: _listTitle
        })));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["deleteList"]:
      {
        var _listId3 = action.payload.listId;

        var deletedList = state[_listId3],
            restOfLists = Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(state, [_listId3].map(_toPropertyKey));

        return restOfLists;
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["addCard"]:
      {
        var _action$payload4 = action.payload,
            _listId4 = _action$payload4.listId,
            cardId = _action$payload4.cardId;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _listId4, _objectSpread(_objectSpread({}, state[_listId4]), {}, {
          cards: [].concat(Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(state[_listId4].cards), [cardId])
        })));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["moveCard"]:
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
              _newCards$splice2 = Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_newCards$splice, 1),
              _removedCard = _newCards$splice2[0];

          newCards.splice(newCardIndex, 0, _removedCard);
          return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, sourceListId, _objectSpread(_objectSpread({}, state[sourceListId]), {}, {
            cards: newCards
          })));
        } // Move card from one list to another


        var sourceCards = Array.from(state[sourceListId].cards);

        var _sourceCards$splice = sourceCards.splice(oldCardIndex, 1),
            _sourceCards$splice2 = Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_sourceCards$splice, 1),
            removedCard = _sourceCards$splice2[0];

        var destinationCards = Array.from(state[destListId].cards);
        destinationCards.splice(newCardIndex, 0, removedCard);
        return _objectSpread(_objectSpread({}, state), {}, (_objectSpread6 = {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread6, sourceListId, _objectSpread(_objectSpread({}, state[sourceListId]), {}, {
          cards: sourceCards
        })), Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread6, destListId, _objectSpread(_objectSpread({}, state[destListId]), {}, {
          cards: destinationCards
        })), _objectSpread6));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["deleteCard"]:
      {
        var _action$payload6 = action.payload,
            deletedCardId = _action$payload6.cardId,
            _listId5 = _action$payload6.listId;

        var filterDeleted = function filterDeleted(cardId) {
          return cardId !== deletedCardId;
        };

        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _listId5, _objectSpread(_objectSpread({}, state[_listId5]), {}, {
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
    case _actions__WEBPACK_IMPORTED_MODULE_7__["addCard"]:
      {
        var _action$payload7 = action.payload,
            cardText = _action$payload7.cardText,
            cardId = _action$payload7.cardId,
            commentCount = _action$payload7.commentCount,
            completedTaskCount = _action$payload7.completedTaskCount,
            taskCount = _action$payload7.taskCount,
            likeCount = _action$payload7.likeCount,
            status = _action$payload7.status;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cardId, {
          text: cardText,
          _id: cardId,
          commentCount: commentCount ? commentCount : null,
          taskCount: taskCount ? taskCount : null,
          completedTaskCount: completedTaskCount ? completedTaskCount : null,
          likeCount: likeCount ? likeCount : null,
          status: status ? status : null
        }));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["changeCardText"]:
      {
        var _action$payload8 = action.payload,
            _cardText = _action$payload8.cardText,
            _cardId = _action$payload8.cardId;
        return _objectSpread(_objectSpread({}, state), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _cardId, _objectSpread(_objectSpread({}, state[_cardId]), {}, {
          text: _cardText
        })));
      }

    case _actions__WEBPACK_IMPORTED_MODULE_7__["deleteCard"]:
      {
        var _cardId2 = action.payload.cardId;

        var deletedCard = state[_cardId2],
            restOfCards = Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(state, [_cardId2].map(_toPropertyKey));

        var newState = _objectSpread({}, state);

        delete newState[_cardId2]; //console.log("hello", state, cardId, deletedCard, restOfCards);

        console.log("deleted card", {
          cardId: deletedCard
        }, newState);
        return newState;
      }
    // Find every card from the deleted list and remove it

    case _actions__WEBPACK_IMPORTED_MODULE_7__["deleteList"]:
      {
        var cardIds = action.payload.cards;
        return Object.keys(state).filter(function (cardId) {
          return !cardIds.includes(cardId);
        }).reduce(function (newState, cardId) {
          return _objectSpread(_objectSpread({}, newState), {}, Object(E_projects_nextjs_boilerplate_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cardId, state[cardId]));
        }, {});
      }

    default:
      return state;
  }
}; // Combined state
// -----------------------------------------------------------------------------


var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  things_page: thingsPageReducer,
  board: board,
  listsById: listsById,
  cardsById: cardsById
});

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_8__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__["HYDRATE"]:
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
var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(combinedReducer, persistedState);
store.subscribe(lodash_throttle__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlci50cyJdLCJuYW1lcyI6WyJ0aGluZ3NQYWdlUmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJ0aGluZ3NfcGFnZSIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiYWN0aW9ucyIsInN0YXRlIiwiYWN0aW9uIiwibG9hZGluZyIsImxvYWRlZCIsImVycm9yIiwicGF5bG9hZCIsInRoaW5ncyIsImFkZGluZyIsInVuc2hpZnQiLCJ0aGluZyIsImJvYXJkIiwibGlzdHMiLCJ0eXBlIiwibGlzdElkIiwib2xkTGlzdEluZGV4IiwibmV3TGlzdEluZGV4IiwibmV3TGlzdHMiLCJBcnJheSIsImZyb20iLCJzcGxpY2UiLCJyZW1vdmVkTGlzdCIsImZpbHRlckRlbGV0ZWQiLCJ0bXBMaXN0SWQiLCJmaWx0ZXIiLCJsaXN0c0J5SWQiLCJsaXN0VGl0bGUiLCJfaWQiLCJ0aXRsZSIsImNhcmRzIiwiZGVsZXRlZExpc3QiLCJyZXN0T2ZMaXN0cyIsImNhcmRJZCIsIm9sZENhcmRJbmRleCIsIm5ld0NhcmRJbmRleCIsInNvdXJjZUxpc3RJZCIsImRlc3RMaXN0SWQiLCJuZXdDYXJkcyIsInJlbW92ZWRDYXJkIiwic291cmNlQ2FyZHMiLCJkZXN0aW5hdGlvbkNhcmRzIiwiZGVsZXRlZENhcmRJZCIsImNhcmRzQnlJZCIsImNhcmRUZXh0IiwiY29tbWVudENvdW50IiwiY29tcGxldGVkVGFza0NvdW50IiwidGFza0NvdW50IiwibGlrZUNvdW50Iiwic3RhdHVzIiwidGV4dCIsImRlbGV0ZWRDYXJkIiwicmVzdE9mQ2FyZHMiLCJuZXdTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjYXJkSWRzIiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwicmVkdWNlIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdFJlZHVjZXIiLCJIWURSQVRFIiwic2F2ZVN0YXRlIiwic2VyaWFsaXplZFN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2FkU3RhdGUiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwicGFyc2UiLCJlcnIiLCJwZXJzaXN0ZWRTdGF0ZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzdWJzY3JpYmUiLCJ0aHJvdHRsZSIsImdldFN0YXRlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0EsSUFBTUEsaUJBQWlCLEdBQUdDLHNFQUFhLENBQUNDLDhDQUFZLENBQUNDLFdBQWQsRUFBMkIsVUFBQ0MsT0FBRCxFQUFhO0FBQzlFQSxTQUFPLENBQ0xDLE9BREYsQ0FDVUMsbURBRFYsRUFDOEIsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQy9DRCxTQUFLLENBQUNFLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQUYsU0FBSyxDQUFDRyxNQUFOLEdBQWUsS0FBZjtBQUNBSCxTQUFLLENBQUNJLEtBQU4sR0FBYyxJQUFkO0FBQ0EsR0FMRixFQU1FTixPQU5GLENBTVVDLDJEQU5WLEVBTXNDLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN2REQsU0FBSyxDQUFDRSxPQUFOLEdBQWdCLEtBQWhCO0FBQ0FGLFNBQUssQ0FBQ0csTUFBTixHQUFlLElBQWY7QUFDQSxRQUFJRixNQUFNLENBQUNJLE9BQVAsQ0FBZUQsS0FBbkIsRUFBMEJKLEtBQUssQ0FBQ0ksS0FBTixHQUFjSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUQsS0FBN0IsQ0FBMUIsS0FDS0osS0FBSyxDQUFDTSxNQUFOLEdBQWVMLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxNQUE5QjtBQUNMLEdBWEYsRUFZRVIsT0FaRixDQVlVQyx3REFaVixFQVltQyxVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDcERELFNBQUssQ0FBQ0UsT0FBTixHQUFnQixLQUFo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LE9BQXJCLENBQXhCOztBQUNBLFFBQUlOLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM3QixhQUFPTyxTQUFQO0FBQ0E7O0FBQ0QsV0FBT04sSUFBSSxDQUFDTyxLQUFMLENBQVdSLGVBQVgsQ0FBUDtBQUNBLEdBTkQsQ0FNRSxPQUFPUyxHQUFQLEVBQVk7QUFDYixXQUFPRixTQUFQO0FBQ0E7QUFDRCxDQVZEOztBQVlBLElBQU1HLGNBQWMsR0FBR0wsU0FBUyxFQUFoQztBQUNBLElBQU1NLEtBQUssR0FBR0MseURBQVcsQ0FBQ2pCLGVBQUQsRUFBa0JlLGNBQWxCLENBQXpCO0FBRUFDLEtBQUssQ0FBQ0UsU0FBTixDQUNDQyxzREFBUSxDQUFDLFlBQU07QUFDZGYsV0FBUyxDQUFDWSxLQUFLLENBQUNJLFFBQU4sRUFBRCxDQUFUO0FBQ0EsQ0FGTyxFQUVMLElBRkssQ0FEVDtBQU1BM0IsT0FBTyxDQUFDQyxHQUFSLENBQVlzQixLQUFLLENBQUNJLFFBQU4sRUFBWixFQUE4QmQsSUFBSSxDQUFDQyxTQUFMLENBQWVTLEtBQUssQ0FBQ0ksUUFBTixFQUFmLENBQTlCOztBQUVBLElBQ0MsQ0FBQ0osS0FBSyxDQUFDSSxRQUFOLEdBQWlCckUsS0FBakIsQ0FBdUJDLEtBQXZCLENBQTZCcUUsTUFBOUIsSUFDQUwsS0FBSyxDQUFDSSxRQUFOLEdBQWlCckUsS0FBakIsQ0FBdUJDLEtBQXZCLENBQTZCcUUsTUFBN0IsS0FBd0MsQ0FGekMsRUFHRTtBQUNENUIsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQURDLENBRUQ7QUFDQTs7QUFFY1EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNjBjYWM5ZmIxZDJlZjJhYzY3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5cbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRocm90dGxlIGZyb20gXCJsb2Rhc2gudGhyb3R0bGVcIjtcbmltcG9ydCBzZWVkIGZyb20gXCIuL3NlZWRcIjtcblxuY29uc3QgdGhpbmdzUGFnZVJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZS50aGluZ3NfcGFnZSwgKGJ1aWxkZXIpID0+IHtcblx0YnVpbGRlclxuXHRcdC5hZGRDYXNlKGFjdGlvbnMudGhpbmdzTG9hZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0c3RhdGUubG9hZGVkID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSlcblx0XHQuYWRkQ2FzZShhY3Rpb25zLnRoaW5nc0xvYWRDb21wbGV0ZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdHN0YXRlLmxvYWRlZCA9IHRydWU7XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQuZXJyb3IpIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3I7XG5cdFx0XHRlbHNlIHN0YXRlLnRoaW5ncyA9IGFjdGlvbi5wYXlsb2FkLnRoaW5ncztcblx0XHR9KVxuXHRcdC5hZGRDYXNlKGFjdGlvbnMudGhpbmdzTG9hZEVycm9yLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUubG9hZGVkID0gdHJ1ZTtcblx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSlcblxuXHRcdC5hZGRDYXNlKGFjdGlvbnMudGhpbmdBZGQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRzdGF0ZS5hZGRpbmcgPSB0cnVlO1xuXHRcdH0pXG5cdFx0LmFkZENhc2UoYWN0aW9ucy50aGluZ0FkZENvbXBsZXRlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUuYWRkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS50aGluZ3MudW5zaGlmdChhY3Rpb24ucGF5bG9hZC50aGluZyk7XG5cdFx0fSlcblx0XHQuYWRkQ2FzZShhY3Rpb25zLnRoaW5nQWRkRXJyb3IsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRzdGF0ZS5hZGRpbmcgPSBmYWxzZTtcblx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSk7XG59KTtcblxuLy9Cb2FyZCByZWR1Y2VyXG5jb25zdCBib2FyZCA9IChzdGF0ZSA9IHsgbGlzdHM6IFtdIH0sIGFjdGlvbjogYW55KSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIGFjdGlvbnMuYWRkTGlzdDoge1xuXHRcdFx0Y29uc3QgeyBsaXN0SWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHsgbGlzdHM6IFsuLi5zdGF0ZS5saXN0cywgbGlzdElkXSB9O1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMubW92ZUxpc3Q6IHtcblx0XHRcdGNvbnN0IHsgb2xkTGlzdEluZGV4LCBuZXdMaXN0SW5kZXggfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0Y29uc3QgbmV3TGlzdHMgPSBBcnJheS5mcm9tKHN0YXRlLmxpc3RzKTtcblx0XHRcdGNvbnN0IFtyZW1vdmVkTGlzdF0gPSBuZXdMaXN0cy5zcGxpY2Uob2xkTGlzdEluZGV4LCAxKTtcblx0XHRcdG5ld0xpc3RzLnNwbGljZShuZXdMaXN0SW5kZXgsIDAsIHJlbW92ZWRMaXN0KTtcblx0XHRcdHJldHVybiB7IGxpc3RzOiBuZXdMaXN0cyB9O1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMuZGVsZXRlTGlzdDoge1xuXHRcdFx0Y29uc3QgeyBsaXN0SWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0Y29uc3QgZmlsdGVyRGVsZXRlZCA9ICh0bXBMaXN0SWQpID0+IHRtcExpc3RJZCAhPT0gbGlzdElkO1xuXHRcdFx0Y29uc3QgbmV3TGlzdHMgPSBzdGF0ZS5saXN0cy5maWx0ZXIoZmlsdGVyRGVsZXRlZCk7XG5cdFx0XHRyZXR1cm4geyBsaXN0czogbmV3TGlzdHMgfTtcblx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcblxuLy9MaXN0QnlJZCByZWR1Y2VyXG5cbmNvbnN0IGxpc3RzQnlJZCA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgYWN0aW9ucy5hZGRMaXN0OiB7XG5cdFx0XHRjb25zdCB7IGxpc3RJZCwgbGlzdFRpdGxlIH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRbbGlzdElkXTogeyBfaWQ6IGxpc3RJZCwgdGl0bGU6IGxpc3RUaXRsZSwgY2FyZHM6IFtdIH0sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMuY2hhbmdlTGlzdFRpdGxlOiB7XG5cdFx0XHRjb25zdCB7IGxpc3RJZCwgbGlzdFRpdGxlIH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRbbGlzdElkXTogeyAuLi5zdGF0ZVtsaXN0SWRdLCB0aXRsZTogbGlzdFRpdGxlIH0sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMuZGVsZXRlTGlzdDoge1xuXHRcdFx0Y29uc3QgeyBsaXN0SWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0Y29uc3QgeyBbbGlzdElkXTogZGVsZXRlZExpc3QsIC4uLnJlc3RPZkxpc3RzIH0gPSBzdGF0ZTtcblx0XHRcdHJldHVybiByZXN0T2ZMaXN0cztcblx0XHR9XG5cdFx0Y2FzZSBhY3Rpb25zLmFkZENhcmQ6IHtcblx0XHRcdGNvbnN0IHsgbGlzdElkLCBjYXJkSWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFtsaXN0SWRdOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGVbbGlzdElkXSxcblx0XHRcdFx0XHRjYXJkczogWy4uLnN0YXRlW2xpc3RJZF0uY2FyZHMsIGNhcmRJZF0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjYXNlIGFjdGlvbnMubW92ZUNhcmQ6IHtcblx0XHRcdGNvbnN0IHsgb2xkQ2FyZEluZGV4LCBuZXdDYXJkSW5kZXgsIHNvdXJjZUxpc3RJZCwgZGVzdExpc3RJZCB9ID1cblx0XHRcdFx0YWN0aW9uLnBheWxvYWQ7XG5cdFx0XHQvLyBNb3ZlIHdpdGhpbiB0aGUgc2FtZSBsaXN0XG5cdFx0XHRpZiAoc291cmNlTGlzdElkID09PSBkZXN0TGlzdElkKSB7XG5cdFx0XHRcdGNvbnN0IG5ld0NhcmRzID0gQXJyYXkuZnJvbShzdGF0ZVtzb3VyY2VMaXN0SWRdLmNhcmRzKTtcblx0XHRcdFx0Y29uc3QgW3JlbW92ZWRDYXJkXSA9IG5ld0NhcmRzLnNwbGljZShvbGRDYXJkSW5kZXgsIDEpO1xuXHRcdFx0XHRuZXdDYXJkcy5zcGxpY2UobmV3Q2FyZEluZGV4LCAwLCByZW1vdmVkQ2FyZCk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0W3NvdXJjZUxpc3RJZF06IHsgLi4uc3RhdGVbc291cmNlTGlzdElkXSwgY2FyZHM6IG5ld0NhcmRzIH0sXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBNb3ZlIGNhcmQgZnJvbSBvbmUgbGlzdCB0byBhbm90aGVyXG5cdFx0XHRjb25zdCBzb3VyY2VDYXJkcyA9IEFycmF5LmZyb20oc3RhdGVbc291cmNlTGlzdElkXS5jYXJkcyk7XG5cdFx0XHRjb25zdCBbcmVtb3ZlZENhcmRdID0gc291cmNlQ2FyZHMuc3BsaWNlKG9sZENhcmRJbmRleCwgMSk7XG5cdFx0XHRjb25zdCBkZXN0aW5hdGlvbkNhcmRzID0gQXJyYXkuZnJvbShzdGF0ZVtkZXN0TGlzdElkXS5jYXJkcyk7XG5cdFx0XHRkZXN0aW5hdGlvbkNhcmRzLnNwbGljZShuZXdDYXJkSW5kZXgsIDAsIHJlbW92ZWRDYXJkKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRbc291cmNlTGlzdElkXTogeyAuLi5zdGF0ZVtzb3VyY2VMaXN0SWRdLCBjYXJkczogc291cmNlQ2FyZHMgfSxcblx0XHRcdFx0W2Rlc3RMaXN0SWRdOiB7IC4uLnN0YXRlW2Rlc3RMaXN0SWRdLCBjYXJkczogZGVzdGluYXRpb25DYXJkcyB9LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0Y2FzZSBhY3Rpb25zLmRlbGV0ZUNhcmQ6IHtcblx0XHRcdGNvbnN0IHsgY2FyZElkOiBkZWxldGVkQ2FyZElkLCBsaXN0SWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0Y29uc3QgZmlsdGVyRGVsZXRlZCA9IChjYXJkSWQpID0+IGNhcmRJZCAhPT0gZGVsZXRlZENhcmRJZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRbbGlzdElkXToge1xuXHRcdFx0XHRcdC4uLnN0YXRlW2xpc3RJZF0sXG5cdFx0XHRcdFx0Y2FyZHM6IHN0YXRlW2xpc3RJZF0uY2FyZHMuZmlsdGVyKGZpbHRlckRlbGV0ZWQpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcblxuLy9DYXJkcyBCeSBJRCByZWR1Y2VyXG5cbmNvbnN0IGNhcmRzQnlJZCA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgYWN0aW9ucy5hZGRDYXJkOiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdGNhcmRUZXh0LFxuXHRcdFx0XHRjYXJkSWQsXG5cdFx0XHRcdGNvbW1lbnRDb3VudCxcblx0XHRcdFx0Y29tcGxldGVkVGFza0NvdW50LFxuXHRcdFx0XHR0YXNrQ291bnQsXG5cdFx0XHRcdGxpa2VDb3VudCxcblx0XHRcdFx0c3RhdHVzLFxuXHRcdFx0fSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFtjYXJkSWRdOiB7XG5cdFx0XHRcdFx0dGV4dDogY2FyZFRleHQsXG5cdFx0XHRcdFx0X2lkOiBjYXJkSWQsXG5cdFx0XHRcdFx0Y29tbWVudENvdW50OiBjb21tZW50Q291bnQgPyBjb21tZW50Q291bnQgOiBudWxsLFxuXHRcdFx0XHRcdHRhc2tDb3VudDogdGFza0NvdW50ID8gdGFza0NvdW50IDogbnVsbCxcblx0XHRcdFx0XHRjb21wbGV0ZWRUYXNrQ291bnQ6IGNvbXBsZXRlZFRhc2tDb3VudFxuXHRcdFx0XHRcdFx0PyBjb21wbGV0ZWRUYXNrQ291bnRcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRsaWtlQ291bnQ6IGxpa2VDb3VudCA/IGxpa2VDb3VudCA6IG51bGwsXG5cdFx0XHRcdFx0c3RhdHVzOiBzdGF0dXMgPyBzdGF0dXMgOiBudWxsLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0Y2FzZSBhY3Rpb25zLmNoYW5nZUNhcmRUZXh0OiB7XG5cdFx0XHRjb25zdCB7IGNhcmRUZXh0LCBjYXJkSWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIFtjYXJkSWRdOiB7IC4uLnN0YXRlW2NhcmRJZF0sIHRleHQ6IGNhcmRUZXh0IH0gfTtcblx0XHR9XG5cdFx0Y2FzZSBhY3Rpb25zLmRlbGV0ZUNhcmQ6IHtcblx0XHRcdGNvbnN0IHsgY2FyZElkIH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdGNvbnN0IHsgW2NhcmRJZF06IGRlbGV0ZWRDYXJkLCAuLi5yZXN0T2ZDYXJkcyB9ID0gc3RhdGU7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XG5cdFx0XHRkZWxldGUgbmV3U3RhdGVbY2FyZElkXTtcblx0XHRcdC8vY29uc29sZS5sb2coXCJoZWxsb1wiLCBzdGF0ZSwgY2FyZElkLCBkZWxldGVkQ2FyZCwgcmVzdE9mQ2FyZHMpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJkZWxldGVkIGNhcmRcIiwgeyBjYXJkSWQ6IGRlbGV0ZWRDYXJkIH0sIG5ld1N0YXRlKTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblx0XHR9XG5cdFx0Ly8gRmluZCBldmVyeSBjYXJkIGZyb20gdGhlIGRlbGV0ZWQgbGlzdCBhbmQgcmVtb3ZlIGl0XG5cdFx0Y2FzZSBhY3Rpb25zLmRlbGV0ZUxpc3Q6IHtcblx0XHRcdGNvbnN0IHsgY2FyZHM6IGNhcmRJZHMgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKVxuXHRcdFx0XHQuZmlsdGVyKChjYXJkSWQpID0+ICFjYXJkSWRzLmluY2x1ZGVzKGNhcmRJZCkpXG5cdFx0XHRcdC5yZWR1Y2UoXG5cdFx0XHRcdFx0KG5ld1N0YXRlLCBjYXJkSWQpID0+ICh7XG5cdFx0XHRcdFx0XHQuLi5uZXdTdGF0ZSxcblx0XHRcdFx0XHRcdFtjYXJkSWRdOiBzdGF0ZVtjYXJkSWRdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHt9XG5cdFx0XHRcdCk7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn07XG5cbi8vIENvbWJpbmVkIHN0YXRlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHR0aGluZ3NfcGFnZTogdGhpbmdzUGFnZVJlZHVjZXIsXG5cdGJvYXJkLFxuXHRsaXN0c0J5SWQsXG5cdGNhcmRzQnlJZCxcbn0pO1xuXG5mdW5jdGlvbiByb290UmVkdWNlcihzdGF0ZTogYW55ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgSFlEUkFURTpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXHR9XG59XG5cbmNvbnN0IHNhdmVTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXRlXCIsIHNlcmlhbGl6ZWRTdGF0ZSk7XG5cdH0gY2F0Y2gge1xuXHRcdC8vIGlnbm9yZSB3cml0ZSBlcnJvcnNcblx0fVxufTtcblxuY29uc3QgbG9hZFN0YXRlID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVcIik7XG5cdFx0aWYgKHNlcmlhbGl6ZWRTdGF0ZSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0cmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZFN0YXRlKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufTtcblxuY29uc3QgcGVyc2lzdGVkU3RhdGUgPSBsb2FkU3RhdGUoKTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZWRSZWR1Y2VyLCBwZXJzaXN0ZWRTdGF0ZSk7XG5cbnN0b3JlLnN1YnNjcmliZShcblx0dGhyb3R0bGUoKCkgPT4ge1xuXHRcdHNhdmVTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpKTtcblx0fSwgMTAwMClcbik7XG5cbmNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCksIEpTT04uc3RyaW5naWZ5KHN0b3JlLmdldFN0YXRlKCkpKTtcblxuaWYgKFxuXHQhc3RvcmUuZ2V0U3RhdGUoKS5ib2FyZC5saXN0cy5sZW5ndGggfHxcblx0c3RvcmUuZ2V0U3RhdGUoKS5ib2FyZC5saXN0cy5sZW5ndGggPT09IDBcbikge1xuXHRjb25zb2xlLmxvZyhcIlNFRURcIik7XG5cdC8vc2VlZChzdG9yZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==