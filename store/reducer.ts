import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { AppState } from "./types";
import * as actions from "./actions";
import initialState from "./state";

import { createStore } from "redux";
import throttle from "lodash.throttle";
import seed from "./seed";

//Board reducer
const board = (state = { lists: [] }, action: any) => {
	switch (action.type) {
		case actions.addList: {
			const { listId } = action.payload;
			return { lists: [...state.lists, listId] };
		}
		case actions.moveList: {
			const { oldListIndex, newListIndex } = action.payload;
			const newLists = Array.from(state.lists);
			const [removedList] = newLists.splice(oldListIndex, 1);
			newLists.splice(newListIndex, 0, removedList);
			return { lists: newLists };
		}
		case actions.deleteList: {
			const { listId } = action.payload;
			const filterDeleted = (tmpListId) => tmpListId !== listId;
			const newLists = state.lists.filter(filterDeleted);
			return { lists: newLists };
		}
		// case actions.setSearchValue: {
		// 	const { searchValue } = action.payload;
		// 	console.log("board by id red", state, searchValue);
		// 	return state;
		// }
		default:
			return state;
	}
};

//ListById reducer

const listsById = (state = {}, action) => {
	switch (action.type) {
		case actions.addList: {
			const { listId, listTitle } = action.payload;
			return {
				...state,
				[listId]: { _id: listId, title: listTitle, cards: [] },
			};
		}
		case actions.changeListTitle: {
			const { listId, listTitle } = action.payload;
			return {
				...state,
				[listId]: { ...state[listId], title: listTitle },
			};
		}
		case actions.deleteList: {
			const { listId } = action.payload;
			//const { [listId]: deletedList, ...restOfLists } = state;
			let newState = { ...state };
			delete newState[listId];
			return newState;
		}
		case actions.addCard: {
			const { listId, cardId } = action.payload;
			return {
				...state,
				[listId]: {
					...state[listId],
					cards: [...state[listId].cards, cardId],
				},
			};
		}
		case actions.moveCard: {
			const { oldCardIndex, newCardIndex, sourceListId, destListId } =
				action.payload;
			// Move within the same list
			if (sourceListId === destListId) {
				const newCards = Array.from(state[sourceListId].cards);
				const [removedCard] = newCards.splice(oldCardIndex, 1);
				newCards.splice(newCardIndex, 0, removedCard);
				return {
					...state,
					[sourceListId]: { ...state[sourceListId], cards: newCards },
				};
			}
			// Move card from one list to another
			const sourceCards = Array.from(state[sourceListId].cards);
			const [removedCard] = sourceCards.splice(oldCardIndex, 1);
			const destinationCards = Array.from(state[destListId].cards);
			destinationCards.splice(newCardIndex, 0, removedCard);
			return {
				...state,
				[sourceListId]: { ...state[sourceListId], cards: sourceCards },
				[destListId]: { ...state[destListId], cards: destinationCards },
			};
		}
		case actions.deleteCard: {
			const { cardId: deletedCardId, listId } = action.payload;
			const filterDeleted = (cardId) => cardId !== deletedCardId;
			return {
				...state,
				[listId]: {
					...state[listId],
					cards: state[listId].cards.filter(filterDeleted),
				},
			};
		}
		case actions.setSearchValue: {
			const { searchValue, isCard } = action.payload;
			if (localStorage.getItem("listsById")) {
				const listsById = JSON.parse(localStorage.getItem("listsById"));
			}
			let newState = { ...state };
			//console.log("list by id red", state, searchValue);
			if (
				isCard == false ||
				searchValue == "" ||
				searchValue == null ||
				searchValue == undefined
			) {
				return state;
			}
			for (let k in newState) {
				if (newState.hasOwnProperty(k) && k != searchValue._id) {
					delete newState[k];
				}
			}
			console.log("list by id red", state, newState);
			return newState == {} ? state : newState;
		}
		default:
			return state;
	}
};

//Cards By ID reducer

const cardsById = (state = {}, action) => {
	switch (action.type) {
		case actions.addCard: {
			const {
				cardText,
				cardId,
				commentCount,
				completedTaskCount,
				taskCount,
				likeCount,
				status,
			} = action.payload;
			return {
				...state,
				[cardId]: {
					text: cardText,
					_id: cardId,
					commentCount: commentCount ? commentCount : null,
					taskCount: taskCount ? taskCount : null,
					completedTaskCount: completedTaskCount
						? completedTaskCount
						: null,
					likeCount: likeCount ? likeCount : null,
					status: status ? status : null,
				},
			};
		}
		case actions.changeCardText: {
			const { cardText, cardId } = action.payload;
			return { ...state, [cardId]: { ...state[cardId], text: cardText } };
		}
		case actions.deleteCard: {
			const { cardId } = action.payload;
			//const { [cardId]: deletedCard, ...restOfCards } = state;
			let newState = { ...state };
			delete newState[cardId];
			return newState;
		}
		// Find every card from the deleted list and remove it
		case actions.deleteList: {
			const { cards: cardIds } = action.payload;
			return Object.keys(state)
				.filter((cardId) => !cardIds.includes(cardId))
				.reduce(
					(newState, cardId) => ({
						...newState,
						[cardId]: state[cardId],
					}),
					{}
				);
		}
		case actions.setSearchValue: {
			const { searchValue, isCard } = action.payload;
			let newState = { ...state };

			if (
				isCard ||
				searchValue == "" ||
				searchValue == null ||
				searchValue == undefined
			) {
				return state;
			}
			//console.log("list by id red", state, searchValue);
			for (let k in newState) {
				if (newState.hasOwnProperty(k) && k != searchValue._id) {
					delete newState[k];
				}
			}
			console.log("cards by id red", state, newState);
			return newState == {} ? state : newState;
		}
		default:
			return state;
	}
};

// Combined state
// -----------------------------------------------------------------------------

const combinedReducer = combineReducers({
	board,
	listsById,
	cardsById,
});

function rootReducer(state: any, action) {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload };
		default:
			return combinedReducer(state, action);
	}
}

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch {
		// ignore write errors
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
const store = createStore(combinedReducer, persistedState);

store.subscribe(
	throttle(() => {
		console.log("store changed");
		saveState(store.getState());
	}, 1000)
);

console.log(store.getState(), JSON.stringify(store.getState()));

if (
	!store.getState().board.lists.length ||
	store.getState().board.lists.length === 0
) {
	console.log("SEED");
	//seed(store);
}

export default rootReducer;
