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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ThingsPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "heroicons-react"
var external_heroicons_react_ = __webpack_require__("a/YO");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ./store/actions.ts
var actions = __webpack_require__("hS+w");

// EXTERNAL MODULE: ./store/wrapper.ts + 4 modules
var wrapper = __webpack_require__("eKhT");

// CONCATENATED MODULE: ./components/loader.tsx

var __jsx = external_react_default.a.createElement;
function Loader({
  color = "bg-white"
}) {
  return __jsx("div", {
    className: "loader flex flex-row gap-2 justify-center items-center"
  }, __jsx(Dot, {
    color: color
  }), __jsx(Dot, {
    color: color
  }), __jsx(Dot, {
    color: color
  }));
}

function Dot({
  color
}) {
  return __jsx("div", {
    className: `dot rounded-full ${color} h-3 w-3`
  });
}
// EXTERNAL MODULE: ./lib/log.ts
var log = __webpack_require__("rHuN");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__("uzjx");

// EXTERNAL MODULE: external "shortid"
var external_shortid_ = __webpack_require__("2WPw");
var external_shortid_default = /*#__PURE__*/__webpack_require__.n(external_shortid_);

// EXTERNAL MODULE: external "react-textarea-autosize"
var external_react_textarea_autosize_ = __webpack_require__("TOz4");
var external_react_textarea_autosize_default = /*#__PURE__*/__webpack_require__.n(external_react_textarea_autosize_);

// CONCATENATED MODULE: ./components/EditButtons.tsx
var EditButtons_jsx = external_react_default.a.createElement;


function EditButtons({
  handleSave,
  saveLabel,
  handleDelete,
  handleCancel
}) {
  return EditButtons_jsx("div", {
    className: "Edit-Buttons"
  }, EditButtons_jsx("div", {
    tabIndex: 0,
    className: "Edit-Button",
    style: {
      backgroundColor: "#5aac44"
    },
    onClick: handleSave
  }, saveLabel), handleDelete && EditButtons_jsx("div", {
    tabIndex: 0,
    className: "Edit-Button",
    style: {
      backgroundColor: "#EA2525",
      marginLeft: 0
    },
    onClick: handleDelete
  }, "Delete"), EditButtons_jsx("div", {
    tabIndex: 0,
    className: "Edit-Button-Cancel",
    onClick: handleCancel
  }, "\xD7"));
}

/* harmony default export */ var components_EditButtons = (EditButtons);
// CONCATENATED MODULE: ./components/CardEditor.tsx
var CardEditor_jsx = external_react_default.a.createElement;




function CardEditor(props) {
  const {
    text,
    onSave,
    onDelete,
    onCancel,
    adding
  } = props;
  const {
    0: textState,
    1: setTextState
  } = Object(external_react_["useState"])(text);

  const handleChangeText = event => setTextState(event.target.value);

  const onEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSave(textState);
    }
  };

  return CardEditor_jsx("div", {
    className: "Edit-Card"
  }, CardEditor_jsx("div", {
    className: "Card"
  }, CardEditor_jsx(external_react_textarea_autosize_default.a, {
    autoFocus: true,
    className: "Edit-Card-Textarea",
    placeholder: "Enter the text for this card...",
    value: textState,
    onChange: handleChangeText,
    onKeyDown: onEnter
  })), CardEditor_jsx(components_EditButtons, {
    handleSave: () => onSave(textState),
    saveLabel: adding ? "Add card" : "Save",
    handleDelete: onDelete,
    handleCancel: onCancel
  }));
}

/* harmony default export */ var components_CardEditor = (CardEditor);
// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__("2FnJ");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__("eRny");

// EXTERNAL MODULE: ./components/styles/Card.module.scss
var Card_module = __webpack_require__("t6KM");
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);

// CONCATENATED MODULE: ./components/Card.tsx
var Card_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












