webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThingsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var heroicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! heroicons-react */ "./node_modules/heroicons-react/build/index.es.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions */ "./store/actions.ts");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loader */ "./components/loader.tsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Board */ "./components/Board.tsx");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.tsx");
/* harmony import */ var _components_SignUpForFree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SignUpForFree */ "./components/SignUpForFree.tsx");
/* harmony import */ var _components_KanBanMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/KanBanMenu */ "./components/KanBanMenu.tsx");
var _jsxFileName = "E:\\projects\\nextjs-boilerplate-main\\pages\\index.tsx",
    _s = $RefreshSig$(),
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var DEBUG = true;
/* export const getServerSideProps = reduxWrapper.getServerSideProps(
	async ({ store, query }) => {
		if (query.preload) {
			log.info("preloading?");
			store.dispatch(thingsLoad());
			store.dispatch(END);
			await store.sagaTask.toPromise();
		}
	}
); */

function ThingsPage() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.things_page;
  }),
      loading = _useSelector.loading,
      loaded = _useSelector.loaded,
      adding = _useSelector.adding,
      things = _useSelector.things,
      error = _useSelector.error;

  var myState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state;
  });

  var getItems = function getItems(count) {
    return Array.from({
      length: count
    }, function (v, k) {
      return k;
    }).map(function (k) {
      return {
        id: "item-".concat(k),
        content: "item ".concat(k)
      };
    });
  };

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getItems(6)),
      items = _useState[0],
      setItems = _useState[1]; //const reload = () => dispatch(thingsLoad());


  var seed = function seed() {
    var firstListId = shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate();
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addList"],
      payload: {
        listId: firstListId,
        listTitle: "To Do"
      }
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addCard"],
      payload: {
        listId: firstListId,
        cardId: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
        cardText: "Helpdesk Call AA999",
        commentCount: 1,
        completedTaskCount: 1,
        taskCount: 3
      }
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addCard"],
      payload: {
        listId: firstListId,
        cardId: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
        cardText: "Helpdesk Call BB999"
      }
    });
    console.log("Insert second list");
    var secondListId = shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate();
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addList"],
      payload: {
        listId: secondListId,
        listTitle: "Development"
      }
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addCard"],
      payload: {
        listId: secondListId,
        cardId: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
        cardText: "Help Desk Call CC999",
        likeCount: 1,
        status: "red"
      }
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addCard"],
      payload: {
        listId: secondListId,
        cardId: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
        cardText: "Help Desk Call DD999"
      }
    });
    var thirdListId = shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate();
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addList"],
      payload: {
        listId: thirdListId,
        listTitle: "Testing"
      }
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addCard"],
      payload: {
        listId: thirdListId,
        cardId: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
        cardText: "Help Desk Call EE999",
        status: "red"
      }
    });
    var fourthListId = shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate();
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addList"],
      payload: {
        listId: fourthListId,
        listTitle: "Done"
      }
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addCard"],
      payload: {
        listId: fourthListId,
        cardId: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
        cardText: "Help Desk Call FF999",
        status: "blue"
      }
    });
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["addCard"],
      payload: {
        listId: fourthListId,
        cardId: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
        cardText: "Help Desk Call GG999",
        status: "red"
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _myState$board, _myState$board$lists;

    //if (!loaded) reload();
    if ((myState === null || myState === void 0 ? void 0 : (_myState$board = myState.board) === null || _myState$board === void 0 ? void 0 : (_myState$board$lists = _myState$board.lists) === null || _myState$board$lists === void 0 ? void 0 : _myState$board$lists.length) > 0) return;
    seed();
  }, []);
  /* useEffect(() => {
  	console.log("myState", myState);
  }, [myState]); */

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 4
    }
  }), __jsx(_components_SignUpForFree__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 4
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 6
    }
  }, __jsx(_components_KanBanMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 6
    }
  }, __jsx(_components_Board__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  })))));
}

