import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Icons from "heroicons-react";
import clsx from "clsx";
import { thingsLoad, thingAdd, END } from "../store/actions";
import * as actions from "../store/actions";
import { reduxWrapper } from "../store/wrapper";
import type { AppState, Thing } from "../store/types";
import Loader from "../components/loader";
import Input from "../components/input";
import log from "../lib/log";
import { Col, Container, Row } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Board from "../components/Board";
import shortid from "shortid";
const DEBUG = true;

export const getServerSideProps = reduxWrapper.getServerSideProps(
	async ({ store, query }) => {
		if (query.preload) {
			log.info("preloading?");
			store.dispatch(thingsLoad());
			store.dispatch(END);
			await store.sagaTask.toPromise();
		}
	}
);

export default function ThingsPage() {
	const { loading, loaded, adding, things, error } = useSelector(
		(state: any) => state.things_page
	);

	const myState = useSelector((state: any) => state);
	const getItems = (count) =>
		Array.from({ length: count }, (v, k) => k).map((k) => ({
			id: `item-${k}`,
			content: `item ${k}`,
		}));
	const dispatch = useDispatch();
	const [items, setItems] = useState(getItems(6));
	const reload = () => dispatch(thingsLoad());

	const seed = () => {
		const firstListId = shortid.generate();

		dispatch({
			type: actions.addList,
			payload: { listId: firstListId, listTitle: "First list" },
		});

		dispatch({
			type: actions.addCard,
			payload: {
				listId: firstListId,
				cardId: shortid.generate(),
				cardText: "First card",
			},
		});

		dispatch({
			type: actions.addCard,
			payload: {
				listId: firstListId,
				cardId: shortid.generate(),
				cardText: "Second card",
			},
		});

		console.log("Insert second list");
		const secondListId = shortid.generate();

		dispatch({
			type: actions.addList,
			payload: { listId: secondListId, listTitle: "Second list" },
		});

		dispatch({
			type: actions.addCard,
			payload: {
				listId: secondListId,
				cardId: shortid.generate(),
				cardText: "Card 1",
			},
		});

		dispatch({
			type: actions.addCard,
			payload: {
				listId: secondListId,
				cardId: shortid.generate(),
				cardText: "Card 2",
			},
		});
	};

	useEffect(() => {
		if (!loaded) reload();
		seed();
	}, []);

	/* useEffect(() => {
		console.log("myState", myState);
	}, [myState]); */

	const randomThingAdd = () => {
		dispatch(
			thingAdd({
				word: "wee",
				pronounciation: "wfoe",
				definition: "asdfma",
			})
		);
	};

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	const onDragEnd = (result) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const itemsReordered: any = reorder(
			items,
			result.source.index,
			result.destination.index
		);

		setItems(itemsReordered);
	};

	const grid = 8;

	const getItemStyle = (isDragging, draggableStyle) => ({
		// some basic styles to make the items look a bit nicer
		userSelect: "none",
		padding: grid * 2,
		margin: `0 ${grid}px 0 0`,

		// change background colour if dragging
		background: isDragging ? "lightgreen" : "grey",

		// styles we need to apply on draggables
		...draggableStyle,
	});

	const getListStyle = (isDraggingOver) => ({
		background: isDraggingOver ? "lightblue" : "lightgrey",
		display: "flex",
		padding: grid,
		overflow: "auto",
	});

	return (
		<Container fluid>
			<Row>
				<Col xs={12}>
					1 of 1<h1 className="text-2xl font-bold mb-4">Things</h1>
					<Board />
				</Col>
				{/* <Col>
							<DragDropContext onDragEnd={onDragEnd}>
								<Droppable
									droppableId="droppable"
									direction="horizontal"
								>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											style={getListStyle(
												snapshot.isDraggingOver
											)}
											{...provided.droppableProps}
										>
											{items.map((item, index) => (
												<Draggable
													key={item.id}
													draggableId={item.id}
													index={index}
												>
													{(provided, snapshot) => (
														<div
															ref={
																provided.innerRef
															}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															style={getItemStyle(
																snapshot.isDragging,
																provided
																	.draggableProps
																	.style
															)}
														>
															{item.content}
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
							</DragDropContext>
						</Col> */}
			</Row>
		</Container>
	);
}

const Button = ({ onClick, children, color = "blue", className = null }) => {
	const button_class = clsx(
		"flex flex-row items-center font-bold px-2 py-1 rounded gap-2 cursor-pointer",
		`bg-${color}-600 hover:bg-${color}-700 text-${color}-100`,
		className
	);
	return (
		<a className={button_class} onClick={onClick}>
			{children}
		</a>
	);
};

const Loading = () => (
	<div className="p-8 bg-blue-100">
		<Loader color="bg-blue-200" />
	</div>
);

const Error = ({ error }) => (
	<div>
		<p className="p-8 bg-red-100 text-red-800 font-bold">
			<Icons.Exclamation size={16} className="inline-block mr-2" />
			{error.message}
		</p>
		{DEBUG && error.stack && (
			<pre className="w-full overflow-x-scroll text-xs bg-red-200 text-red-800 p-8">
				{error.stack}
			</pre>
		)}
	</div>
);

const ThingsList = ({ things }: { things: Thing[] }) => (
	<div className="divide-y">
		{things.map((thing) => (
			<ThingItem thing={thing} key={thing.word} />
		))}
	</div>
);

const ThingItem = ({ thing }) => (
	<div className="p-6">
		<div className="flex flex-row gap-2 items-center">
			<h2 className="text-xl font-bold">{thing.word}</h2>
			<p className="italic text-gray-400">{thing.pronounciation}</p>
		</div>
		<p className="mt-2">{thing.definition}</p>
	</div>
);