function Card(props) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    cardsById
  } = Object(external_react_redux_["useSelector"])(state => state);
  const {
    cardId,
    index,
    listId
  } = props;
  const card = cardsById[props.cardId];
  const {
    0: hover,
    1: setHover
  } = Object(external_react_["useState"])(false);
  const {
    0: editing,
    1: setEditing
  } = Object(external_react_["useState"])(false);
  const {
    0: text,
    1: setText
  } = Object(external_react_["useState"])("");

  const startEditing = () => {
    setEditing(true);
    setText(props.text);
    setHover(false);
  };

  const endEditing = () => {
    setEditing(false);
    setHover(false);
  };

  const startHover = () => setHover(true);

  const endHover = () => setHover(false);

  const editCard = async text => {
    endEditing();
    dispatch({
      type: actions["d" /* changeCardText */],
      payload: {
        cardId: card._id,
        cardText: text
      }
    });
  };

  const deleteCard = async () => {
    if (window.confirm("Are you sure to delete this card?")) {
      dispatch({
        type: actions["f" /* deleteCard */],
        payload: {
          cardId: card._id,
          listId
        }
      });
    }
  };

  if (!editing) {
    return Card_jsx(external_react_beautiful_dnd_["Draggable"], {
      draggableId: card._id,
      index: index
    }, (provided, snapshot) => Card_jsx("div", _extends({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps, {
      className: "Card",
      onMouseEnter: startHover,
      onMouseLeave: endHover
    }), hover && Card_jsx("div", {
      className: "Card-Icons"
    }, Card_jsx("div", {
      className: "Card-Icon",
      onClick: startEditing
    }, Card_jsx(ti_["TiEdit"], null))), Card_jsx("div", {
      className: `Card-Status ${card.status && card.status == "red" ? "red" : ""}`
    }), card.text, Card_jsx("div", {
      className: Card_module_default.a["card-activities"]
    }, card.commentCount && Card_jsx("div", {
      className: Card_module_default.a["activity"]
    }, Card_jsx("div", {
      className: Card_module_default.a["activity-icon"]
    }, Card_jsx(fa_["FaRegComment"], null)), Card_jsx("div", {
      className: Card_module_default.a["activity-content"]
    }, card.commentCount)), card.taskCount && Card_jsx("div", {
      className: Card_module_default.a["activity"]
    }, Card_jsx("div", {
      className: Card_module_default.a["activity-icon"]
    }, Card_jsx(io_["IoMdCheckboxOutline"], null)), Card_jsx("div", {
      className: Card_module_default.a["activity-content"]
    }, `${card.completedTaskCount}/${card.taskCount}`)), card.likeCount && Card_jsx("div", {
      className: Card_module_default.a["activity"]
    }, Card_jsx("div", {
      className: Card_module_default.a["activity-icon"]
    }, Card_jsx(bi_["BiLike"], null)), Card_jsx("div", {
      className: Card_module_default.a["activity-content"]
    }, card.likeCount)))));
  } else {
    return Card_jsx(external_react_default.a.Fragment, null, Card_jsx(components_CardEditor, {
      text: card.text,
      onSave: editCard,
      onDelete: deleteCard,
      onCancel: endEditing
    }));
  }
}

/* harmony default export */ var components_Card = (Card);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// CONCATENATED MODULE: ./components/ListEditor.tsx
var ListEditor_jsx = external_react_default.a.createElement;




function ListEditor({
  list,
  title,
  handleChangeTitle,
  onClickOutside,
  saveList,
  deleteList
}) {
  const ref = Object(external_react_["useRef"])(null);

  const onEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      saveList();
    }
  };

  Object(external_react_["useEffect"])(() => {
    document.addEventListener("click", handleClick, false);
    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  }, []);

  const handleClick = e => {
    const node = ref.current;

    if (node.contains(e.target)) {
      return;
    }

    onClickOutside();
  };

  return ListEditor_jsx("div", {
    className: "List-Title-Edit",
    ref: ref
  }, ListEditor_jsx(external_react_textarea_autosize_default.a, {
    autoFocus: true,
    className: "List-Title-Textarea",
    placeholder: "Enter list title...",
    value: title,
    onChange: handleChangeTitle,
    onKeyDown: onEnter,
    style: {
      width: deleteList !== undefined ? 220 : 245
    }
  }), deleteList && ListEditor_jsx("span", {
    onClick: deleteList
  }, ListEditor_jsx(md_["MdDeleteOutline"], null)));
}

/* harmony default export */ var components_ListEditor = (ListEditor);
// CONCATENATED MODULE: ./components/List.tsx
var List_jsx = external_react_default.a.createElement;

function List_extends() { List_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return List_extends.apply(this, arguments); }









