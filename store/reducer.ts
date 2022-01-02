import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { AppState } from "./types";
import * as actions from "./actions";
import initialState from "./state";

import { createStore } from "redux";
import throttle from "lodash.throttle";
import seed from "./seed";

const thingsPageReducer = createReducer(initialState.things_page, (builder) => {
	builder
		.addCase(actions.thingsLoad, (state, action) => {
			state.loading = true;
			state.loaded = false;
			state.error = null;
		})
		.addCase(actions.thingsLoadComplete, (state, action) => {
			state.loading = false;
			state.loaded = true;
			if (action.payload.error) state.error = action.payload.error;
			else state.things = action.payload.things;
		})
		.addCase(actions.thingsLoadError, (state, action) => {
			state.loading = false;
			state.loaded = true;
			state.error = action.payload;
		})

		.addCase(actions.thingAdd, (state, action) => {
			state.adding = true;
		})
		.addCase(actions.thingAddComplete, (state, action) => {
			state.adding = false;
			state.things.unshift(action.payload.thing);
		})
		.addCase(actions.thingAddError, (state, action) => {
			state.adding = false;
			state.error = action.payload;
		});
});

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
		default:
			return state;
	}
};

// Combined state
// -----------------------------------------------------------------------------

const combinedReducer = combineReducers({
	things_page: thingsPageReducer,
	board,
	listsById,
	cardsById,
});

function rootReducer(state: any = initialState, action) {
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