_s(ThingsPage, "xQMjODly1Rqv/F0025BfTbmXNhE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = ThingsPage;

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "blue" : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className;
  var button_class = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])("flex flex-row items-center font-bold px-2 py-1 rounded gap-2 cursor-pointer", "bg-".concat(color, "-600 hover:bg-").concat(color, "-700 text-").concat(color, "-100"), className);
  return __jsx("a", {
    className: button_class,
    onClick: onClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 3
    }
  }, children);
};

_c2 = Button;

var Loading = function Loading() {
  return __jsx("div", {
    className: "p-8 bg-blue-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 2
    }
  }, __jsx(_components_loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "bg-blue-200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 3
    }
  }));
};

_c3 = Loading;

var Error = function Error(_ref2) {
  var error = _ref2.error;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 2
    }
  }, __jsx("p", {
    className: "p-8 bg-red-100 text-red-800 font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 3
    }
  }, __jsx(heroicons_react__WEBPACK_IMPORTED_MODULE_2__["Exclamation"], {
    size: 16,
    className: "inline-block mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 4
    }
  }), error.message), DEBUG && error.stack && __jsx("pre", {
    className: "w-full overflow-x-scroll text-xs bg-red-200 text-red-800 p-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 4
    }
  }, error.stack));
};

_c4 = Error;

var ThingsList = function ThingsList(_ref3) {
  var things = _ref3.things;
  return __jsx("div", {
    className: "divide-y",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 2
    }
  }, things.map(function (thing) {
    return __jsx(ThingItem, {
      thing: thing,
      key: thing.word,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 4
      }
    });
  }));
};

_c5 = ThingsList;

var ThingItem = function ThingItem(_ref4) {
  var thing = _ref4.thing;
  return __jsx("div", {
    className: "p-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 2
    }
  }, __jsx("div", {
    className: "flex flex-row gap-2 items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: "text-xl font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 4
    }
  }, thing.word), __jsx("p", {
    className: "italic text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 4
    }
  }, thing.pronounciation)), __jsx("p", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 3
    }
  }, thing.definition));
};