function List(props) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    board,
    cardsById,
    listsById
  } = Object(external_react_redux_["useSelector"])(state => state);
  const {
    listId,
    index
  } = props;
  const list = listsById[listId];
  const {
    0: editingTitle,
    1: setEditingTitle
  } = Object(external_react_["useState"])(false);
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])(list.title);
  const {
    0: addingCard,
    1: setAddingCard
  } = Object(external_react_["useState"])(false);

  const toggleAddingCard = () => {
    setAddingCard(!addingCard);
  };

  const toggleEditingTitle = () => {
    setEditingTitle(!editingTitle);
  };

  const handleChangeTitle = e => setTitle(e.target.value);

  const editListTitle = async () => {
    toggleEditingTitle();
    dispatch({
      type: actions["e" /* changeListTitle */],
      payload: {
        listId,
        listTitle: title
      }
    });
  };

  const deleteList = async () => {
    if (window.confirm("Are you sure to delete this list?")) {
      dispatch({
        type: actions["g" /* deleteList */],
        payload: {
          listId,
          cards: list.cards
        }
      });
    }
  };

  const addCard = async cardText => {
    toggleAddingCard();
    const cardId = external_shortid_default.a.generate();
    dispatch({
      type: actions["b" /* addCard */],
      payload: {
        cardText,
        cardId,
        listId
      }
    });
  };

  return List_jsx(external_react_beautiful_dnd_["Draggable"], {
    draggableId: list._id,
    index: index
  }, (provided, snapshot) => List_jsx("div", List_extends({
    ref: provided.innerRef
  }, provided.draggableProps, provided.dragHandleProps, {
    className: "List"
  }), editingTitle ? List_jsx(components_ListEditor, {
    list: list,
    title: title,
    handleChangeTitle: handleChangeTitle,
    saveList: editListTitle,
    onClickOutside: editListTitle,
    deleteList: deleteList
  }) : List_jsx("div", {
    className: "List-Title",
    onClick: toggleEditingTitle
  }, list.title), List_jsx(external_react_beautiful_dnd_["Droppable"], {
    droppableId: list._id
  }, (provided, _snapshot) => List_jsx("div", {
    ref: provided.innerRef,
    className: "Lists-Cards"
  }, list.cards && list.cards.map((cardId, index) => List_jsx(components_Card, {
    key: cardId,
    cardId: cardId,
    index: index,
    listId: list._id
  })), provided.placeholder, addingCard ? List_jsx(components_CardEditor, {
    onSave: addCard,
    onCancel: toggleAddingCard,
    adding: true
  }) : List_jsx("div", {
    className: "Toggle-Add-Card",
    onClick: toggleAddingCard
  }, "+ Add a card")))));
}
// CONCATENATED MODULE: ./components/AddList.tsx
var AddList_jsx = external_react_default.a.createElement;







function AddList({
  toggleAddingList
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])("");

  const handleChangeTitle = e => setTitle(e.target.value);

  const createList = async () => {
    toggleAddingList();
    dispatch({
      type: actions["c" /* addList */],
      payload: {
        listId: external_shortid_default.a.generate(),
        listTitle: title
      }
    });
  };

  return AddList_jsx("div", {
    className: "Add-List-Editor"
  }, AddList_jsx(components_ListEditor, {
    title: title,
    handleChangeTitle: handleChangeTitle,
    onClickOutside: toggleAddingList,
    saveList: createList,
    deleteList: undefined,
    list: undefined
  }), AddList_jsx(components_EditButtons, {
    handleSave: createList,
    saveLabel: "Add list",
    handleCancel: toggleAddingList,
    handleDelete: undefined
  }));
}

/* harmony default export */ var components_AddList = (AddList);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./styled-components/BoardStyled.ts

const BoardStyled = external_styled_components_default.a.div`
	.Board {
		height: 92%;
		display: flex;
		overflow-x: auto;
	}
	.Add-List {
		width: 272px;
		margin: 10px;
		flex-shrink: 0;
	}

	.Add-List-Button {
		background-color: rgba(0, 0, 0, 0.12);
		border-radius: 3px;
		cursor: pointer;
		color: #fff;
		display: flex;
		align-items: center;
		min-height: 32px;
		padding: 5px 8px;
		transition: background-color 85ms ease-in, opacity 40ms ease-in,
			border-color 85ms ease-in;
		height: fit-content;
	}

	.Add-List-Button:hover {
		background-color: rgba(0, 0, 0, 0.24);
	}

	.Add-List-Button ion-icon {
		margin-right: 1px;
	}
`;
/* harmony default export */ var styled_components_BoardStyled = (BoardStyled);
// CONCATENATED MODULE: ./components/Board.tsx
var Board_jsx = external_react_default.a.createElement;
//import styles from "./Board.css";









