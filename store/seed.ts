import shortid from "shortid";
import * as actions from "./actions";
import { useDispatch } from "react-redux";
export default function seed(store) {
	console.log("Insert first list");
	const firstListId = shortid.generate();

	store.dispatch({
		type: actions.addList,
		payload: { listId: firstListId, listTitle: "First list" },
	});

	store.dispatch({
		type: actions.addCard,
		payload: {
			listId: firstListId,
			cardId: shortid.generate(),
			cardText: "First card",
		},
	});

	store.dispatch({
		type: actions.addCard,
		payload: {
			listId: firstListId,
			cardId: shortid.generate(),
			cardText: "Second card",
		},
	});

	console.log("Insert second list");
	const secondListId = shortid.generate();

	store.dispatch({
		type: actions.addList,
		payload: { listId: secondListId, listTitle: "Second list" },
	});

	store.dispatch({
		type: actions.addCard,
		payload: {
			listId: secondListId,
			cardId: shortid.generate(),
			cardText: "Card 1",
		},
	});

	store.dispatch({
		type: actions.addCard,
		payload: {
			listId: secondListId,
			cardId: shortid.generate(),
			cardText: "Card 2",
		},
	});
}
