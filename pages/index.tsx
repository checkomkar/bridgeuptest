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
import NavBar from "../components/NavBar";
import SignUpForFree from "../components/SignUpForFree";
import KanBanMenu from "../components/KanBanMenu";
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
		if (myState?.board?.lists?.length > 0) return;
		seed();
	}, []);

	/* useEffect(() => {
		console.log("myState", myState);
	}, [myState]); */

	return (
		<>
			<NavBar />
			<SignUpForFree />
			<Container fluid>
				<Row>
					<Col xs={12}>
						<KanBanMenu />
					</Col>
					<Col xs={12}>
						<Board />
					</Col>
				</Row>
			</Container>
		</>
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