function Board(props) {
  const styles = {
    board: {
      height: "92%",
      display: "flex",
      overflowX: "auto"
    }
  };
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const firstListId = external_shortid_default.a.generate();
  const {
    board,
    cardsById,
    listsById
  } = Object(external_react_redux_["useSelector"])(state => state); // const { board } = store;

  const {
    0: addingList,
    1: setAddingList
  } = Object(external_react_["useState"])(false);

  const toggleAddingList = () => {
    setAddingList(!addingList);
  };

  const handleDragEnd = ({
    source,
    destination,
    type
  }) => {
    if (!destination) {
      return;
    } // Move list


    if (type === "COLUMN") {
      // Prevent update if nothing has changed
      if (source.index !== destination.index) {
        dispatch({
          type: actions["i" /* moveList */],
          payload: {
            oldListIndex: source.index,
            newListIndex: destination.index
          }
        });
      }

      return;
    } // Move card


    if (source.index !== destination.index || source.droppableId !== destination.droppableId) {
      dispatch({
        type: actions["h" /* moveCard */],
        payload: {
          sourceListId: source.droppableId,
          destListId: destination.droppableId,
          oldCardIndex: source.index,
          newCardIndex: destination.index
        }
      });
    }
  };

  Object(external_react_["useEffect"])(() => {
    console.log("board", board, cardsById, listsById);
  }, [board]);
  return Board_jsx(styled_components_BoardStyled, null, Board_jsx(external_react_beautiful_dnd_["DragDropContext"], {
    onDragEnd: handleDragEnd
  }, Board_jsx(external_react_beautiful_dnd_["Droppable"], {
    droppableId: "board",
    direction: "horizontal",
    type: "COLUMN"
  }, (provided, _snapshot) => Board_jsx("div", {
    className: "Board",
    ref: provided.innerRef
  }, board === null || board === void 0 ? void 0 : board.lists.map((listId, index) => {
    return Board_jsx(external_react_default.a.Fragment, null, Board_jsx(List, {
      listId: listId,
      key: listId,
      index: index
    }));
  }), provided.placeholder, Board_jsx("div", {
    className: "Add-List"
  }, addingList ? Board_jsx(components_AddList, {
    toggleAddingList: toggleAddingList
  }) : Board_jsx("div", {
    onClick: toggleAddingList,
    className: "Add-List-Button"
  }, "+ Add a list"))))));
}

/* harmony default export */ var components_Board = (Board);
// EXTERNAL MODULE: ./components/styles/SideMenu.module.scss
var SideMenu_module = __webpack_require__("zUYm");
var SideMenu_module_default = /*#__PURE__*/__webpack_require__.n(SideMenu_module);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__("7v8O");

// CONCATENATED MODULE: ./components/SideMenu.tsx
var SideMenu_jsx = external_react_default.a.createElement;