_c6 = ThingItem;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ThingsPage");
$RefreshReg$(_c2, "Button");
$RefreshReg$(_c3, "Loading");
$RefreshReg$(_c4, "Error");
$RefreshReg$(_c5, "ThingsList");
$RefreshReg$(_c6, "ThingItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkRFQlVHIiwiVGhpbmdzUGFnZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0aGluZ3NfcGFnZSIsImxvYWRpbmciLCJsb2FkZWQiLCJhZGRpbmciLCJ0aGluZ3MiLCJlcnJvciIsIm15U3RhdGUiLCJnZXRJdGVtcyIsImNvdW50IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwidiIsImsiLCJtYXAiLCJpZCIsImNvbnRlbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwic2VlZCIsImZpcnN0TGlzdElkIiwic2hvcnRpZCIsImdlbmVyYXRlIiwidHlwZSIsImFjdGlvbnMiLCJwYXlsb2FkIiwibGlzdElkIiwibGlzdFRpdGxlIiwiY2FyZElkIiwiY2FyZFRleHQiLCJjb21tZW50Q291bnQiLCJjb21wbGV0ZWRUYXNrQ291bnQiLCJ0YXNrQ291bnQiLCJjb25zb2xlIiwibG9nIiwic2Vjb25kTGlzdElkIiwibGlrZUNvdW50Iiwic3RhdHVzIiwidGhpcmRMaXN0SWQiLCJmb3VydGhMaXN0SWQiLCJ1c2VFZmZlY3QiLCJib2FyZCIsImxpc3RzIiwiQnV0dG9uIiwib25DbGljayIsImNoaWxkcmVuIiwiY29sb3IiLCJjbGFzc05hbWUiLCJidXR0b25fY2xhc3MiLCJjbHN4IiwiTG9hZGluZyIsIkVycm9yIiwibWVzc2FnZSIsInN0YWNrIiwiVGhpbmdzTGlzdCIsInRoaW5nIiwid29yZCIsIlRoaW5nSXRlbSIsInByb25vdW5jaWF0aW9uIiwiZGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxLQUFLLEdBQUcsSUFBZDtBQUVBO0FBQ0E7QUFDQTtB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VUFBM0IsQ0FMRCxDQURpQjtBQUFBLENBQWxCOztNQUFNRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNmNWRlOTM1NjdjMmU5Zjc2NzA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCAqIGFzIEljb25zIGZyb20gXCJoZXJvaWNvbnMtcmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB0aGluZ3NMb2FkLCB0aGluZ0FkZCwgRU5EIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHJlZHV4V3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZS93cmFwcGVyXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFN0YXRlLCBUaGluZyB9IGZyb20gXCIuLi9zdG9yZS90eXBlc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXJcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi4vbGliL2xvZ1wiO1xuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlLCBEcmFnZ2FibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0JvYXJkXCI7XG5pbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBTaWduVXBGb3JGcmVlIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25VcEZvckZyZWVcIjtcbmltcG9ydCBLYW5CYW5NZW51IGZyb20gXCIuLi9jb21wb25lbnRzL0thbkJhbk1lbnVcIjtcbmNvbnN0IERFQlVHID0gdHJ1ZTtcblxuLyogZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHJlZHV4V3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXG5cdGFzeW5jICh7IHN0b3JlLCBxdWVyeSB9KSA9PiB7XG5cdFx0aWYgKHF1ZXJ5LnByZWxvYWQpIHtcblx0XHRcdGxvZy5pbmZvKFwicHJlbG9hZGluZz9cIik7XG5cdFx0XHRzdG9yZS5kaXNwYXRjaCh0aGluZ3NMb2FkKCkpO1xuXHRcdFx0c3RvcmUuZGlzcGF0Y2goRU5EKTtcblx0XHRcdGF3YWl0IHN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xuXHRcdH1cblx0fVxuKTsgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhpbmdzUGFnZSgpIHtcblx0Y29uc3QgeyBsb2FkaW5nLCBsb2FkZWQsIGFkZGluZywgdGhpbmdzLCBlcnJvciB9ID0gdXNlU2VsZWN0b3IoXG5cdFx0KHN0YXRlOiBhbnkpID0+IHN0YXRlLnRoaW5nc19wYWdlXG5cdCk7XG5cblx0Y29uc3QgbXlTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG5cdGNvbnN0IGdldEl0ZW1zID0gKGNvdW50KSA9PlxuXHRcdEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sICh2LCBrKSA9PiBrKS5tYXAoKGspID0+ICh7XG5cdFx0XHRpZDogYGl0ZW0tJHtrfWAsXG5cdFx0XHRjb250ZW50OiBgaXRlbSAke2t9YCxcblx0XHR9KSk7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShnZXRJdGVtcyg2KSk7XG5cdC8vY29uc3QgcmVsb2FkID0gKCkgPT4gZGlzcGF0Y2godGhpbmdzTG9hZCgpKTtcblxuXHRjb25zdCBzZWVkID0gKCkgPT4ge1xuXHRcdGNvbnN0IGZpcnN0TGlzdElkID0gc2hvcnRpZC5nZW5lcmF0ZSgpO1xuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogYWN0aW9ucy5hZGRMaXN0LFxuXHRcdFx0cGF5bG9hZDogeyBsaXN0SWQ6IGZpcnN0TGlzdElkLCBsaXN0VGl0bGU6IFwiVG8gRG9cIiB9LFxuXHRcdH0pO1xuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogYWN0aW9ucy5hZGRDYXJkLFxuXHRcdFx0cGF5bG9hZDoge1xuXHRcdFx0XHRsaXN0SWQ6IGZpcnN0TGlzdElkLFxuXHRcdFx0XHRjYXJkSWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcblx0XHRcdFx0Y2FyZFRleHQ6IFwiSGVscGRlc2sgQ2FsbCBBQTk5OVwiLFxuXHRcdFx0XHRjb21tZW50Q291bnQ6IDEsXG5cdFx0XHRcdGNvbXBsZXRlZFRhc2tDb3VudDogMSxcblx0XHRcdFx0dGFza0NvdW50OiAzLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IGFjdGlvbnMuYWRkQ2FyZCxcblx0XHRcdHBheWxvYWQ6IHtcblx0XHRcdFx0bGlzdElkOiBmaXJzdExpc3RJZCxcblx0XHRcdFx0Y2FyZElkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG5cdFx0XHRcdGNhcmRUZXh0OiBcIkhlbHBkZXNrIENhbGwgQkI5OTlcIixcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zb2xlLmxvZyhcIkluc2VydCBzZWNvbmQgbGlzdFwiKTtcblx0XHRjb25zdCBzZWNvbmRMaXN0SWQgPSBzaG9ydGlkLmdlbmVyYXRlKCk7XG5cblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBhY3Rpb25zLmFkZExpc3QsXG5cdFx0XHRwYXlsb2FkOiB7IGxpc3RJZDogc2Vjb25kTGlzdElkLCBsaXN0VGl0bGU6IFwiRGV2ZWxvcG1lbnRcIiB9LFxuXHRcdH0pO1xuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogYWN0aW9ucy5hZGRDYXJkLFxuXHRcdFx0cGF5bG9hZDoge1xuXHRcdFx0XHRsaXN0SWQ6IHNlY29uZExpc3RJZCxcblx0XHRcdFx0Y2FyZElkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG5cdFx0XHRcdGNhcmRUZXh0OiBcIkhlbHAgRGVzayBDYWxsIENDOTk5XCIsXG5cdFx0XHRcdGxpa2VDb3VudDogMSxcblx0XHRcdFx0c3RhdHVzOiBcInJlZFwiLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IGFjdGlvbnMuYWRkQ2FyZCxcblx0XHRcdHBheWxvYWQ6IHtcblx0XHRcdFx0bGlzdElkOiBzZWNvbmRMaXN0SWQsXG5cdFx0XHRcdGNhcmRJZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuXHRcdFx0XHRjYXJkVGV4dDogXCJIZWxwIERlc2sgQ2FsbCBERDk5OVwiLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHRoaXJkTGlzdElkID0gc2hvcnRpZC5nZW5lcmF0ZSgpO1xuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogYWN0aW9ucy5hZGRMaXN0LFxuXHRcdFx0cGF5bG9hZDogeyBsaXN0SWQ6IHRoaXJkTGlzdElkLCBsaXN0VGl0bGU6IFwiVGVzdGluZ1wiIH0sXG5cdFx0fSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogYWN0aW9ucy5hZGRDYXJkLFxuXHRcdFx0cGF5bG9hZDoge1xuXHRcdFx0XHRsaXN0SWQ6IHRoaXJkTGlzdElkLFxuXHRcdFx0XHRjYXJkSWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcblx0XHRcdFx0Y2FyZFRleHQ6IFwiSGVscCBEZXNrIENhbGwgRUU5OTlcIixcblx0XHRcdFx0c3RhdHVzOiBcInJlZFwiLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGZvdXJ0aExpc3RJZCA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IGFjdGlvbnMuYWRkTGlzdCxcblx0XHRcdHBheWxvYWQ6IHsgbGlzdElkOiBmb3VydGhMaXN0SWQsIGxpc3RUaXRsZTogXCJEb25lXCIgfSxcblx0XHR9KTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBhY3Rpb25zLmFkZENhcmQsXG5cdFx0XHRwYXlsb2FkOiB7XG5cdFx0XHRcdGxpc3RJZDogZm91cnRoTGlzdElkLFxuXHRcdFx0XHRjYXJkSWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcblx0XHRcdFx0Y2FyZFRleHQ6IFwiSGVscCBEZXNrIENhbGwgRkY5OTlcIixcblx0XHRcdFx0c3RhdHVzOiBcImJsdWVcIixcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogYWN0aW9ucy5hZGRDYXJkLFxuXHRcdFx0cGF5bG9hZDoge1xuXHRcdFx0XHRsaXN0SWQ6IGZvdXJ0aExpc3RJZCxcblx0XHRcdFx0Y2FyZElkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG5cdFx0XHRcdGNhcmRUZXh0OiBcIkhlbHAgRGVzayBDYWxsIEdHOTk5XCIsXG5cdFx0XHRcdHN0YXR1czogXCJyZWRcIixcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvL2lmICghbG9hZGVkKSByZWxvYWQoKTtcblx0XHRpZiAobXlTdGF0ZT8uYm9hcmQ/Lmxpc3RzPy5sZW5ndGggPiAwKSByZXR1cm47XG5cdFx0c2VlZCgpO1xuXHR9LCBbXSk7XG5cblx0LyogdXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIm15U3RhdGVcIiwgbXlTdGF0ZSk7XG5cdH0sIFtteVN0YXRlXSk7ICovXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PE5hdkJhciAvPlxuXHRcdFx0PFNpZ25VcEZvckZyZWUgLz5cblx0XHRcdDxDb250YWluZXIgZmx1aWQ+XG5cdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0PENvbCB4cz17MTJ9PlxuXHRcdFx0XHRcdFx0PEthbkJhbk1lbnUgLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIHhzPXsxMn0+XG5cdFx0XHRcdFx0XHQ8Qm9hcmQgLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgQnV0dG9uID0gKHsgb25DbGljaywgY2hpbGRyZW4sIGNvbG9yID0gXCJibHVlXCIsIGNsYXNzTmFtZSA9IG51bGwgfSkgPT4ge1xuXHRjb25zdCBidXR0b25fY2xhc3MgPSBjbHN4KFxuXHRcdFwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZm9udC1ib2xkIHB4LTIgcHktMSByb3VuZGVkIGdhcC0yIGN1cnNvci1wb2ludGVyXCIsXG5cdFx0YGJnLSR7Y29sb3J9LTYwMCBob3ZlcjpiZy0ke2NvbG9yfS03MDAgdGV4dC0ke2NvbG9yfS0xMDBgLFxuXHRcdGNsYXNzTmFtZVxuXHQpO1xuXHRyZXR1cm4gKFxuXHRcdDxhIGNsYXNzTmFtZT17YnV0dG9uX2NsYXNzfSBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2E+XG5cdCk7XG59O1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInAtOCBiZy1ibHVlLTEwMFwiPlxuXHRcdDxMb2FkZXIgY29sb3I9XCJiZy1ibHVlLTIwMFwiIC8+XG5cdDwvZGl2PlxuKTtcblxuY29uc3QgRXJyb3IgPSAoeyBlcnJvciB9KSA9PiAoXG5cdDxkaXY+XG5cdFx0PHAgY2xhc3NOYW1lPVwicC04IGJnLXJlZC0xMDAgdGV4dC1yZWQtODAwIGZvbnQtYm9sZFwiPlxuXHRcdFx0PEljb25zLkV4Y2xhbWF0aW9uIHNpemU9ezE2fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXItMlwiIC8+XG5cdFx0XHR7ZXJyb3IubWVzc2FnZX1cblx0XHQ8L3A+XG5cdFx0e0RFQlVHICYmIGVycm9yLnN0YWNrICYmIChcblx0XHRcdDxwcmUgY2xhc3NOYW1lPVwidy1mdWxsIG92ZXJmbG93LXgtc2Nyb2xsIHRleHQteHMgYmctcmVkLTIwMCB0ZXh0LXJlZC04MDAgcC04XCI+XG5cdFx0XHRcdHtlcnJvci5zdGFja31cblx0XHRcdDwvcHJlPlxuXHRcdCl9XG5cdDwvZGl2PlxuKTtcblxuY29uc3QgVGhpbmdzTGlzdCA9ICh7IHRoaW5ncyB9OiB7IHRoaW5nczogVGhpbmdbXSB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXlcIj5cblx0XHR7dGhpbmdzLm1hcCgodGhpbmcpID0+IChcblx0XHRcdDxUaGluZ0l0ZW0gdGhpbmc9e3RoaW5nfSBrZXk9e3RoaW5nLndvcmR9IC8+XG5cdFx0KSl9XG5cdDwvZGl2PlxuKTtcblxuY29uc3QgVGhpbmdJdGVtID0gKHsgdGhpbmcgfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPnt0aGluZy53b3JkfTwvaDI+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPnt0aGluZy5wcm9ub3VuY2lhdGlvbn08L3A+XG5cdFx0PC9kaXY+XG5cdFx0PHAgY2xhc3NOYW1lPVwibXQtMlwiPnt0aGluZy5kZWZpbml0aW9ufTwvcD5cblx0PC9kaXY+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==