function SideMenu({
  closeMenu,
  showMenu
}) {
  return SideMenu_jsx(external_react_default.a.Fragment, null, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a["side-menu"]} ${showMenu ? SideMenu_module_default.a["open"] : ""}`
  }, SideMenu_jsx("div", {
    className: SideMenu_module_default.a["side-menu__header"]
  }, SideMenu_jsx("div", {
    className: SideMenu_module_default.a["side-menu__header-logo"]
  }, "Menu"), SideMenu_jsx("span", {
    className: SideMenu_module_default.a["side-menu__close"],
    onClick: closeMenu
  }, "\xD7")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a["hr"]
  }), SideMenu_jsx("div", {
    className: SideMenu_module_default.a["side-menu__content"]
  }, SideMenu_jsx(external_react_bootstrap_["Row"], {
    className: SideMenu_module_default.a["menu-item-container"]
  }, SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: SideMenu_module_default.a.item
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx(fa_["FaTrello"], null)), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "About this board"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: SideMenu_module_default.a.item
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx(fi_["FiMoreHorizontal"], null)), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "More")))), SideMenu_jsx("div", {
    className: SideMenu_module_default.a["hr"]
  }), SideMenu_jsx(external_react_bootstrap_["Row"], {
    className: SideMenu_module_default.a["menu-item-container"]
  }, SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: SideMenu_module_default.a.item
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx(bs_["BsListUl"], null)), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Activity"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "made this board visible to the public", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM"))), SideMenu_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: `${SideMenu_module_default.a.item} ${SideMenu_module_default.a["sub-item"]}`
  }, SideMenu_jsx("div", {
    className: `${SideMenu_module_default.a.icon}`
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.rounded
  }, "AH")), SideMenu_jsx("div", {
    className: SideMenu_module_default.a.text
  }, SideMenu_jsx("span", {
    className: SideMenu_module_default.a.bold
  }, "Andrew Hyde", " "), "added", " ", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.underline
  }, "Helpdesk Call EE999"), " ", "to Development", SideMenu_jsx("span", {
    className: SideMenu_module_default.a.timestamp
  }, "Mar 12, 2020 at 8:51 PM")))))));
}

/* harmony default export */ var components_SideMenu = (SideMenu);
// EXTERNAL MODULE: ./components/styles/NavBar.module.scss
var NavBar_module = __webpack_require__("7QO1");
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);

// CONCATENATED MODULE: ./components/NavBar.tsx
var NavBar_jsx = external_react_default.a.createElement;





function NavBar() {
  const {
    0: showMenu,
    1: setShowMenu
  } = Object(external_react_["useState"])(false);

  const closeMenu = () => setShowMenu(false);

  return NavBar_jsx(external_react_default.a.Fragment, null, NavBar_jsx("div", {
    className: NavBar_module_default.a["nav-bar"]
  }, NavBar_jsx(external_react_bootstrap_["Col"], {
    className: NavBar_module_default.a["menu-item"],
    md: 3
  }, NavBar_jsx("a", {
    href: "/"
  }, "Home"), NavBar_jsx("a", {
    href: "/"
  }, "Tour"), NavBar_jsx("a", {
    href: "/"
  }, "Blog")), NavBar_jsx(external_react_bootstrap_["Col"], {
    className: NavBar_module_default.a["logo"],
    md: 6
  }, NavBar_jsx("a", {
    href: "/"
  }, NavBar_jsx("img", {
    src: "../assets/trello.gif"
  }))), NavBar_jsx(external_react_bootstrap_["Col"], {
    className: NavBar_module_default.a["registration"],
    md: 3
  }, NavBar_jsx("a", {
    href: "#",
    className: `btn btn-success ${NavBar_module_default.a["btn-custom-success"]}`
  }, "Sign up"), NavBar_jsx("a", {
    href: "#",
    className: `btn btn-primary ${NavBar_module_default.a["btn-custom-primary"]}`
  }, "Log in")), NavBar_jsx(components_SideMenu, {
    closeMenu: closeMenu,
    showMenu: showMenu
  })));
}

/* harmony default export */ var components_NavBar = (NavBar);
// EXTERNAL MODULE: ./components/styles/SignUpForFree.module.scss
var SignUpForFree_module = __webpack_require__("GBly");
var SignUpForFree_module_default = /*#__PURE__*/__webpack_require__.n(SignUpForFree_module);

// CONCATENATED MODULE: ./components/SignUpForFree.tsx
var SignUpForFree_jsx = external_react_default.a.createElement;



function SignUpForFree() {
  return SignUpForFree_jsx(external_react_default.a.Fragment, null, SignUpForFree_jsx("div", {
    className: `${SignUpForFree_module_default.a["sign-up-for-free-container"]} ${SignUpForFree_module_default.a["mod-warning"]}`
  }, SignUpForFree_jsx("span", null, "Visually collaborate with anyone, anywhere."), SignUpForFree_jsx("a", {
    href: "#",
    className: `btn ${SignUpForFree_module_default.a["btn-custom-primary"]}`
  }, "Sign up for free")));
}

/* harmony default export */ var components_SignUpForFree = (SignUpForFree);
// EXTERNAL MODULE: ./components/styles/Pipe.module.scss
var Pipe_module = __webpack_require__("7IFt");
var Pipe_module_default = /*#__PURE__*/__webpack_require__.n(Pipe_module);

// CONCATENATED MODULE: ./components/Pipe.tsx
var Pipe_jsx = external_react_default.a.createElement;



function Pipe() {
  return Pipe_jsx("div", {
    className: Pipe_module_default.a.pipe
  });
}

/* harmony default export */ var components_Pipe = (Pipe);
// EXTERNAL MODULE: ./components/styles/KanBanMenu.module.scss
var KanBanMenu_module = __webpack_require__("mNS/");
var KanBanMenu_module_default = /*#__PURE__*/__webpack_require__.n(KanBanMenu_module);

// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__("9yvl");

// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__("qEf8");

// CONCATENATED MODULE: ./components/KanBanMenu.tsx
var KanBanMenu_jsx = external_react_default.a.createElement;









function KanBanMenu() {
  const {
    0: showMenu,
    1: setShowMenu
  } = Object(external_react_["useState"])(false);

  const closeMenu = () => setShowMenu(false);

  const openMenu = e => {
    e.preventDefault();
    setShowMenu(true);
  };

  return KanBanMenu_jsx(external_react_default.a.Fragment, null, KanBanMenu_jsx(external_react_bootstrap_["Row"], {
    className: KanBanMenu_module_default.a.kanban
  }, KanBanMenu_jsx(external_react_bootstrap_["Col"], {
    md: 6,
    lg: 3
  }, KanBanMenu_jsx(external_react_bootstrap_["Row"], null, KanBanMenu_jsx(external_react_bootstrap_["Col"], {
    md: 4,
    className: KanBanMenu_module_default.a["kanban-title"]
  }, "Kanban Board"), KanBanMenu_jsx(external_react_bootstrap_["Col"], {
    md: 4,
    className: KanBanMenu_module_default.a["kanban-btn"]
  }, KanBanMenu_jsx(components_Pipe, null), KanBanMenu_jsx("a", {
    href: "#",
    className: `btn ${KanBanMenu_module_default.a["btn-custom-sub"]} ${KanBanMenu_module_default.a["btn-public"]}`
  }, KanBanMenu_jsx(go_["GoGlobe"], {
    className: KanBanMenu_module_default.a.icon
  }), "Public"), KanBanMenu_jsx(components_Pipe, null)), KanBanMenu_jsx(external_react_bootstrap_["Col"], {
    md: 4,
    lg: 2,
    className: KanBanMenu_module_default.a["kanban-initials"]
  }, KanBanMenu_jsx("a", {
    href: "#",
    className: KanBanMenu_module_default.a["initials"]
  }, "AH", KanBanMenu_jsx("span", {
    className: KanBanMenu_module_default.a.arrow,
    style: {
      backgroundImage: "url('./assets/up-arrows.png')"
    }
  }))))), KanBanMenu_jsx(external_react_bootstrap_["Col"], {
    md: 2,
    lg: 3
  }), KanBanMenu_jsx(external_react_bootstrap_["Col"], {
    md: 4,
    lg: 6,
    className: KanBanMenu_module_default.a["third-col"]
  }, KanBanMenu_jsx(components_Pipe, null), KanBanMenu_jsx("a", {
    href: "/",
    className: `btn ${KanBanMenu_module_default.a["btn-custom-sub"]}`
  }, KanBanMenu_jsx(bs_["BsFilter"], {
    className: KanBanMenu_module_default.a.icon
  }), "Filter"), KanBanMenu_jsx("a", {
    href: "#",
    className: `btn ${KanBanMenu_module_default.a["btn-custom-sub"]}`,
    onClick: openMenu
  }, KanBanMenu_jsx(hi_["HiDotsHorizontal"], {
    className: KanBanMenu_module_default.a.icon
  }), "Show Menu"))), KanBanMenu_jsx(components_SideMenu, {
    closeMenu: closeMenu,
    showMenu: showMenu
  }));
}

/* harmony default export */ var components_KanBanMenu = (KanBanMenu);
// CONCATENATED MODULE: ./pages/index.tsx

var pages_jsx = external_react_default.a.createElement;















const DEBUG = true;
const getServerSideProps = wrapper["a" /* reduxWrapper */].getServerSideProps(async ({
  store,
  query
}) => {
  if (query.preload) {
    log["a" /* default */].info("preloading?");
    store.dispatch(Object(actions["m" /* thingsLoad */])());
    store.dispatch(actions["a" /* END */]);
    await store.sagaTask.toPromise();
  }
});
function ThingsPage() {
  const {
    loading,
    loaded,
    adding,
    things,
    error
  } = Object(external_react_redux_["useSelector"])(state => state.things_page);
  const myState = Object(external_react_redux_["useSelector"])(state => state);

  const getItems = count => Array.from({
    length: count
  }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: items,
    1: setItems
  } = Object(external_react_["useState"])(getItems(6));

  const reload = () => dispatch(Object(actions["m" /* thingsLoad */])());

  const seed = () => {
    const firstListId = external_shortid_default.a.generate();
    dispatch({
      type: actions["c" /* addList */],
      payload: {
        listId: firstListId,
        listTitle: "To Do"
      }
    });
    dispatch({
      type: actions["b" /* addCard */],
      payload: {
        listId: firstListId,
        cardId: external_shortid_default.a.generate(),
        cardText: "Helpdesk Call AA999",
        commentCount: 1,
        completedTaskCount: 1,
        taskCount: 3
      }
    });
    dispatch({
      type: actions["b" /* addCard */],
      payload: {
        listId: firstListId,
        cardId: external_shortid_default.a.generate(),
        cardText: "Helpdesk Call BB999"
      }
    });
    console.log("Insert second list");
    const secondListId = external_shortid_default.a.generate();
    dispatch({
      type: actions["c" /* addList */],
      payload: {
        listId: secondListId,
        listTitle: "Development"
      }
    });
    dispatch({
      type: actions["b" /* addCard */],
      payload: {
        listId: secondListId,
        cardId: external_shortid_default.a.generate(),
        cardText: "Help Desk Call CC999",
        likeCount: 1,
        status: "red"
      }
    });
    dispatch({
      type: actions["b" /* addCard */],
      payload: {
        listId: secondListId,
        cardId: external_shortid_default.a.generate(),
        cardText: "Help Desk Call DD999"
      }
    });
    const thirdListId = external_shortid_default.a.generate();
    dispatch({
      type: actions["c" /* addList */],
      payload: {
        listId: thirdListId,
        listTitle: "Testing"
      }
    });
    dispatch({
      type: actions["b" /* addCard */],
      payload: {
        listId: thirdListId,
        cardId: external_shortid_default.a.generate(),
        cardText: "Help Desk Call EE999",
        status: "red"
      }
    });
    const fourthListId = external_shortid_default.a.generate();
    dispatch({
      type: actions["c" /* addList */],
      payload: {
        listId: fourthListId,
        listTitle: "Done"
      }
    });
    dispatch({
      type: actions["b" /* addCard */],
      payload: {
        listId: fourthListId,
        cardId: external_shortid_default.a.generate(),
        cardText: "Help Desk Call FF999",
        status: "blue"
      }
    });
    dispatch({
      type: actions["b" /* addCard */],
      payload: {
        listId: fourthListId,
        cardId: external_shortid_default.a.generate(),
        cardText: "Help Desk Call GG999",
        status: "red"
      }
    });
  };

  Object(external_react_["useEffect"])(() => {
    var _myState$board, _myState$board$lists;

    if (!loaded) reload();
    if ((myState === null || myState === void 0 ? void 0 : (_myState$board = myState.board) === null || _myState$board === void 0 ? void 0 : (_myState$board$lists = _myState$board.lists) === null || _myState$board$lists === void 0 ? void 0 : _myState$board$lists.length) > 0) return;
    seed();
  }, []);
  /* useEffect(() => {
  	console.log("myState", myState);
  }, [myState]); */

  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(components_NavBar, null), pages_jsx(components_SignUpForFree, null), pages_jsx(external_react_bootstrap_["Container"], {
    fluid: true
  }, pages_jsx(external_react_bootstrap_["Row"], null, pages_jsx(external_react_bootstrap_["Col"], {
    xs: 12
  }, pages_jsx(components_KanBanMenu, null)), pages_jsx(external_react_bootstrap_["Col"], {
    xs: 12
  }, pages_jsx(components_Board, null)))));
}

const Button = ({
  onClick,
  children,
  color = "blue",
  className = null
}) => {
  const button_class = external_clsx_default()("flex flex-row items-center font-bold px-2 py-1 rounded gap-2 cursor-pointer", `bg-${color}-600 hover:bg-${color}-700 text-${color}-100`, className);
  return pages_jsx("a", {
    className: button_class,
    onClick: onClick
  }, children);
};

const Loading = () => pages_jsx("div", {
  className: "p-8 bg-blue-100"
}, pages_jsx(Loader, {
  color: "bg-blue-200"
}));

const Error = ({
  error
}) => pages_jsx("div", null, pages_jsx("p", {
  className: "p-8 bg-red-100 text-red-800 font-bold"
}, pages_jsx(external_heroicons_react_["Exclamation"], {
  size: 16,
  className: "inline-block mr-2"
}), error.message), DEBUG && error.stack && pages_jsx("pre", {
  className: "w-full overflow-x-scroll text-xs bg-red-200 text-red-800 p-8"
}, error.stack));

const ThingsList = ({
  things
}) => pages_jsx("div", {
  className: "divide-y"
}, things.map(thing => pages_jsx(ThingItem, {
  thing: thing,
  key: thing.word
})));

const ThingItem = ({
  thing
}) => pages_jsx("div", {
  className: "p-6"
}, pages_jsx("div", {
  className: "flex flex-row gap-2 items-center"
}, pages_jsx("h2", {
  className: "text-xl font-bold"
}, thing.word), pages_jsx("p", {
  className: "italic text-gray-400"
}, thing.pronounciation)), pages_jsx("p", {
  className: "mt-2"
}, thing.definition));

/***/ }),

/***/ "2FnJ":
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "7IFt":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pipe": "Pipe_pipe__fCZMK"
};


/***/ }),

/***/ "7QO1":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav-bar": "NavBar_nav-bar__HNu3Z",
	"menu-item": "NavBar_menu-item__3AgxA",
	"logo": "NavBar_logo__2ukbX",
	"registration": "NavBar_registration__32-W-",
	"btn-custom-success": "NavBar_btn-custom-success__1yrlW",
	"btn-custom-primary": "NavBar_btn-custom-primary__19hoq"
};


/***/ }),

/***/ "7v8O":
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "9yvl":
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "GBly":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sign-up-for-free-container": "SignUpForFree_sign-up-for-free-container__2_S0E",
	"mod-warning": "SignUpForFree_mod-warning__3LJQs",
	"btn-custom-primary": "SignUpForFree_btn-custom-primary__15pAg"
};


/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "TOz4":
/***/ (function(module, exports) {

module.exports = require("react-textarea-autosize");

/***/ }),

/***/ "a/YO":
/***/ (function(module, exports) {

module.exports = require("heroicons-react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cNie":
/***/ (function(module, exports) {

module.exports = require("tailwindcss/colors");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

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

/***/ "eRny":
/***/ (function(module, exports) {

module.exports = require("react-icons/bi");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

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

/***/ "mNS/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"kanban": "KanBanMenu_kanban__1jGO3",
	"kanban-title": "KanBanMenu_kanban-title__2G7X-",
	"kanban-btn": "KanBanMenu_kanban-btn__gLPoS",
	"kanban-initials": "KanBanMenu_kanban-initials__1IQ0k",
	"btn-custom-sub": "KanBanMenu_btn-custom-sub__X9_wO",
	"btn-public": "KanBanMenu_btn-public__1oj8E",
	"initials": "KanBanMenu_initials__3WKir",
	"icon": "KanBanMenu_icon__6M8AB",
	"arrow": "KanBanMenu_arrow__Pqf-L",
	"third-col": "KanBanMenu_third-col__2sLlG"
};


/***/ }),

/***/ "qEf8":
/***/ (function(module, exports) {

module.exports = require("react-icons/hi");

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

/***/ "t6KM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card-activities": "Card_card-activities__2B4SC",
	"activity": "Card_activity__1K0_J",
	"activity-icon": "Card_activity-icon__3MYRN",
	"activity-content": "Card_activity-content__2gcdp",
	"card": "Card_card__2LT8R",
	"card-status": "Card_card-status__2QFjg",
	"red": "Card_red__2nqPx",
	"card-icons": "Card_card-icons__2onxU",
	"card-icon": "Card_card-icon__22mKY"
};


/***/ }),

/***/ "uzjx":
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ }),

/***/ "ywLQ":
/***/ (function(module, exports) {

module.exports = require("lodash.throttle");

/***/ }),

/***/ "zUYm":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"side-menu": "SideMenu_side-menu__2clct",
	"open": "SideMenu_open__19vvy",
	"side-menu__header": "SideMenu_side-menu__header__2IjdH",
	"side-menu__header-logo": "SideMenu_side-menu__header-logo__3A-OS",
	"side-menu__close": "SideMenu_side-menu__close__ErPDH",
	"side-menu__content": "SideMenu_side-menu__content__3nDlh",
	"hr": "SideMenu_hr__30f3Q",
	"menu-item-container": "SideMenu_menu-item-container__8aLDg",
	"item": "SideMenu_item__3H2Vh",
	"icon": "SideMenu_icon__39S1m",
	"text": "SideMenu_text__irY_e",
	"rounded": "SideMenu_rounded__1yMdZ",
	"bold": "SideMenu_bold__3ScaW",
	"timestamp": "SideMenu_timestamp__1vho9",
	"underline": "SideMenu_underline__3Q0Uu",
	"sub-item": "SideMenu_sub-item__2MXgK"
};


/***/ })

/******/ });